import { inject, injectable } from 'inversify'
import TYPES from '../Inversify/types'
import { GenericRepository } from '../domain/generic.repository'
import { User } from './user.interface'

interface UserRepository extends GenericRepository<User, number> {}

@injectable()
export class UserRepositoryImpl implements UserRepository {
	private _users: Map<number, User> = new Map()

	findAll() {
		return [...this._users.values()]
	}

	create(user: User): User {
		const id = Date.now()
		user.id = id
		this._users.set(id, user)
		return user
	}

	findById(id: number) {
		return this._users.get(id) ?? null
	}

	update(id: number, user: User) {
		let query = this._users.get(id) ?? null
		if (query) {
			this._users.delete(id)
			this._users.set(user.id, { ...query, ...user })
		}
		return query
	}

	delete(id: number) {
		this._users.delete(id)
	}
}

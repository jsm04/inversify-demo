import { Container } from 'inversify'
import { UserRepositoryImpl } from '../Users/users.repository'
import TYPES from './types'

const container = new Container()

container
	.bind<UserRepositoryImpl>(TYPES.UserRepositoryImpl)
	.to(UserRepositoryImpl)
	.inSingletonScope()

export default container

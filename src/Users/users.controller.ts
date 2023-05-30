import { Request, Response } from 'express'
import {
	controller,
	httpGet,
	httpPost,
	interfaces,
	request,
	response,
} from 'inversify-express-utils'
import { UserRepositoryImpl } from './users.repository'
import TYPES from '../Inversify/types'
import { inject } from 'inversify'

@controller('/users')
export class UserController implements interfaces.Controller {
	private userRepository: UserRepositoryImpl
	constructor(@inject(TYPES.UserRepositoryImpl) userRepository: UserRepositoryImpl) {
		this.userRepository = userRepository
	}

	@httpGet('/')
	public async index(@request() req: Request, @response() res: Response) {
		try {
			const users = this.userRepository.findAll()
			res.status(200).json(users)
		} catch (error) {
			res.status(400).json(error)
		}
	}
	@httpPost('/')
	public async create(@request() req: Request, @response() res: Response) {
		try {
			const users = this.userRepository.create(req.body)
			res.status(200).json(users)
		} catch (error) {
			res.status(400).json(error)
		}
	}
}

import compress from 'compression'
import cors from 'cors'
import express from 'express'
import { frameguard, hidePoweredBy, noSniff, xssFilter } from 'helmet'

export class Server {
	#server = express()

	constructor() {
		this.#server.use(express.urlencoded({ extended: true }))
		this.#server.use(express.json())
		this.#server.use(xssFilter())
		this.#server.use(noSniff())
		this.#server.use(hidePoweredBy())
		this.#server.use(frameguard({ action: 'deny' }))
		this.#server.use(cors())
		this.#server.use(compress())
	}

	 getHTTPServer() {
		return this.#server
	}
}

// Reflect metadata
import 'reflect-metadata'

// App imports
import express from 'express'
import { InversifyExpressServer } from 'inversify-express-utils'
import container from './Inversify/config'
import { Server } from './server'

// Controllers
import './Users/users.controller'

// App
const app = new Server().getInstance

const serverBuilder = new InversifyExpressServer(container, null, { rootPath: '/api' }, app)
const appConfigured = serverBuilder.build()

const serve: any = appConfigured.listen(process.env.PORT || 3000, () =>
	console.log(`App running on ${serve.address().port}`)
)

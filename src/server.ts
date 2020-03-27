import { Server } from '@hapi/hapi'
import * as fs from 'fs'

import * as Swagger from './plugins/swagger'

export async function init(): Promise<Server> {
    try {
        const port = process.env.PORT
        const server = new Server({
            debug: { request: ['error'] },
            port: port,
            routes: {
                cors: {
                    origin: ['*']
                }
            }
        })

        console.log('Register plugins')

        await Swagger.register(server)

        console.log('Routes register start')

        const routesPath = `${__dirname}/routes`
        fs.readdirSync(routesPath).forEach((path: string) => {
            const routePath = `${routesPath}/${path}`

            if (fs.statSync(routePath).isDirectory()) {
                require(routePath).default().register(server)
            }
        })

        console.log('Routes registered sucessfully.')

        return server
    } catch (err) {
        console.log('Error starting server: ', err)
        throw err
    }
}

import * as Hapi from "hapi"
import * as Medic from "./api/medics"

import * as Swagger from "./plugins/swagger"

export async function init(): Promise<Hapi.Server> {
    try {
        const port = process.env.PORT
        const server = new Hapi.Server({
            debug: { request: ['error'] },
            port: port,
            routes: {
                cors: {
                    origin: ["*"]
                }
            }
        })

        console.log("Register plugins")

        await Swagger.register(server)

        console.log("Routes register start")

        // Add routes here
        Medic.init(server)

        console.log("Routes registered sucessfully.")

        return server
    } catch (err) {
        console.log("Error starting server: ", err)
        throw err
    }
}

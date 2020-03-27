import { Server } from '@hapi/hapi'
import HapiSwagger from "hapi-swagger"

export const register = async (server: Server): Promise<void> => {
    try {
        return server.register([
            require("@hapi/inert"),   // Fuck JS
            require("@hapi/vision"),  // Fuck JS
            {
                plugin: HapiSwagger,
                options: {
                    info: {
                        title: "Task Api",
                        description: "Task Api Documentation",
                        version: "0.0.1"
                    },
                    tags: [
                        {
                            name: "tasks",
                            description: "Api tasks interface."
                        },
                        {
                            name: "users",
                            description: "Api users interface."
                        }
                    ],
                    swaggerUI: true,
                    documentationPage: true,
                    documentationPath: "/docs"
                }
            }
        ]);
    } catch (err) {
        console.log(`Error registering swagger plugin: ${err}`)
    }
}

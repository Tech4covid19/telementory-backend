import * as Hapi from "hapi"
import Controller from "./Controller"

export default function (
    server: Hapi.Server,
) {
    const controller = new Controller()
    server.bind(controller);

    server.route({
        method: "GET",
        path: "/medic",
        options: {
            handler: controller.infoMedic,
            //   auth: "jwt",
            tags: ["api", "medic"],
            description: "Get medic info.",
            plugins: {
                "hapi-swagger": {
                    responses: {
                        "200": {
                            description: "User founded."
                        },
                        "401": {
                            description: "Please login."
                        }
                    }
                }
            }
        }
    })
}

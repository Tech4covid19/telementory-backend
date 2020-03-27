import * as Hapi from "hapi"
import Routes from "./Routes"

export function init(server: Hapi.Server) {
    Routes(server)
}

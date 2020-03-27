import * as Hapi from "hapi"
import { IMedic, Medic } from "./Medic"

export default class MedicController {

    constructor() { }

    public async infoMedic(id: string, h: Hapi.ResponseToolkit) {

        let medic: IMedic = new Medic("a", "a", "a", new Date())
        return medic
    }
}

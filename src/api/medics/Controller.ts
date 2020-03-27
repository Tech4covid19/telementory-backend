import { IMedic, Medic } from "./Medic"

export default class MedicController {

    constructor() { }

    public async infoMedic() {

        let medic: IMedic = new Medic("a", "a", "a", new Date())
        return medic
    }
}

import { IMedic, Medic } from '../../model/Medic'

export default class MedicController {

    constructor() { }

    public async infoMedic() {

    	let medic: IMedic = new Medic()
        //let medic: IMedic = new Medic('a', 'a', 'a', new Date())
        return medic
    }
}


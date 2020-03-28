import { User } from '../../model/User'

export default class UserController {

	constructor() { }

	public async userRegistration() {
		let user = new User('this guy..','thisguy@homemed', new Date(),"919123000")
		// a user should be registred according to his staff type and specialy
		//let medic = new Medic() 
	}
}
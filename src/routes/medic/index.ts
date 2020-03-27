import { Route } from '../interface'
import { Server } from '@hapi/hapi'
import MedicController from '../../api/medics/Controller'

export default (): Route => {
    return {
        register: (server: Server) => {
            const controller = new MedicController()
            server.bind(controller)

            server.route({
                method: 'GET',
                path: '/medic',
                options: {
                    handler: controller.infoMedic,
                    //   auth: 'jwt',
                    tags: ['api', 'medic'],
                    description: 'Get medic info.',
                    plugins: {
                        'hapi-swagger': {
                            responses: {
                                '200': {
                                    description: 'Medic founded.'
                                },
                                '401': {
                                    description: 'Please login.'
                                }
                            }
                        }
                    }
                }
            })
        }
    }
}

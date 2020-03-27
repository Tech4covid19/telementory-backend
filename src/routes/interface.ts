import { Server } from '@hapi/hapi'

export interface Route {
    register(server: Server): void
}


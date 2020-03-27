"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Controller_1 = __importDefault(require("./Controller"));
function default_1(server) {
    const controller = new Controller_1.default();
    server.bind(controller);
    server.route({
        method: "GET",
        path: "/medic",
        options: {
            handler: controller.infoMedic,
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
    });
}
exports.default = default_1;

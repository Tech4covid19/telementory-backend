"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Hapi = __importStar(require("hapi"));
const Medic = __importStar(require("./api/medics"));
async function init() {
    try {
        const port = process.env.PORT;
        const server = new Hapi.Server({
            debug: { request: ['error'] },
            port: port,
            routes: {
                cors: {
                    origin: ["*"]
                }
            }
        });
        console.log("Routes register start");
        Medic.init(server);
        console.log("Routes registered sucessfully.");
        return server;
    }
    catch (err) {
        console.log("Error starting server: ", err);
        throw err;
    }
}
exports.init = init;

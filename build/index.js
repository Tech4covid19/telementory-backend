"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Server = __importStar(require("./server"));
console.log(`Running environment ${process.env.NODE_ENV || "dev"}`);
process.on("uncaughtException", (error) => {
    console.error(`uncaughtException ${error.message}`);
});
process.on("unhandledRejection", (reason) => {
    console.error(`unhandledRejection ${reason}`);
});
const start = async () => {
    try {
        const server = await Server.init();
        await server.start();
        console.log("Server running at:", server.info.uri);
    }
    catch (err) {
        console.error("Error starting server: ", err.message);
        throw err;
    }
};
start();

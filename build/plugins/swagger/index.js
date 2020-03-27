"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
impor;
const register = async (server) => {
    try {
        return server.register([
            require("inert"),
            require("vision"),
            {
                plugin: require("hapi-swagger"),
                options: {
                    info: {
                        title: "Task Api",
                        description: "Task Api Documentation",
                        version: "0.0.1"
                    },
                    tags: [
                        {
                            name: "tasks",
                            description: "Api tasks interface."
                        },
                        {
                            name: "users",
                            description: "Api users interface."
                        }
                    ],
                    swaggerUI: true,
                    documentationPage: true,
                    documentationPath: "/docs"
                }
            }
        ]);
    }
    catch (err) {
        console.log(`Error registering swagger plugin: ${err}`);
    }
};
exports.default = () => {
    return {
        register,
        info: () => {
            return { name: "Swagger Documentation", version: "1.0.0" };
        }
    };
};

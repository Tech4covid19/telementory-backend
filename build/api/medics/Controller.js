"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Medic_1 = require("./Medic");
class MedicController {
    constructor() { }
    async infoMedic(id, h) {
        let medic = new Medic_1.Medic("a", "a", "a", new Date());
        return medic;
    }
}
exports.default = MedicController;

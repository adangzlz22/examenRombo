"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prospectoControllers_1 = require("../controllers/prospectoControllers");
class ProspectoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', prospectoControllers_1.prospectoController.prospecto);
        this.router.get('/:id', prospectoControllers_1.prospectoController.oneProspecto);
        this.router.post('/', prospectoControllers_1.prospectoController.create);
        this.router.put('/:id', prospectoControllers_1.prospectoController.update);
        this.router.delete('/:id', prospectoControllers_1.prospectoController.delete);
    }
}
const prospectoRoutes = new ProspectoRoutes();
exports.default = prospectoRoutes.router;

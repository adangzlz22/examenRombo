import { Router } from 'express';

import { prospectoController } from '../controllers/prospectoControllers';

class ProspectoRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config(): void {
        this.router.get('/', prospectoController.prospecto);
        this.router.get('/:id', prospectoController.oneProspecto);
        this.router.post('/', prospectoController.create);
        this.router.put('/:id', prospectoController.update);
        this.router.delete('/:id', prospectoController.delete);
    }
}
const prospectoRoutes = new ProspectoRoutes();
export default prospectoRoutes.router;
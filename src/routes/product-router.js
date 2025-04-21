import { Router } from "express";
import { productController } from '../controllers/product-controller.js'

const router = Router();

//Creo los endpoints
router.get('/', productController.getAll);
router.get('/:id', productController.getBayId);
router.post('/', productController.create);
router.put('/:id', productController.update);
router.delete('/:id', productController.delete);


export default router;
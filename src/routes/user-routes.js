import { Router } from "express";
import { userController } from "../controllers/user-controller.js";


const router = Router();

//Creo los endpoints
// Rutas públicas
router.post('/register', passport.authenticate('register', { session: false }), (req, res) => {
    res.status(201).json({ message: 'User registered successfully' });
});

router.post('/login', passport.authenticate('login', { session: false }), (req, res) => {
    // Passport devuelve el user en req.user, vos podés generar y devolver el JWT desde acá
    const user = req.user;
    const token = generateToken(user); // Tu función para crear el JWT
    res.status(200).json({ token });
});

// Rutas protegidas
router.get('/', passport.authenticate('jwt', { session: false }), userController.getAll);
router.get('/:id', passport.authenticate('jwt', { session: false }), userController.getBayId);
router.put('/:id', passport.authenticate('jwt', { session: false }), userController.update);
router.delete('/:id', passport.authenticate('jwt', { session: false }), userController.delete);

export default router;
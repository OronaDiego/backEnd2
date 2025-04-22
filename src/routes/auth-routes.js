import { Router } from 'express';
import passport from 'passport';
import '../config/passport.config.js';
import { generateToken, authMiddlewareJWT } from '../config/passport.config.js';

const router = Router();

router.post('/login', (req, res, next) => {
    passport.authenticate('login', { session: false }, (err, user, info) => {
        if (err) return next(err);
        if (!user) return res.status(401).json({ error: 'Authentication failed' });

        const token = generateToken(user);
        res.json({ token });
    })(req, res, next);
});

// Ruta protegida con JWT
router.get('/profile', authMiddlewareJWT, (req, res) => {
    res.json({ message: 'Perfil accedido correctamente', user: req.user });
});

export default router;

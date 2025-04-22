import jwt from 'jsonwebtoken';
import 'dotenv/config'


const JWT_SECRET = process.env.JWT_SECRET; 

// Middleware para validar token
export const authMiddlewareJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) return res.status(401).json({ error: 'No token provided' });

    const token = authHeader.split(' ')[1]; // "Bearer TOKEN"

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ error: 'Invalid token' });
        req.user = user;
        next();
    });
};

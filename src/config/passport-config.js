import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcrypt';
import { userService } from '../services/user-service.js';
import jwt from 'jsonwebtoken';
import 'dotenv/config';


const JWT_SECRET = process.env.JWT_SECRET;

passport.use('login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done) => {
    try {
        const user = await userService.getByEmail(email);
        if (!user) return done(null, false, { message: 'User not found' });

        const isValid = bcrypt.compareSync(password, user.password);
        if (!isValid) return done(null, false, { message: 'Invalid password' });

        return done(null, user);
    } catch (err) {
        return done(err);
    }
}));


// Helper para generar token
export const generateToken = (user) => {
    const payload = {
        id: user._id,
        email: user.email,
        role: user.role
    };

    return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
};



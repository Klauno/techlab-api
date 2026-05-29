import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import { loginService } from '../services/auth.service.js';

dotenv.config();

export const login = async (req, res) => {

    try {

        const { username, password } = req.body;

        const validUser = await loginService(
            username,
            password
        );

        if (!validUser) {

            return res.status(401).json({
                message: 'Credenciales inválidas'
            });
        }

        const token = jwt.sign(
            { username },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(200).json({
            token
        });

    } catch (error) {

        res.status(500).json({
            message: 'Error del servidor'
        });
    }
}
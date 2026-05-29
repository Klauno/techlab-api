import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const verifyToken = (
    req,
    res,
    next
) => {

    try {

        const authHeader =
            req.headers.authorization;

        if (!authHeader) {

            return res.status(401).json({
                message: 'Token requerido'
            });
        }

        const token =
            authHeader.split(' ')[1];

        jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        next();

    } catch (error) {

        return res.status(403).json({
            message: 'Token inválido'
        });
    }
};
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { envs } from '../config';

export const validateJWT = ( req: Request, res: Response, next: NextFunction ) => {
    const token = req.header('auth-token');

    if ( !token ) {
        return res.status(401).json({
            msg: 'token required in request headers'
        });
    }

    try {
        jwt.verify( token, envs.JWT_SECRET_OR_PUBLIC_KEY );

    } catch (error) {
        console.log( error );
        res.status(401).json({
            msg: 'invalid token'
        })
    }

    next()
}








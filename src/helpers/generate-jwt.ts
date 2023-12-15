import jwt from 'jsonwebtoken';
import { envs } from '../config';

export const generateJWT = async ( uid: string ) => {
    const payload = { uid };
    try {
        return jwt.sign( payload, envs.JWT_SECRET_OR_PUBLIC_KEY, { expiresIn: '12h' } );
    } catch (error) {
        console.log( error );
    }

}








import { Request, Response } from "express";
import { compareSync } from 'bcrypt';
import { UserModel } from "../../models";
import { generateJWT } from "../../helpers";

export const loginUserService = async ( req: Request, res: Response ) => {

    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });

    //* Verify Credentials
    const isPasswordValid = compareSync( password, user?.password! );

    if ( !isPasswordValid ) {
        return res.status(400).json('Email or password incorrect');
    }
    
    //* Get JWT
    const token = await generateJWT( user?.id );
    
    return res.json({
        user,
        token
    });
}
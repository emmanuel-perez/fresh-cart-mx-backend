import { Request, Response } from "express";
import { generateJWT, googleVerify } from "../../helpers";
import { UserModel } from "../../models";
import { validateUserStatusByEmail } from "../../middlewares";

export const googleLoginService = async ( req: Request, res: Response ) => {

    const { id_token } = req.body; 

    try {
        const { name, email } = await googleVerify( id_token );

        let user = await UserModel.findOne({ email });

        //* Create user if user does not exist
        if ( !user ) {
            const data = {
                email,
                password: 'googlepassword',
                googleUser: true,
            }

            user = new UserModel( data );
            user.save();

        }

        //* Login user if exists

        if ( !user.status ) {
            return res.status(401).json({
                msg: `user with email ${ email } has been marked as deactivated from database`
            })
        }

        //* Generate JWT
        const token = await generateJWT( user.id )

        res.json({
            user,
            token
        })

    } catch (error) {
        return res.status(400).json({
            msg: 'token verification failed'
        })
    }

    

}








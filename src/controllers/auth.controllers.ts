import { Request, Response } from "express";
import { googleLoginService, loginUserService, signUpUserService } from "../services";


export const loginUser = ( req: Request, res: Response ) => {
    return loginUserService( req, res );
}

export const googleLogin = ( req: Request, res: Response ) => {
    return googleLoginService( req, res );
}

// export const signUpUser = ( req: Request, res: Response ) => {
//     return signUpUserService( req, res );
// }








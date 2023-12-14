import { Request, Response } from "express";
import { loginUserService, signUpUserService } from "../services";


export const loginUser = ( req: Request, res: Response ) => {
    return loginUserService( req, res );
}

export const signUpUser = ( req: Request, res: Response ) => {
    return signUpUserService( req, res );
}








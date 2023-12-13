import { Request, Response } from "express";
import { UserModel } from "../../models";

export const getUserByIdService = async ( req: Request, res: Response ) => {
    const { id } = req.params;
    const user = await UserModel.findById( id );
    return res.json( user );
}








import { Request, Response } from "express";
import { UserModel } from "../../models";

export const getAllUsersService = async ( req: Request, res: Response ) => {
    const users = await UserModel.find({ status: true })
    return res.json( users );
}







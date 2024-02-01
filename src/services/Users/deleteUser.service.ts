import { Request, Response } from "express";
import { UserModel } from "../../models";

export const deleteUserService = async ( req: Request, res: Response ) => {
    const { id } = req.params;
    const deletedUser = await UserModel.findByIdAndUpdate( id, { status: false }, { new: true } );
    return res.json({ 
        message: `The user with id ${ deletedUser?.id } has been eliminated`,
        user: deletedUser 
    });
}
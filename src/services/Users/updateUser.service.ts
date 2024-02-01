import { Request, Response } from "express";
import { UserModel } from "../../models";

export const updateUserService = async ( req: Request, res: Response ) => {
    const { id } = req.params;
    const { _id, id: bodyId, ...body } = req.body;

    if ( body.name ) {
        body.name = body.name.toLowerCase();
    }

    const updatedUser = await UserModel.findByIdAndUpdate( id, body, { new: true } );

    return res.json({
        msg: 'usser updated successfully', 
        user: updatedUser 
    });
}
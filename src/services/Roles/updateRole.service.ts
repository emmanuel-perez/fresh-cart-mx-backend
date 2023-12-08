import { Request, Response } from "express";
import { RoleModel } from "../../models";

export const updateRoleService = async ( req: Request, res: Response ) => {
    
    const { id } = req.params;
    const { _id, id: bodyId, ...body } = req.body;

    if ( body.name ) {
        body.name = body.name.toLowerCase();
    }

    const updatedRole = await RoleModel.findByIdAndUpdate( id, body, { new: true } );

    return res.json( updatedRole );

}




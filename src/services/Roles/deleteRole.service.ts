import { Request, Response } from "express";
import { RoleModel } from "../../models";

export const deleteRoleService = async ( req: Request, res: Response ) => {
    const { id } = req.params;
    const deletedRole = await RoleModel.findByIdAndUpdate( id, { status: false } );
    return res.json( deletedRole );
}
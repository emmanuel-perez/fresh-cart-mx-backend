import { Request, Response } from "express";
import { RoleModel } from "../../models";

export const getRoleService = async ( req: Request, res: Response ) => {

    const { id } = req.params;

    const role = await RoleModel.findById( id );
    return res.json( role );

}




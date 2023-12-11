import { Request, Response } from "express";
import { RoleModel } from "../../models";

export const createRoleService = async ( req: Request, res: Response ) => {

    try {
        const { id, _id, type, ...body } = req.body;

        const lowerCaseRoleType: string = type.toLowerCase();
        body.type = lowerCaseRoleType;

        const newRole = await RoleModel.create({ ...body });
        return res.json( newRole );
    } catch (error) {
        return res.status(500).json({
            error
        })
    }

}
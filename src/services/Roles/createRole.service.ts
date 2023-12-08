import { Request, Response } from "express";
import { RoleModel } from "../../models";

export const createRoleService = async ( req: Request, res: Response ) => {

    try {
        const { id, _id, name, ...body } = req.body;

        const lowerCaseName: string = name.toLowerCase();
        body.name = lowerCaseName;

        const newRole = await RoleModel.create({ ...body });
        return res.json( newRole );
    } catch (error) {
        return res.status(500).json({
            error
        })
    }

}
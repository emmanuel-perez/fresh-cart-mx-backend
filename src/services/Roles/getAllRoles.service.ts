import { Request, Response } from "express";
import { RoleModel } from "../../models";

export const getAllRolesService = async ( req: Request, res: Response ) => {
    const roles = await RoleModel.find({ status: true })
    return res.json( roles );
}
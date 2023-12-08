

import { Request, Response } from "express";
import { createRoleService, deleteRoleService, getAllRolesService, getRoleService, updateRoleService } from "../services";

export const getAllRoles = ( req: Request, res: Response ) => {
    getAllRolesService( req, res );
}

export const getRoleById = ( req: Request, res: Response ) => {
    getRoleService( req, res );
}

export const createRole = ( req: Request, res: Response ) => {
    createRoleService( req, res )
}

export const updateRole = ( req: Request, res: Response ) => {
    updateRoleService( req, res );
}

export const deleteRole = ( req: Request, res: Response ) => {
    deleteRoleService( req, res );
}












import { Request, Response } from "express";
import { createUserService, deleteUserService, getAllUsersService, getUserByIdService, updateUserService } from "../services";

export const getAllUsers = ( req: Request, res: Response ) => {
    return getAllUsersService( req, res );
}

export const getUserById = ( req: Request, res: Response ) => {
    return getUserByIdService( req, res );
}

export const createUser = ( req: Request, res: Response ) => {
    return createUserService( req, res );
}

export const updateUser = ( req: Request, res: Response ) => {
    return updateUserService( req, res );
}

export const deleteUser = ( req: Request, res: Response ) => {
    return deleteUserService( req, res );
}



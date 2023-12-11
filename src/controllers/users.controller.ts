import { Request, Response } from "express";

export const getAllUsers = ( req: Request, res: Response ) => {
    return res.json('users - getAll');
}

export const getUserById = ( req: Request, res: Response ) => {
    return res.json('users - get User by ID');
}

export const createUser = ( req: Request, res: Response ) => {
    return res.json('users - create user');
}

export const updateUser = ( req: Request, res: Response ) => {
    return res.json('users - update user');
}

export const deleteUser = ( req: Request, res: Response ) => {
    return res.json('users - delete user');
}



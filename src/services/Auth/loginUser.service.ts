import { Request, Response } from "express";

export const loginUserService = async ( req: Request, res: Response ) => {
    return res.json('login user service');
}
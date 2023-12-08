import { Request, Response } from "express";

export const updateProductService = ( req: Request, res: Response ) => {
    return res.json('put - product');
}
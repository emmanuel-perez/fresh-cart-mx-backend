import { Request, Response } from "express";

export const deleteProductService = ( req: Request, res: Response ) => {
    return res.json('delete - product');
}
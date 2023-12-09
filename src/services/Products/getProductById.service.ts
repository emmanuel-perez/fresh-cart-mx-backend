import { Request, Response } from "express";
import { ProductModel } from "../../models";

export const getProductByIdService = async ( req: Request, res: Response ) => {
    const { id } = req.params;
    const product = await ProductModel.findById( id );
    return res.json( product );
}








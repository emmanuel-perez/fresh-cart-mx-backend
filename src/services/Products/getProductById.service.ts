import { Request, Response } from "express";
import { ProductModel } from "../../models";

export const getProductByIdService = async ( req: Request, res: Response ) => {
    const { id } = req.params;
    const product = await ProductModel.findById( id )
        .populate({
            path: 'category',
            select: 'name'
        })
    return res.json( product );
}








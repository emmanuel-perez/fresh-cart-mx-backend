import { Request, Response } from "express";
import { ProductModel } from "../../models";

export const deleteProductService = async ( req: Request, res: Response ) => {
    const { id } = req.params;
    const deletedProduct = await ProductModel.findByIdAndUpdate( id, { status: false }, { new: true } );
    return res.json({ 
        message: `The product ${ deletedProduct?.name } has been eliminated`,
        product: deletedProduct 
    });
}
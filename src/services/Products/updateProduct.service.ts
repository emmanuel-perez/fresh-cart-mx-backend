import { Request, Response } from "express";
import { ProductModel } from "../../models";

export const updateProductService = async ( req: Request, res: Response ) => {
    const { id } = req.params;
    const { _id, id: bodyId, ...body } = req.body;

    if ( body.name ) {
        body.name = body.name.toLowerCase();
    }

    const updatedProduct = await ProductModel.findByIdAndUpdate( id, body, { new: true } );

    return res.json( updatedProduct );
}
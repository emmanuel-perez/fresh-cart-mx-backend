import { Request, Response } from "express";
import { ProductCategoryModel } from "../../models";

export const updateProductCategoryService = async ( req: Request, res: Response ) => {
    
    const { id } = req.params;
    const { _id, id: bodyId, ...body } = req.body;

    if ( body.name ) {
        body.name = body.name.toLowerCase();
    }

    const updatedProductCategory = await ProductCategoryModel.findByIdAndUpdate( id, body, { new: true } );

    return res.json({ 
        msg: 'product category updated successfully',
        product_category: updatedProductCategory 
    });

}




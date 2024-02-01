import { Request, Response } from "express";
import { ProductCategoryModel } from "../../models";

export const deleteProductCategoryService = async ( req: Request, res: Response ) => {
    const { id } = req.params;
    const deletedProductCategory = await ProductCategoryModel.findByIdAndUpdate( id, { status: false }, { new: true } );
    return res.json({
        msg: 'product deleted succesfully',
        deleted_product: deletedProductCategory
    });
}
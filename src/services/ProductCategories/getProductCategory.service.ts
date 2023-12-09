import { Request, Response } from "express";
import { ProductCategoryModel } from "../../models";

export const getProductCategoryService = async ( req: Request, res: Response ) => {
    const { id } = req.params;
    const productCategory = await ProductCategoryModel.findById( id );
    return res.json( productCategory );
}




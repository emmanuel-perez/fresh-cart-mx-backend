import { Request, Response } from "express";
import { ProductCategoryModel } from "../../models";

export const getAllProductCategoriesService = async ( req: Request, res: Response ) => {
    const productCategories = await ProductCategoryModel.find({ status: true })
    return res.json( productCategories );
}
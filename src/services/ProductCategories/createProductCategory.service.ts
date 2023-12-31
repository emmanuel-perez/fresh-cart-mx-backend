import { Request, Response } from "express";
import { ProductCategoryModel } from "../../models";

export const createProductCategoryService = async ( req: Request, res: Response ) => {

    try {
        const { id, _id, name, ...body } = req.body;

        const lowerCaseName: string = name.toLowerCase();
        body.name = lowerCaseName;

        const newProductCategory = await ProductCategoryModel.create({ ...body });
        return res.json( newProductCategory );
    } catch (error) {
        return res.status(500).json({
            error
        })
    }

}
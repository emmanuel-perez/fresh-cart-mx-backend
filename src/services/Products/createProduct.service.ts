import { Request, Response } from "express";
import { ProductModel } from "../../models";

export const createProductService = async (req: Request, res: Response) => {

    try {
        const { id, _id, name, ...body } = req.body;

        const lowerCaseName: string = name.toLowerCase();
        body.name = lowerCaseName;

        const newProduct = await ProductModel.create({ ...body });
        return res.json( newProduct );
    } catch (error) {
        return res.status(500).json({
            error
        })
    }

}








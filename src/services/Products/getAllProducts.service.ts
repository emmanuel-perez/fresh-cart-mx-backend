import { Request, Response } from "express";
import { ProductModel } from "../../models";

export const getAllProductsService = async ( req: Request, res: Response ) => {
    const products = await ProductModel.find({ status: true })
    return res.json( products );
}







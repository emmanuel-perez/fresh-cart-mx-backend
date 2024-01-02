import { Request, Response } from "express";
import { ProductModel } from "../../models";
import { IProductGetRequest } from "../../types";

export const getProductByIdService = async (req: Request, res: Response) => {
    const { id } = req.params;
    const product: IProductGetRequest | null = await ProductModel.findById(id)
        .populate({
            path: 'category',
            select: 'name uid', // Include the 'uid' field in the select option
        })
        .lean();

    const modifiedProduct: any = {
        ...product,
        category: {
            uid: product?.category._id,
            name: product?.category.name,
        }
    }

    return res.json(modifiedProduct);
}








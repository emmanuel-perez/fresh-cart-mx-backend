import { Request, Response } from "express";
import { ProductModel } from "../../models";
import { IProductGetRequest } from "../../types";


export const getProductByIdService = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const product: IProductGetRequest | null = await ProductModel.findById(id)
            .populate({
                path: 'category',
                select: 'name',
            })
            .lean();

        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        
        const { _id, category, ...data } = product;

        //* modified product builds the product object with uid instead of id
        const modifiedProduct = {
            uid: _id,
            ...data,
            category: product.category ? { name: product.category.name, uid: product.category._id } : null,
        };

        return res.json({ product: modifiedProduct });
    } catch (error) {
        console.error("Error fetching product:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};
import { Request, Response } from "express";
import { ProductModel } from "../../models";
import { IProductGetRequest } from "../../types";


export const getProductByIdService = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        // Fetch only the necessary fields from the database
        const product: IProductGetRequest | null = await ProductModel.findById(id, { _id: 1, category: 1, /* Add other fields as needed */ })
            .populate({
                path: 'category',
                select: 'name uid',
            })
            .lean();

        // Handle the case where the product is not found
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }

        // Use object destructuring for concise code
        const { _id, category, ...data } = product;

        // Build the modified product object
        const modifiedProduct = {
            uid: _id,
            ...data,
            category: {
                uid: category?._id,
                name: category?.name,
            }
        };

        return res.json(modifiedProduct);
    } catch (error) {
        console.error("Error fetching product:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};
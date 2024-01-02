import { Request, Response } from "express";
import { ProductModel } from "../../models";
import { IProductGetRequest } from "../../types";

export const getAllProductsService = async (req: Request, res: Response) => {
    const { limit = Number.POSITIVE_INFINITY, start = 0 } = req.query;
    
    const totalProductsPromise = ProductModel.countDocuments({ status: true });
    
    const productsPromise = ProductModel.find({ status: true })
        .populate({
            path: 'category',
            select: 'name', // Includes the 'name' field with the select option
        })
        .limit(+limit)
        .skip(+start)
        .lean(); // Converts documents to plain javascript objects
    
    try {
        const [totalProducts, products] = await Promise.all([totalProductsPromise, productsPromise]);
        
        //* Modifies the response to use 'uid' instead of '_id' for the 'category' field;
        const modifiedProducts: IProductGetRequest[] = products.map(( product: any ) => {
            return {
                ...product,
                category: product.category ? { name: product.category.name, uid: product.category._id } : null,
            };
        });

        return res.json({
            total_products: totalProducts,
            products: modifiedProducts,
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Could not get products',
            error,
        });
    }
};

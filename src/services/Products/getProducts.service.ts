import { Request, Response } from "express";
import { ProductModel } from "../../models";
import { IProductGetRequest } from "../../types";

export const getProductsService = async (req: Request, res: Response) => {
    const { limit = Number.POSITIVE_INFINITY, start = 0, categoryId } = req.query;
    const productsQuery = categoryId? { status: true, category: categoryId }: { status: true }; 
    
    const totalProductsPromise = ProductModel.countDocuments( productsQuery );
    const productsPromise = ProductModel.find( productsQuery )
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
            const { _id, ...data } = product; 
            return {
                uid: _id,
                ...data,
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

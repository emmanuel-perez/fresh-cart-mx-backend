import { Request, Response } from "express";
import { ProductModel } from "../../models";

export const getAllProductsService = async ( req: Request, res: Response ) => {
    const { limit=Number.POSITIVE_INFINITY, start=0 } = req.query;
    const totalProductsPromise = ProductModel.countDocuments({ status: true });
    const productsPromise = ProductModel.find({ status: true })
        .limit( +limit )
        .skip( +start );
    try {
        const [ totalProducts, products ] = await Promise.all([ totalProductsPromise, productsPromise ])
        return res.json({
            total_products: totalProducts, 
            products,
        });
    } catch ( error ) {
        return res.status(500).json({
            msg: 'Could not get products',
            error,
        })
    }
}







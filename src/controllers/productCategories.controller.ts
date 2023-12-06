import { Request, Response } from "express";

export const getAllProductCategories = ( req: Request, res: Response ) => {
    return res.json('get - product categories');
}

export const getProductCategoryById = ( req: Request, res: Response ) => {
    return res.json('get - product category by id');
}

export const createProductCategory = ( req: Request, res: Response ) => {
    return res.json('post - product category');
}

export const updateProductCategory = ( req: Request, res: Response ) => {
    return res.json('put - product category');
}

export const deleteProductCategory = ( req: Request, res: Response ) => {
    return res.json('delete - product category');
}












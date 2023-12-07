import { Request, Response } from "express";
import { createProductCategoryService, deleteProductCategoryService, getAllProductCategoriesService, getProductCategoryService, updateProductCategoryService } from "../services";

export const getAllProductCategories = ( req: Request, res: Response ) => {
    getAllProductCategoriesService( req, res );
}

export const getProductCategoryById = ( req: Request, res: Response ) => {
    getProductCategoryService( req, res );
}

export const createProductCategory = ( req: Request, res: Response ) => {
    createProductCategoryService( req, res )
}

export const updateProductCategory = ( req: Request, res: Response ) => {
    updateProductCategoryService( req, res );
}

export const deleteProductCategory = ( req: Request, res: Response ) => {
    deleteProductCategoryService( req, res );
}












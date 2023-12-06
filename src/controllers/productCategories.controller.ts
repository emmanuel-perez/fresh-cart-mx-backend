import { Request, Response } from "express";
import { createProductCategoryService, deleteProductCategoryService, getProductCategoryService, updateProductCategoryService } from "../services";

export const getAllProductCategories = async ( req: Request, res: Response ) => {
    //TODO: validations
    getAllProductCategories( req, res );
}

export const getProductCategoryById = async ( req: Request, res: Response ) => {
    //TODO: validations
    getProductCategoryService( req, res );
}

export const createProductCategory = async ( req: Request, res: Response ) => {
    //  TODO: validate model fields, validate categories to be unique
    createProductCategoryService( req, res )
}

export const updateProductCategory = async ( req: Request, res: Response ) => {
    //  TODOS: validations
    updateProductCategoryService( req, res );
}

export const deleteProductCategory = async ( req: Request, res: Response ) => {
    //  TODO: validations
    deleteProductCategoryService( req, res );
}












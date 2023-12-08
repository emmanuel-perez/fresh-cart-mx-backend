import { Request, Response } from "express";
import { createProductService, deleteProductService, getAllProductsService, getProductByIdService, updateProductService } from "../services";

export const getAllProducts = ( req: Request, res: Response ) => {
    getAllProductsService( req, res );
}

export const getProductById = ( req: Request, res: Response ) => {
    getProductByIdService( req, res );
}

export const createProduct = ( req: Request, res: Response ) => {
    createProductService( req, res );
}

export const updateProduct = ( req: Request, res: Response ) => {
    updateProductService( req, res );
}

export const deleteProduct = ( req: Request, res: Response ) => {
    deleteProductService( req, res );
}










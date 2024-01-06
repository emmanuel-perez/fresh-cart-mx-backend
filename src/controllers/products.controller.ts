import { Request, Response } from "express";
import { createProductService, deleteProductService, getProductsService, getProductByIdService, updateProductService } from "../services";

export const getProducts = ( req: Request, res: Response ) => {
    getProductsService( req, res );
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










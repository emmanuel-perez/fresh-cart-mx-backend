import { Request, Response } from "express";
import { deleteProductImageService, updateProductImageService, uploadProductImageService } from "../services";

export const uploadProductImage = ( req: Request, res: Response ) => {
    return uploadProductImageService( req, res );
}

export const updateProductImage = ( req: Request, res: Response ) => {
    return updateProductImageService( req, res );
}

export const deleteProductImage = ( req: Request, res: Response ) => {
    return deleteProductImageService( req, res );
}







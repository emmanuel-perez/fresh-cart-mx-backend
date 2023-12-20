import { Request, Response } from "express";
import { uploadProductImageService } from "../services";

export const uploadProductImage = ( req: Request, res: Response ) => {
    return uploadProductImageService( req, res );
}







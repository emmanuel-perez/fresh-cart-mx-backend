import { Request, Response } from "express";

export const uploadProductImageService = async ( req: Request, res: Response ) => {
    console.log( req.file );
    res.send('Done');
}








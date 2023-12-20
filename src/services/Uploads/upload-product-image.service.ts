import { v2 } from "cloudinary";
import { Request, Response } from "express";

export const uploadProductImageService = async ( req: Request, res: Response ) => {
    if ( req.file ) {
        const { url } = await v2.uploader.upload( req.file.path );
        return res.send({
            url
        });
    }
    return res.status(400).json({
        msg: 'no file was send in the request'
    })
}








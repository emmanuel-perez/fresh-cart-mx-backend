import { v2 } from "cloudinary";
import { Request, Response } from "express";
import { ProductModel } from "../../models";

export const uploadProductImageService = async ( req: Request, res: Response ) => {

    const { id } = req.params;

    if ( req.file ) {
        const { url } = await v2.uploader.upload( req.file.path );
        const updatedProductWithImage = await ProductModel.findByIdAndUpdate( id, { imageUrl: url }, { new: true } );
        return res.send({
            msg: 'Image uploaded successfully',
            updatedProduct: updatedProductWithImage
        });
    }
    return res.status(400).json({
        msg: 'no file was send in the request'
    })
}







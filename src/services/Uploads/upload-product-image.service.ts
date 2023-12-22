import { v2 } from "cloudinary";
import { Request, Response } from "express";
import { ProductModel } from "../../models";

export const uploadProductImageService = async ( req: Request, res: Response ) => {
    const { id } = req.params;
    const { path, filename } = req.file!;
    const updatedProductWithImage = await ProductModel.findByIdAndUpdate( id, { imageUrl: path, cloudinaryId: filename }, { new: true } );
    return res.send({
        msg: 'Image uploaded successfully',
        updatedProduct: updatedProductWithImage
    });
}








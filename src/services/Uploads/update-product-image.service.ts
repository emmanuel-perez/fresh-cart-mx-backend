import { Request, Response } from "express";
import { v2 } from "cloudinary";
import { ProductModel } from "../../models";


export const updateProductImageService = async ( req: Request, res: Response ) => {
    const { id } = req.params;
    const product = await ProductModel.findById( id );
    //Delete image from cloudinary
    if ( product ) {
        await v2.uploader.destroy( product.cloudinaryId );
        //Upload image to cloudinary
        //TODO: validate file required in express validators 
        const { secure_url, public_id } = await v2.uploader.upload( req.file!.path );

        const updatedProduct = await ProductModel.findByIdAndUpdate( 
            id, { 
                imageUrl: secure_url, 
                cloudinaryId: public_id }, 
                { new: true } 
        );

        return res.json({
            msg: 'Product image updated successfully',
            updatedProduct,
        })
    }
}
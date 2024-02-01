import { Request, Response } from "express";
import { v2 } from "cloudinary";
import { ProductModel } from "../../models";

export const deleteProductImageService = async ( req: Request, res: Response ) => {
    const { id } = req.params;
    let product = await ProductModel.findById( id );

    try {
        if ( product ) {
            await v2.uploader.destroy( product?.cloudinaryId );
            let updatedProduct = await ProductModel.findByIdAndUpdate( id, { imageUrl: 'https://archive.org/download/placeholder-image/placeholder-image.jpg' } )
            
            return res.json({
                msg: 'Product image deleted successfully',
                product: updatedProduct,
            })
        }
    }   catch ( err ) {
        console.log( err );
    }
}





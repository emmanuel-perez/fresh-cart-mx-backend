import { Schema, model } from "mongoose";
import { IProductCategory } from "../types";


const productCategorySchema = new Schema({
    name: {
        type: String,
        required: [true, 'name field is required']
    },
    description: {
        type: String,
    }
})

export const ProductCategoryModel = model<IProductCategory>('ProductCategory', productCategorySchema ); 







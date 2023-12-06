import { Schema, model } from "mongoose";
import { IProductCategory } from "../types";


const productCategorySchema = new Schema({
    name: {
        type: String,
        unique: [ true, 'there is already a category with that name'],
        required: [true, 'name field is required']
    },
    description: {
        type: String,
    },
    status: {
        type: Boolean,
        default: true,
    }
})

export const ProductCategoryModel = model<IProductCategory>('ProductCategory', productCategorySchema ); 

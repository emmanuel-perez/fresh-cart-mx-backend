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
});

productCategorySchema.methods.toJSON = function () {
    const { __v, _id, ...data } = this.toObject();
    data.uid = _id;
    return data;
}

export const ProductCategoryModel = model<IProductCategory>('ProductCategory', productCategorySchema ); 

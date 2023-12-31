import mongoose, { Schema, model } from "mongoose";
import { IProduct } from "../types";

const productSchema = new Schema({
    name: {
        type: String,
        required: [ true, 'name field is required'],
    },
    description: {
        type: String,
        required: [true, 'description is required'],
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'category field is required'],
        ref: 'Category',
    },
    brand: {
        type: String,
        required: [true, 'brand field is required'],
    },
    price: {
        type: Number,
        required: [true, 'number is required'],
    },
    available: {
        type: Boolean,
        default: true,
    },
    imageUrl: {
        type: String,
        default: 'https://loomcrafts.com/wp-content/uploads/2018/09/placeholder-vertical.jpg'
    },
    cloudinaryId: {
        type: String,
    },
    status: {
        type: Boolean,
        default: true,
    }
});

productSchema.methods.toJSON = function () {
    const { __v, _id, ...data } = this.toObject();
    data.uid = _id;
    return data;
}

export const ProductModel = model<IProduct>('Product', productSchema );
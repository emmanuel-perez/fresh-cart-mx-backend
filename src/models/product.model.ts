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
        default: 'https://archive.org/download/placeholder-image/placeholder-image.jpg'
    },
    status: {
        type: Boolean,
        default: true,
    }
});

productSchema.methods.toJSON = function () {
    const { __v, ...data } = this.toObject();
    return data;
}

export const ProductModel = model<IProduct>('Product', productSchema );
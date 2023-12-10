import { Schema, model } from 'mongoose';
import { IUser } from '../types';

const userSchema = new Schema({
    email: {
        type: String,
        isRequired: [true, 'email field is required'],
    },
    password: {
        type: String,
        isRequired: [true, 'password field is required'],
    },
    status: {
        type: Boolean,
        default: true,
    },
    address: {
        type: String,
    },
    phone: {
        type: Number,
    }
})

export const UserModel = model<IUser>('User', userSchema );




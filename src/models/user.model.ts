import { Schema, model } from 'mongoose';
import { IUser, RoleType } from '../types';

const userSchema = new Schema({
    email: {
        type: String,
        isRequired: [true, 'email field is required'],
    },
    password: {
        type: String,
        isRequired: [true, 'password field is required'],
    },
    role: {
        type: String,
        enum: Object.values( RoleType ),
        default: RoleType.user_role,
    },
    status: {
        type: Boolean,
        default: true,
    },
    googleUser: {
        type: Boolean,
        default: false
    },
    address: {
        type: String,
    },
    phone: {
        type: Number,
    }
});

userSchema.methods.toJSON = function () {
    const { __v, ...data } = this.toObject();
    return data;
}

export const UserModel = model<IUser>('User', userSchema );




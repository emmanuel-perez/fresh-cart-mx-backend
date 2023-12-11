
import { Schema, model } from "mongoose";
import { IRole, RoleType } from '../types';

const roleSchema = new Schema({
    type: {
        type: String,
        required: [true, 'field type is required for role'],
        unique: true,
        enum: Object.values( RoleType ),
    },
    description: {
        type: String,
    },
    status: {
        type: Boolean,
        default: true,
        required: [ true, 'status is required for role' ],
    }
})

export const RoleModel = model<IRole>('Role', roleSchema );



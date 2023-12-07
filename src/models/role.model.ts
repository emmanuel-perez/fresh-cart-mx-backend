
import { Schema, model } from "mongoose";
import { IRole, RoleName } from '../types';

const roleSchema = new Schema({
    name: {
        type: String,
        required: [true, 'field name is required for role'],
        enum: Object.values( RoleName ),
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



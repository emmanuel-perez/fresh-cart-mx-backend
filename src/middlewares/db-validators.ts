import { Model } from "mongoose";
import { RoleModel, UserModel } from "../models";

export const validateDocumentIdExists = async <T>( id: string, model: Model<T> ) => {
    const documentExists = await model.findById( id );
    if ( !documentExists ) {
        const collectionName = model.collection.name;
        throw new Error (`There is no document with id ${ id } in collection ${ collectionName }`);
    }
}

export const validateDocumentUniqueName = async <T>( name: string, model: Model<T> ) => {
    const lowerCaseName = name.toLowerCase();
    const nameAlreadyOnDB = await model.findOne({ name: lowerCaseName });
    if ( nameAlreadyOnDB ) {
        const collectionName = model.collection.name;
        throw new Error(`There is already a document with name: ${ lowerCaseName } in collection ${ collectionName }`);
    }
}

export const validateDocumentStatus = async <T>( id: string, model: Model<T> ) => {
    const document = await model.findById( id );
    if ( document && 'status' in document && document.status === false ) {
        const collectionName = model.collection.name;
        throw new Error (`The document with id ${ id } has been deactivated from database in collection ${ collectionName }`);
    }
}

export const validateEmailUnique = async ( email: string ) => {

    const emailExists = await UserModel.findOne({ email });

    if ( emailExists ) {
        throw new Error(`there is already a user in database with the email: ${ email }`)
    }

}

export const validateEmailExists = async ( email: string ) => {

    const emailExists = await UserModel.findOne({ email });

    if ( !emailExists ) {
        throw new Error(`there is no user with email ${ email } in database`);
    }

}

export const validateUserStatusByEmail = async ( email: string ) => {
    const user = await UserModel.findOne({ email });
    if ( !user?.status  ) {
        const error = `user with email ${ email } has been marked as deleted from database`
        throw new Error(error);
    }
}


export const validateRoleUnique = async ( roleType: string ) => {
    const roleExists = await RoleModel.find({ type: roleType });
    if ( roleExists ) throw new Error(`Role ${ roleType } already exists in collection ${ RoleModel.collection.name }`)
}
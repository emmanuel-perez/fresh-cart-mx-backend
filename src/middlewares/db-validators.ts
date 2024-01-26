import { Model } from "mongoose";
import { ProductCategoryModel, ProductModel, RoleModel, UserModel } from "../models";
import { CustomValidator } from "express-validator";
import { NextFunction, Request, Response } from "express";

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
        throw new Error(`user already exists with email: ${ email }`)
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
    if ( roleExists.length >> 0 ) throw new Error(`Role ${ roleType } already exists in collection ${ RoleModel.collection.name }`)
}

export const validateImageIsSent: CustomValidator = async ( value, { req }) => {
    const fileExists = await req.file

    if (!fileExists ) {
      throw new Error('Image is required');
    }
};

export const validateCategoryFromProduct = async ( categoryId: string ) => {
    const productCategory = await ProductCategoryModel.findById( categoryId );
    
    //* Validate if category exists
    if ( categoryId && !productCategory ) {
        throw new Error(`Invalid product category in get products: There is no category with id ${ categoryId }`);
    } 

    //* Validate category has status true
    if ( categoryId && !productCategory?.status) {
        throw new Error('Invalid product category in get products: Category is marked as deactivated from database: status false');
    } 

}

export const validateProductImageNotExist = async ( req: Request, res: Response, next: NextFunction ) => {
    const { id } = req.params;
    const product = await ProductModel.findById( id );
    const productImageExists = product?.cloudinaryId;

    if ( productImageExists ) {
        return res.status(400).json({
            msg: 'This product has already an image, use PUT request instead'
        })
    }

    next()
}
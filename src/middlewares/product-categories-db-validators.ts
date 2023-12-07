import { ProductCategoryModel } from "../models"

export const validateProductCategoryExists = async ( id: string ) => {
    const productCategoryExists = await ProductCategoryModel.findById( id );
    if ( !productCategoryExists ) {
        throw new Error (`There is no product category with id ${ id }`);
    }
}

export const validateProductCategoryUniqueName = async ( name: string ) => {
    const lowerCaseName = name.toLowerCase();
    const nameAlreadyOnDB = await ProductCategoryModel.findOne({ name: lowerCaseName });
    if ( nameAlreadyOnDB ) {
        throw new Error(`There is already a product with name: ${ lowerCaseName } in database`);
    }
}

export const validateProductCategoryStatus = async ( id: string ) => {
    const productCategory = await ProductCategoryModel.findById( id );
    if ( productCategory && !productCategory?.status ) {
        throw new Error ('This product category has been deactivated from database');
    }
}
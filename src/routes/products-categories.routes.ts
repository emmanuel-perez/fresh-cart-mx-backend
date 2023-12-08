import { Router } from "express";
import { createProductCategory, deleteProductCategory, getAllProductCategories, getProductCategoryById, updateProductCategory } from "../controllers";
import { check } from "express-validator";
import { validateDocumentIdExists, validateDocumentStatus, validateDocumentUniqueName, validateFields } from "../middlewares";
import { ProductCategoryModel } from "../models";
// import { validateFields, validateProductCategoryExists, validateProductCategoryStatus, validateProductCategoryUniqueName } from "../middlewares";


export const productCategories = Router();

productCategories.get('/', getAllProductCategories );
productCategories.get('/:id', [
    check('id').custom(( id: string ) => validateDocumentIdExists( id, ProductCategoryModel ) ),
    check('id').custom(( id: string ) => validateDocumentStatus( id, ProductCategoryModel ) ),
    validateFields,
],getProductCategoryById );
productCategories.post('/', [
    check('name').custom(( name: string ) => validateDocumentUniqueName( name, ProductCategoryModel ) ),
    validateFields,
],createProductCategory );
productCategories.put('/:id', [
    check('id').custom(( id: string ) => validateDocumentIdExists( id, ProductCategoryModel ) ),
    check('id').custom(( id: string ) => validateDocumentStatus( id, ProductCategoryModel ) ),
    validateFields,
],updateProductCategory );
productCategories.delete('/:id', [
    check('id').custom((id: string) => validateDocumentIdExists( id, ProductCategoryModel ) ),
    check('id').custom(( id: string ) => validateDocumentStatus( id, ProductCategoryModel ) ),
    validateFields,
], deleteProductCategory );











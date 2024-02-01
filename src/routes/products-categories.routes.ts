import { Router } from "express";
import { createProductCategory, deleteProductCategory, getAllProductCategories, getProductCategoryById, updateProductCategory } from "../controllers";
import { check } from "express-validator";
import { validateDocumentIdExists, validateDocumentStatus, validateDocumentUniqueName, validateFields, validateJWT } from "../middlewares";
import { ProductCategoryModel } from "../models";

export const productCategoriesRoutes = Router();

productCategoriesRoutes.get('/', getAllProductCategories );
productCategoriesRoutes.get('/:id', [
    check('id').custom(( id: string ) => validateDocumentIdExists( id, ProductCategoryModel ) ),
    check('id').custom(( id: string ) => validateDocumentStatus( id, ProductCategoryModel ) ),
    validateFields,
],getProductCategoryById );
productCategoriesRoutes.post('/', [
    validateJWT,
    check('name', 'name field is required').not().isEmpty(),
    check('name').custom(( name: string ) => validateDocumentUniqueName( name, ProductCategoryModel ) ),
    validateFields,
],createProductCategory );
productCategoriesRoutes.put('/:id', [
    validateJWT,
    check('id').custom(( id: string ) => validateDocumentIdExists( id, ProductCategoryModel ) ),
    check('id').custom(( id: string ) => validateDocumentStatus( id, ProductCategoryModel ) ),
    validateFields,
],updateProductCategory );
productCategoriesRoutes.delete('/:id', [
    validateJWT,
    check('id').custom((id: string) => validateDocumentIdExists( id, ProductCategoryModel ) ),
    check('id').custom(( id: string ) => validateDocumentStatus( id, ProductCategoryModel ) ),
    validateFields,
], deleteProductCategory );











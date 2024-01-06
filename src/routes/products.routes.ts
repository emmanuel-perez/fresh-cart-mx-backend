import { Router } from "express";
import { createProduct, deleteProduct, getAllProducts, getProductById, getProductsByCategory, updateProduct } from "../controllers";
import { check } from "express-validator";
import { validateDocumentIdExists, validateDocumentStatus, validateFields, validateJWT } from "../middlewares";
import { ProductCategoryModel, ProductModel } from "../models";

export const productsRoutes = Router();

productsRoutes.get('/', getAllProducts );

productsRoutes.get('/category/:categoryId', [
    check('categoryId').custom(( categoryId: string ) => validateDocumentIdExists( categoryId, ProductCategoryModel ) ),
    check('categoryId').custom(( categoryId: string ) => validateDocumentStatus( categoryId, ProductCategoryModel ) ),
    validateFields,
], getProductsByCategory );

productsRoutes.get('/:id', [
    check('id').custom(( id: string ) => validateDocumentIdExists( id, ProductModel ) ),
    check('id').custom(( id: string ) => validateDocumentStatus( id, ProductModel ) ),
    validateFields
], getProductById );

productsRoutes.post('/', [
    check('name', 'name field is required').not().isEmpty(),
    check('description', 'description field is required').not().isEmpty(),
    check('category', 'category field is required').not().isEmpty(),
    check('brand', 'brand field is required').not().isEmpty(),
    check('price', 'price is required').not().isEmpty(),
    validateFields
],createProduct );
productsRoutes.put('/:id', [
    check('id').custom(( id: string ) => validateDocumentIdExists( id, ProductModel ) ),
    check('id').custom(( id: string ) => validateDocumentStatus( id, ProductModel ) ),
    validateFields
], updateProduct );

productsRoutes.delete('/:id', [
    validateJWT,
    check('id').custom((id: string) => validateDocumentIdExists( id, ProductModel ) ),
    check('id').custom(( id: string ) => validateDocumentStatus( id, ProductModel ) ),
    validateFields
], deleteProduct );

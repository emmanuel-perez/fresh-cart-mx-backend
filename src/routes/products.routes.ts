import { Router } from "express";
import { createProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from "../controllers";
import { check } from "express-validator";
import { validateDocumentIdExists, validateDocumentStatus, validateJWT } from "../middlewares";
import { ProductModel } from "../models";

export const productsRoutes = Router();

productsRoutes.get('/', getAllProducts );

productsRoutes.get('/:id', [
    check('id').custom(( id: string ) => validateDocumentIdExists( id, ProductModel ) ),
    check('id').custom(( id: string ) => validateDocumentStatus( id, ProductModel ) ),
], getProductById );

productsRoutes.post('/', [
    check('name', 'name field is required').not().isEmpty(),
    check('description', 'description field is required').not().isEmpty(),
    check('category', 'category field is required').not().isEmpty(),
    check('brand', 'brand field is required').not().isEmpty(),
    check('price', 'price is required').not().isEmpty(),
],createProduct );
productsRoutes.put('/:id', [
    check('id').custom(( id: string ) => validateDocumentIdExists( id, ProductModel ) ),
    check('id').custom(( id: string ) => validateDocumentStatus( id, ProductModel ) ),
], updateProduct );

productsRoutes.delete('/:id', [
    validateJWT,
    check('id').custom((id: string) => validateDocumentIdExists( id, ProductModel ) ),
    check('id').custom(( id: string ) => validateDocumentStatus( id, ProductModel ) ),
], deleteProduct );

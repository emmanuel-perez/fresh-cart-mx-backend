import { Router } from "express";
import multer from 'multer';
import { createCloudinaryStorage } from "../config";
import { deleteProductImage, updateProductImage, uploadProductImage } from "../controllers";
import { check } from "express-validator";
import { validateDocumentIdExists, validateFields, validateImageIsSent, validateJWT, validateProductImageNotExist } from "../middlewares";
import { ProductModel } from "../models";

const storage = createCloudinaryStorage('products');
const upload = multer({ storage })

export const uploadsRoutes = Router();

uploadsRoutes.post('/products/:id', [
    validateJWT,
    check('id').custom(( id: string ) => validateDocumentIdExists( id, ProductModel )),
    validateProductImageNotExist,
    upload.single('image'),
    check('image').custom( validateImageIsSent ),
    validateFields
], uploadProductImage );

uploadsRoutes.put('/products/:id', [
    validateJWT,
    check('id').custom(( id: string ) => validateDocumentIdExists( id, ProductModel )),
    upload.single('image'),
    check('image').custom( validateImageIsSent ),
    validateFields
], updateProductImage );

uploadsRoutes.delete('/products/:id', [
    validateJWT,
    check('id').custom(( id: string ) => validateDocumentIdExists( id, ProductModel )),
    validateFields
],deleteProductImage );



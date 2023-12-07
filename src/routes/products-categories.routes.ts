import { Router } from "express";
import { createProductCategory, deleteProductCategory, getAllProductCategories, getProductCategoryById, updateProductCategory } from "../controllers";
import { check } from "express-validator";
import { validateFields, validateProductCategoryExists, validateProductCategoryStatus, validateProductCategoryUniqueName } from "../middlewares";


export const productCategories = Router();

productCategories.get('/', getAllProductCategories );
productCategories.get('/:id', [
    check('id').custom( validateProductCategoryExists ),
    check('id').custom( validateProductCategoryStatus ),
    validateFields
],getProductCategoryById );
productCategories.post('/', [
    check('name').custom( validateProductCategoryUniqueName ),
    validateFields,
],createProductCategory );
productCategories.put('/:id', [
    check('id').custom( validateProductCategoryExists ),
    check('id').custom( validateProductCategoryStatus ),
    validateFields,
],updateProductCategory );
productCategories.delete('/:id', [
    check('id').custom( validateProductCategoryExists ),
    check('id').custom( validateProductCategoryStatus ),
    validateFields,
], deleteProductCategory );











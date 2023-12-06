import { Router } from "express";
import { createProductCategory, deleteProductCategory, getAllProductCategories, getProductCategoryById, updateProductCategory } from "../controllers";
import { check } from "express-validator";
import { validateFields, validateProductCategoryExists, validateProductCategoryStatus, validateProductCategoryUniqueName } from "../middlewares";


export const productCategories = Router();

productCategories.get('/', getAllProductCategories );
productCategories.get('/:id', [
    //  TODO: validate rol
    check('id').custom( validateProductCategoryExists ),
    check('id').custom( validateProductCategoryStatus ),
    validateFields
],getProductCategoryById );
productCategories.post('/', [
    //  TODO: validate rol
    check('name').custom( validateProductCategoryUniqueName ),
    validateFields,
],createProductCategory );
productCategories.put('/:id', [
    check('id').custom( validateProductCategoryExists ),
    check('id').custom( validateProductCategoryStatus ),
    validateFields,
],updateProductCategory );
productCategories.put('/:id', [
    check('id').custom( validateProductCategoryExists ),
    check('id').custom( validateProductCategoryStatus ),
    validateFields,
],deleteProductCategory );











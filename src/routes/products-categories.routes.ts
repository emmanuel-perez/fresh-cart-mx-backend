import { Router } from "express";
import { createProductCategory, deleteProductCategory, getAllProductCategories, getProductCategoryById, updateProductCategory } from "../controllers";

export const productCategories = Router();

productCategories.get('/', getAllProductCategories );
productCategories.get('/:id', getProductCategoryById );
productCategories.post('/', createProductCategory );
productCategories.put('/:id', updateProductCategory );
productCategories.put('/:id', deleteProductCategory );











import { Router } from "express";
import { createProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from "../controllers";

export const productsRoutes = Router();

productsRoutes.get('/', getAllProducts );
productsRoutes.get('/:id', getProductById );
productsRoutes.post('/:id', createProduct );
productsRoutes.put('/:id', updateProduct );
productsRoutes.delete('/:id', deleteProduct );

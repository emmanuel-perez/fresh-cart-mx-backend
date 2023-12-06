import { Router } from "express";
import { productCategories, productsRoutes } from './';

export const routes = Router();

routes.use('/api/products', productsRoutes );
routes.use('/api/product-categories', productCategories)



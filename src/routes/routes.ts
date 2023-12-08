import { Router } from "express";
import { productCategoriesRoutes, productsRoutes } from './';

export const routes = Router();

routes.use('/api/products', productsRoutes );
routes.use('/api/product-categories', productCategoriesRoutes)



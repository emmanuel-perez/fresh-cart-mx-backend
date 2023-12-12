import { Router } from "express";
import { productCategoriesRoutes, productsRoutes, rolesRoutes, usersRoutes } from './';

export const routes = Router();

routes.use('/api/products', productsRoutes );
routes.use('/api/product-categories', productCategoriesRoutes);
routes.use('/api/roles', rolesRoutes );
routes.use('/api/users', usersRoutes );


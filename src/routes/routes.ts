import { Router } from "express";
import { productCategoriesRoutes, productsRoutes } from './';
import { rolesRoutes } from "./roles.routes";

export const routes = Router();

routes.use('/api/products', productsRoutes );
routes.use('/api/product-categories', productCategoriesRoutes);
routes.use('/api/roles', rolesRoutes );
routes.use('/api/users', /*usersRoutes*/ );


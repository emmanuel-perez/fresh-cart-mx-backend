import { Router } from "express";
import { authRoutes, productCategoriesRoutes, productsRoutes, rolesRoutes, uploadsRoutes, usersRoutes } from './';

export const routes = Router();

routes.use('/api/products', productsRoutes );
routes.use('/api/product-categories', productCategoriesRoutes);
routes.use('/api/roles', rolesRoutes );
routes.use('/api/users', usersRoutes );
routes.use('/api/auth', authRoutes );
routes.use('/api/uploads', uploadsRoutes );

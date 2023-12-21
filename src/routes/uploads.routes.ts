import { Router } from "express";
import multer from 'multer';
import { createCloudinaryStorage } from "../config";
import { updateProductImage, uploadProductImage } from "../controllers";

const storage = createCloudinaryStorage('products');
const upload = multer({ storage })

export const uploadsRoutes = Router();

uploadsRoutes.post('/products/:id', upload.single('image'), uploadProductImage );
uploadsRoutes.put('/products/:id', upload.single('image'), updateProductImage );



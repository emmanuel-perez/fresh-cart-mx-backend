import { Router } from "express";
import multer from 'multer';
import { cloudinaryStorage as storage } from "../config";
import { uploadProductImage } from "../controllers";

const upload = multer({ storage })

export const uploadsRoutes = Router();

uploadsRoutes.post('/products', upload.single('image'), uploadProductImage );



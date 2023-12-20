import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { envs } from './envs';
import { CloudinaryStorageParams } from '../types';
       
cloudinary.config({ 
  cloud_name: envs.CLOUDINARY_CLOUD_NAME,
  api_key: envs.CLOUDINARY_API_KEY,
  api_secret: envs.CLOUDINARY_API_SECRET 
});

export const cloudinaryStorage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'FreshCartMX',
        allowedFormats: ['jpeg', 'png', 'jpg'],
    } as CloudinaryStorageParams
});
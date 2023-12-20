import 'dotenv/config';
import { get } from "env-var";

export const envs = {
    PORT: get('PORT').required().asPortNumber(),
    MONGO_DB_CONNECTION: get('MONGO_DB_CONNECTION').required().asString(),
    JWT_SECRET_OR_PUBLIC_KEY: get('JWT_SECRET_OR_PUBLIC_KEY').required().asString(),
    GOOGLE_CLIENT_ID: get('GOOGLE_CLIENT_ID').required().asString(),
    CLOUDINARY_CLOUD_NAME: get('CLOUDINARY_CLOUD_NAME').required().asString(),
    CLOUDINARY_API_KEY: get('CLOUDINARY_API_KEY').required().asString(),
    CLOUDINARY_API_SECRET: get('CLOUDINARY_API_SECRET').required().asString(),
};
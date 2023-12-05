import 'dotenv/config';
import { get } from "env-var";

export const envs = {

    PORT: get('PORT').required().asPortNumber(),
    MONGO_DB_CONNECTION: get('MONGO_DB_CONNECTION').required().asString(),

};
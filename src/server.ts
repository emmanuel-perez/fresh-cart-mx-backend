import express from 'express';
import cors from 'cors'
import { dbConnection } from './config';
import { routes } from './routes';

export const app = express();

//*  Middlewares
app.use( express.json() );
app.use(cors());

//*  DB Connection
dbConnection();

//*  Routes
app.use('/', routes );















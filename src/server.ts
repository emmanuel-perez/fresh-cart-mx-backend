import express from 'express';
import { dbConnection } from './config';
import { routes } from './routes';

export const app = express();

//*  Middlewares
app.use( express.json() );

//*  DB Connection
dbConnection();

//*  Routes
app.use('/', routes );















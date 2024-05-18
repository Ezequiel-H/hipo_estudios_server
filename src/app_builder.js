/* eslint-disable import/no-extraneous-dependencies */

import express from 'express';

import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

import initRoutes from './routes.js';

const app = express();

dotenv.config();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(cors());

initRoutes(app);

export default app;

import express from 'express';
import dotenv from 'dotenv';
import { server, useDocs } from '@liftr/core';
import { routes } from '@routes/LiftrRoutingModule';
import * as swaggerInfo from './swagger-info';
const app = express();

dotenv.config();
app.set('port', process.env.PORT || 4000);


useDocs(app, routes, swaggerInfo.descriptions, swaggerInfo.responses)
server(app,routes);

export default server;

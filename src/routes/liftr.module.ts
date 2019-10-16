import { Module } from '@liftr/core';
import { liftrRoute } from './liftr.routes';
import { liftrRouteschema } from '../schema/liftr.schema'
import { liftrMiddleware } from '@middlewares/liftr.middleware';

export const LiftrModule = Module([
    {
        route: liftrRoute,
        middleware: [liftrMiddleware],
        schema: liftrRouteschema,
    },
]);

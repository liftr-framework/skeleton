import { Route } from '@liftr/core';
import { liftrController } from '@controllers/liftr.controller';

export const liftrRoute = Route.get('/', liftrController);

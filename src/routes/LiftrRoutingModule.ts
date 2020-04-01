import { AppRouter } from '@liftr/core';
import { LiftrModule } from './liftr.module';

export const routes: AppRouter[] = [
  {
    path: '/',
    module: LiftrModule,
    middleware: [],
  },
];

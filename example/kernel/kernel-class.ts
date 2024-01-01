import { BaseKernel } from '../../src/kernel/base-kernel-class';
import { type IKernelRoute } from '../../src/kernel/base-kernel-interface';
import { ApiRouter } from '../routes/api-route-class';
import { ApiV1Router } from '../routes/v1/v1-api-route-class';
import { WebRouter } from '../routes/web-route-class';
import { Routes } from './kernel-enum';

export class Kernel extends BaseKernel {
  getRoutes(): IKernelRoute[] {
    return this.mainRoutes.concat([
      {
        name: Routes.API,
        Path: ApiRouter
      },
      {
        name: Routes.WEB,
        Path: WebRouter
      },
      {
        name: Routes.API_V1,
        Path: ApiV1Router
      }
    ]);
  }
}

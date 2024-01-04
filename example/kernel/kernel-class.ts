import { BaseKernel } from '../../src/kernel/base-kernel-class';
import { type IKernelRoute } from '../../src/kernel/base-kernel-interface';
import { ApiRouter } from '../routes/api-route-class';
import { WebRouter } from '../routes/web-route-class';
import { Routes } from './kernel-enum';

export class Kernel extends BaseKernel {
  public getRoutes(): IKernelRoute[] {
    return this.mainRoutes.concat([
      {
        name: Routes.API,
        Path: ApiRouter
      },
      {
        name: Routes.WEB,
        Path: WebRouter
      }
    ]);
  }
}

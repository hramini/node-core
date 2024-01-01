import { BaseAppRoutes } from 'src/kernel/base-kernel-enum';
import { type IKernelRoute } from 'src/kernel/base-kernel-interface';
import { BaseApiRouter } from 'src/server/router/routes/base-api-route';
import { BaseWebRouter } from 'src/server/router/routes/base-web-route';

export abstract class BaseKernel {
  protected mainRoutes: IKernelRoute[];

  public constructor() {
    this.mainRoutes = [
      {
        name: BaseAppRoutes.BASE_API,
        Path: BaseApiRouter
      },
      {
        name: BaseAppRoutes.BASE_WEB,
        Path: BaseWebRouter
      }
    ];
  }

  public abstract getRoutes(): IKernelRoute[];
}

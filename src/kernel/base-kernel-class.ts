import { type IKernelRoute } from 'src/kernel/base-kernel-interface';

export abstract class BaseKernel {
  protected mainRoutes: IKernelRoute[];

  public constructor() {
    this.mainRoutes = [
      // {
      //   name: BaseAppRoutes.BASE_API,
      //   Path: BaseRouter
      // },
      // {
      //   name: BaseAppRoutes.BASE_WEB,
      //   Path: BaseWebRouter
      // }
    ];
  }

  public abstract getRoutes(): IKernelRoute[];
}

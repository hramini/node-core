import { Ioc } from '@hramini/ioc';
import { BaseRouterService } from 'src/kernel/base-kernel-enum';
import {
  type IBaseRouteMakePathParam,
  type IBaseRouteMakePathReturnType,
  type IRouteParam,
  type IRouter
} from 'src/server/router/base-router-interface';

@Ioc.injectable()
export abstract class BaseRouter implements IRouter {
  @Ioc.lazyInject(BaseRouterService.EXPRESS)
  private readonly routeHandler: IRouter;

  public constructor() {
    this.declareRoutes();
  }

  public abstract declareRoutes(): void;

  public declarePrefix(): string {
    return '/';
  }

  public get(param: IRouteParam): void {
    this.routeHandler.get(param);
  }

  public post(param: IRouteParam): void {
    this.routeHandler.post(param);
  }

  public delete(param: IRouteParam): void {
    this.routeHandler.delete(param);
  }

  public patch(param: IRouteParam): void {
    this.routeHandler.patch(param);
  }

  public put(param: IRouteParam): void {
    this.routeHandler.put(param);
  }

  public use(param: IRouteParam): void {
    this.routeHandler.use(param);
  }

  public makePath(param: IBaseRouteMakePathParam): IBaseRouteMakePathReturnType {
    const { path } = param;
    const prefix: string = this.declarePrefix();

    return { madePath: `${prefix}/${path.replace(/^(\/)/, '')}` };
  }

  public getRouter(): any {
    return this.routeHandler.getRouter();
  }
}

import { Ioc } from '@hramini/ioc';
import semver from 'semver';
import { BaseRouterService } from 'src/kernel/base-kernel-enum';
import {
  type IBaseRouteMakePathParam,
  type IBaseRouteMakePathReturnType,
  type IMiddleware,
  type INextFunction,
  type IRequest,
  type IResponse,
  type IRouteParam,
  type IRouter,
  type MiddlewareObject
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
    return '';
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

  public versionMiddleware(handlers: MiddlewareObject): IMiddleware {
    return (request: IRequest, response: IResponse, next: INextFunction): void => {
      const versions: string[] = Object.keys(handlers);
      const sortedVersions = semver.sort(versions);

      const lastVersion: string = sortedVersions[sortedVersions.length - 1];
      let checkedVersion: string = lastVersion;

      const headerVersion: string | string[] | undefined = request.headers['x-version'];

      if (headerVersion) {
        if (typeof headerVersion === 'object') {
          checkedVersion = headerVersion[0];
        }

        if (typeof headerVersion === 'string') {
          checkedVersion = headerVersion;
        }
      }

      if (checkedVersion.length === 1) {
        checkedVersion = checkedVersion + '.0.0';
      }

      if (handlers[checkedVersion]) {
        handlers[checkedVersion](request, response, next);
      } else {
        handlers[lastVersion](request, response, next);
      }
    };
  }

  public getRouter(): any {
    return this.routeHandler.getRouter();
  }
}

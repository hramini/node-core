import { Ioc } from '@hramini/ioc';
import { Router } from 'express';
import { type IRouteParam, type IRouter } from 'src/server/router/base-router-interface';

@Ioc.injectable()
export class ExpressRouter implements IRouter {
  public router: Router;

  public constructor() {
    this.router = Router();
  }

  public get(param: IRouteParam): void {
    const { path, handlers } = param;
    // const { handlers } = MiddlewareHandler.createHandlers({ middlewares });

    this.router.get(path, ...handlers);
  }

  public post(param: IRouteParam): void {
    const { path, handlers } = param;
    // const { handlers } = MiddlewareHandler.createHandlers({ middlewares });

    this.router.post(path, ...handlers);
  }

  public delete(param: IRouteParam): void {
    const { path, handlers } = param;
    // const { handlers } = MiddlewareHandler.createHandlers({ middlewares });

    this.router.delete(path, ...handlers);
  }

  public patch(param: IRouteParam): void {
    const { path, handlers } = param;
    // const { handlers } = MiddlewareHandler.createHandlers({ middlewares });

    this.router.patch(path, ...handlers);
  }

  public put(param: IRouteParam): void {
    const { path, handlers } = param;
    // const { handlers } = MiddlewareHandler.createHandlers({ middlewares });

    this.router.put(path, ...handlers);
  }

  public use(param: IRouteParam): void {
    const { path, handlers } = param;
    // const { handlers } = MiddlewareHandler.createHandlers({ middlewares });

    console.log({ handlers });

    this.router.use(path, ...handlers);
  }

  public getRouter(): any {
    return this.router;
  }
}

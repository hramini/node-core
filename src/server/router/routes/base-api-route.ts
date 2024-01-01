import { Ioc } from '@hramini/ioc';
import { BaseRouter } from 'src/server/router/base-router-class';
import { type IMiddlewareParam } from 'src/server/router/base-router-interface';

@Ioc.injectable()
export class BaseApiRouter extends BaseRouter {
  public declarePrefix(): string {
    return '/api';
  }

  public declareRoutes(): void {
    const { madePath } = this.makePath({ path: '/' });

    this.use({
      path: madePath,
      middlewares: [
        (param: IMiddlewareParam): void => {
          const { next } = param;

          next();
        }
      ]
    });
  }
}

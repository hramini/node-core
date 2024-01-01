import { BaseRouter } from 'src/server/router/base-router-class';
import { type IMiddlewareParam } from 'src/server/router/base-router-interface';

export class BaseWebRouter extends BaseRouter {
  public declareRoutes(): void {
    this.use({
      path: '/',
      middlewares: [
        (param: IMiddlewareParam): void => {
          const { next } = param;

          next();
        }
      ]
    });
  }
}

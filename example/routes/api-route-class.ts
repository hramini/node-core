import { type IMiddlewareParam } from 'src/server/router/base-router-interface';
import { BaseApiRouter } from 'src/server/router/routes/base-api-route';

export class ApiRouter extends BaseApiRouter {
  public declareRoutes(): void {
    const { madePath } = this.makePath({ path: 'v1' });

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

import { type IMiddlewareParam } from 'src/server/router/base-router-interface';
import { ApiRouter } from '../api-route-class';

export class ApiV1Router extends ApiRouter {
  public declarePrefix(): string {
    return '/api/v1';
  }

  public declareRoutes(): void {
    const { madePath } = this.makePath({ path: 'home' });

    this.get({
      path: madePath,
      middlewares: [
        (param: IMiddlewareParam): void => {
          const { response } = param;

          response.json({
            message: 'salam az home'
          });
        }
      ]
    });
  }
}

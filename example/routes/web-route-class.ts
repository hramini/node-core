import { join } from 'path';
import { type IMiddlewareParam } from '../../src/server/router/base-router-interface';
import { BaseWebRouter } from '../../src/server/router/routes/base-web-route';

export class WebRouter extends BaseWebRouter {
  public declareRoutes(): void {
    this.get({
      path: '/user',
      middlewares: [
        (param: IMiddlewareParam): void => {
          const { response } = param;

          response.sendFile(join(__dirname, '../user.html'));
        }
      ]
    });

    this.get({
      path: /^(?!\/api).+/,
      middlewares: [
        (param: IMiddlewareParam): void => {
          const { response } = param;

          response.sendFile(join(__dirname, '../index.html'));
        }
      ]
    });
  }
}

import { join } from 'path';
import { BaseRouter } from 'src/server/router/base-router-class';
import { type IRequest, type IResponse } from '../../src/server/router/base-router-interface';

export class WebRouter extends BaseRouter {
  public declareRoutes(): void {
    this.get({
      path: '/user',
      handlers: [
        (request: IRequest, response: IResponse): void => {
          response.sendFile(join(__dirname, '../user.html'));
        }
      ]
    });

    this.get({
      path: /^(?!\/api).+/,
      handlers: [
        (request: IRequest, response: IResponse): void => {
          response.sendFile(join(__dirname, '../index.html'));
        }
      ]
    });
  }
}

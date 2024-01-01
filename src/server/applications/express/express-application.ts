import express, { json, urlencoded, type Express } from 'express';
import { type IApplication, type IApplicationListenParam, type IApplicationUseParam } from '../application-interface';

export class ExpressApplication implements IApplication {
  private readonly expressApp: Express;

  public constructor() {
    this.expressApp = express();
  }

  public use(param: IApplicationUseParam): void {
    const { path, handlers } = param;

    this.expressApp.use(json());
    this.expressApp.use(urlencoded());

    if (path) {
      this.expressApp.use(path, ...handlers);
    } else {
      this.expressApp.use(...handlers);
    }
  }

  public listen(param: IApplicationListenParam): void {
    const { port, callback } = param;

    this.expressApp.listen(port, callback);
  }
}

import { join } from 'path';
import { type BaseKernel } from 'src/kernel/base-kernel-class';
import { BaseRouterService } from 'src/kernel/base-kernel-enum';
import { type IKernelRoute } from 'src/kernel/base-kernel-interface';
import { BaseServer } from 'src/server/base-server-class';
import { ExpressRouter } from 'src/server/router/applications/express/express-router';
import { type IRequest, type IResponse, type IRouter } from 'src/server/router/base-router-interface';
import { Kernel } from './kernel/kernel-class';

export class Server extends BaseServer {
  private routes: IRouter[];

  public declareKernel(): BaseKernel {
    return new Kernel();
  }

  private useHandlers(): void {
    const paths = ['dist', 'asset'];

    paths.forEach((path): void => {
      this.application.use({
        path: `/${path}/`,
        handlers: [
          (request: IRequest, response: IResponse) => {
            response.sendFile(join(__dirname, `../../public/${path}`, request.url));
          }
          // MiddlewareHandler.createHandler((param: IMiddlewareParam): void => {
          //   const { request, response } = param;

          // })
        ]
      });
    });
  }

  private useRoutes(): void {
    console.log({ routes: this.routes });

    // this.application.use({
    //   path: '/',
    //   handlers: [new WebRouter().getRouter()]
    // });

    this.application.use({
      path: '/api',
      handlers: [this.routes]
    });
  }

  private listen(): void {
    this.application.listen({
      port: 3000,
      callback(): void {
        const { log } = console;

        log('server is listening to 3000');
      }
    });
  }

  public start(): void {
    this.useHandlers();
    this.useRoutes();
    this.listen();
  }

  public registerKernel(): void {
    this.container.bind<IRouter>({ key: BaseRouterService.EXPRESS, Provider: ExpressRouter });
    this.registerRoutes();
  }

  private registerRoutes(): void {
    this.routes = this.kernel.getRoutes().map<IRouter>((Route: IKernelRoute): IRouter => {
      this.container.bind<IRouter>({ key: Route.name, Provider: Route.Path });

      return this.container.get<IRouter>({ key: Route.name }).getRouter();
    });
  }
}

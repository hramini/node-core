import { type NextFunction, type Request, type RequestHandler, type Response } from 'express';
import { type IMiddleware } from 'src/server/router/base-router-interface';
import {
  type IMiddlewareHandlerCreateHandlersParam,
  type IMiddlewareHandlerCreateHandlersReturnType
} from './middleware-handler-interface';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class MiddlewareHandler {
  public static createHandler(middleware: IMiddleware): RequestHandler {
    return (request: Request, response: Response, next: NextFunction): void => {
      middleware({
        request,
        response,
        next
      });
    };
  }

  public static createHandlers(param: IMiddlewareHandlerCreateHandlersParam): IMiddlewareHandlerCreateHandlersReturnType {
    const { middlewares } = param;
    const handlers: RequestHandler[] = middlewares.map((middleware: IMiddleware) => {
      return MiddlewareHandler.createHandler(middleware);
    });

    return { handlers };
  }
}

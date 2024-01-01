import { type RequestHandler } from 'express';
import { type IMiddleware } from 'src/server/router/base-router-interface';

export interface IMiddlewareHandlerCreateHandlersParam {
  readonly middlewares: IMiddleware[];
}

export interface IMiddlewareHandlerCreateHandlersReturnType {
  readonly handlers: RequestHandler[];
}

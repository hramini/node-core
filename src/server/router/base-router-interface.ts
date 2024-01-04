import { type NextFunction, type Request, type Response } from 'express';

export interface IBaseRouterEntry {
  readonly prefix: string;
}

export interface IRequest extends Request {}

export interface IResponse extends Response {}

export interface INextFunction extends NextFunction {}

export interface IMiddlewareParam {
  readonly request: IRequest;
  readonly response: IResponse;
  readonly next: INextFunction;
}

export interface IMiddleware {
  (request: IRequest, response: IResponse, next: INextFunction): void;
}

export type MiddlewareObject = Record<string, IMiddleware>;

export interface IRouteParam {
  readonly path: string | RegExp;
  handlers: IMiddleware[];
}

export interface IBaseRouteMakePathParam {
  readonly path: string;
}

export interface IBaseRouteMakePathReturnType {
  readonly madePath: string;
}

export interface IRouter {
  get: (param: IRouteParam) => void;
  post: (param: IRouteParam) => void;
  put: (param: IRouteParam) => void;
  patch: (param: IRouteParam) => void;
  delete: (param: IRouteParam) => void;
  use: (param: IRouteParam) => void;
  getRouter: () => any;
}

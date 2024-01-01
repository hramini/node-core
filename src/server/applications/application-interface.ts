export interface IApplicationUseParam {
  readonly path?: string;
  readonly handlers: any[];
}

export interface IApplicationListenParam {
  readonly port: number;
  callback?: () => void;
}

export interface IApplication {
  use: (param: IApplicationUseParam) => void;
  listen: (param: IApplicationListenParam) => void;
}

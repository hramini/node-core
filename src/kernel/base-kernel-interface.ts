import { type IConstructor } from 'src/back-interface';
import { type IRouter } from 'src/server/router/base-router-interface';

export interface IKernelRoute {
  readonly name: string;
  readonly Path: IConstructor<IRouter>;
}

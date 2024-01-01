import { type IConstructor } from 'src/back-interface';
import { type IApplication } from './applications/application-interface';

export interface IBaseServerEntry {
  readonly Application: IConstructor<IApplication>;
}

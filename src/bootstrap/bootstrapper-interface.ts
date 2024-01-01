import { type BaseServer } from 'src/server/base-server-class';

export interface IBootstrapperEntry {
  readonly server: BaseServer;
}

import { Container, InversifyContainer, type IApplicationContainer } from '@hramini/ioc';
import { type BaseKernel } from 'src/kernel/base-kernel-class';
import { type IApplication } from 'src/server/applications/application-interface';
import { ExpressApplication } from 'src/server/applications/express/express-application';
import { type IBaseServerEntry } from './base-server-interface';

export abstract class BaseServer {
  protected readonly kernel: BaseKernel;

  public application: IApplication;

  public container: IApplicationContainer;

  public constructor(entry?: IBaseServerEntry) {
    const { Application } = entry ?? { Application: ExpressApplication };

    this.application = new Application();
    this.container = new Container(new InversifyContainer());
    this.kernel = this.declareKernel();
  }

  public abstract declareKernel(): BaseKernel;

  public abstract start(): void;

  public abstract registerKernel(): void;
}

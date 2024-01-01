import { type IBootstrapperEntry } from './bootstrapper-interface';

export class Bootstrapper {
  public constructor(private readonly entry: IBootstrapperEntry) {}

  public bootstrap(): void {
    const { server } = this.entry;

    server.registerKernel();
    server.start();
  }
}

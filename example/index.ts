import { config } from 'dotenv';
import 'module-alias/register';
import 'reflect-metadata';
import { Bootstrapper } from 'src/bootstrap/bootstrapper';
import { Server } from './server-class';

const bootstrapper: Bootstrapper = new Bootstrapper({ server: new Server() });

config();
bootstrapper.bootstrap();

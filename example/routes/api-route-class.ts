import { BaseRouter } from 'src/server/router/base-router-class';
import { BooksRouter } from './books/books-route-class';

export class ApiRouter extends BaseRouter {
  public declareRoutes(): void {
    this.use({
      path: '/books',
      handlers: [new BooksRouter().getRouter()]
    });
  }
}

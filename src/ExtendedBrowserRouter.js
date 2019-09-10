import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

export default class ExtendedBrowserRouter extends BrowserRouter {
  constructor() {
    super();
    this.returnHistory = () => history;
    this.returnHistory();
  }
}

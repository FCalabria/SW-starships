import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter} from 'react-router-dom';
import routes from './routes';
import './styles/main.less';

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <HashRouter>
      {routes}
    </HashRouter>
  </Provider>
  , document.querySelector('.container'));


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { HashRouter} from 'react-router-dom';
import ReduxPromise from 'redux-promise';

import routes from './routes';
import reducers from './reducers';
import './styles/main.less';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <HashRouter>
      {routes}
    </HashRouter>
  </Provider>
  , document.querySelector('.container'));


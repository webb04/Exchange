import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css';

import AppContainer from './containers/AppContainer'
import registerServiceWorker from './registerServiceWorker';
import exchangeApp from './reducers'

const store = createStore(exchangeApp)

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();

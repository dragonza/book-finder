import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router/immutable';
import { createBrowserHistory } from 'history';
import Layout from '../../components/Layout';

import { configureStore } from '../../store/configure-store';
import App from '../HomePage/App';

export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});

export default function Routes() {
  const store = configureStore({ history });

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Layout>
          <Switch>
            <Route exact path="/" component={App} />
            <Route component={() => <div>404 Not found </div>} />
          </Switch>
        </Layout>
      </ConnectedRouter>
    </Provider>
  );
}

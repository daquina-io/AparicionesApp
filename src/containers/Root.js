import React from 'react';
import { Provider } from 'react-redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Router } from 'react-router';
import routeConfig from '../common/routeConfig';

// NOTE: 'this.routeConfig' is my workaround to dismiss 'You cannot change <Router routes>' warning.
// See: https://github.com/gaearon/react-hot-loader/issues/298

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

export default class Root extends React.Component {
  render() {
    const { store, history } = this.props; // eslint-disable-line
    /* istanbul ignore next  */
    if (!this.routeConfig) this.routeConfig = routeConfig;

      return (
          <MuiThemeProvider muiTheme={getMuiTheme()}>
              <Provider store={store}>
                  <Router history={history} routes={this.routeConfig} />
              </Provider>
          </MuiThemeProvider>
      );
  }
}

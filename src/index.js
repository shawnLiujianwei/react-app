import React                  from 'react';
import ReactDOM               from 'react-dom';
import createBrowserHistory   from 'history/lib/createBrowserHistory';
import { syncReduxAndRouter } from 'redux-simple-router';
import configureStore         from './store/configureStore';
import { Provider }             from 'react-redux';
import { Router }               from 'react-router';
import routes                   from './routes';
import DevTools                 from './containers/DevTools';
import { createDevToolsWindow } from './utils';
const target  = document.getElementById('root');
const history = createBrowserHistory();
const store   = configureStore(window.__INITIAL_STATE__, __DEBUG__);

syncReduxAndRouter(history, store);
export default class Root extends React.Component {
  static propTypes = {
    history : React.PropTypes.object.isRequired,
    store   : React.PropTypes.object.isRequired,
    debug   : React.PropTypes.bool,
    debugExternal : React.PropTypes.bool
  }

  static defaultProps = {
    debug : false,
    debugExternal : false
  }

  renderDevTools () {
    if (!this.props.debug) {
      return null;
    }

    return this.props.debugExternal ?
      createDevToolsWindow(this.props.store) : <DevTools />;
  }

  render () {
    return (
      <Provider store={this.props.store}>
        <div>
          <Router history={this.props.history}>
            {routes}
          </Router>
          {this.renderDevTools()}
        </div>
      </Provider>
    );
  }
}
const node = (
  <Root
    history={history}
    store={store}
    debug={__DEBUG__}
    debugExternal={__DEBUG_NW__}
  />
);

ReactDOM.render(node, target);

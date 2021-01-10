import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
// import App from './views/App';
import Home from './views/Home';
import About from './views/About';
import News from './views/News';
import NotFound from './views/NotFound';
import Menu from './components/Menu';
import store from './store';
import 'regenerator-runtime/runtime';
import 'core-js/stable';

render(
  <Provider store={store}>
    <HashRouter>
      <Menu />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/news" component={News} />
        <Route path="/" component={NotFound} />
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

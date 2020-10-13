import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import IndexPage from './pages/index/index';
import './index.scss';
import DemoPage from './pages/demo/demo';

// Router is our ReactRouter that allows client side routing of pages
// We use <Switch /> to ensure only one Route is rendered at a time. Otherwise any route matching
// the path (e.g. regex check) will render one after the other on the page (https://reactrouter.com/web/api/Switch).
// Path "/" must use exact to allow other pages to render, otherwise the IndexPage route would be the first and only page ever rendered

// To link between local pages in our react app we use the <Link /> component (see demo.js) for an example, external links still use <a href="..." />

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/demo" component={DemoPage} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


// Ignore serviceWorker, this is a default provided by Create-React-App that we do not need right now

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

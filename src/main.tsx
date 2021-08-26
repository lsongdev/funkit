import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router, Route, Link
} from "react-router-dom";
import Loadable from "react-loadable";
import Header from './components/Header';

import './main.css';

const loading = () => <div />

const routes = [
  {
    path: "/",
    exact: true,
    component: Loadable({
      loading,
      loader: () => import('./pages/index')
    })
  },
  {
    path: "/new",
    component: Loadable({
      loading,
      loader: () => import('./pages/edit')
    })
  },
  {
    path: "/workers",
    exact: true,
    component: Loadable({
      loading,
      loader: () => import('./pages/workers')
    })
  },
  {
    path: "/worker/:id",
    component: Loadable({
      loading,
      loader: () => import('./pages/edit')
    })
  }
];

const RouteWithSubRoutes = route => (
  <Route
    exact={route.exact}
    path={route.path}
    render={props => (
      <route.component {...props} routes={route.routes} />
    )}
  />
);

const links = [
  { text: 'Home', href: "/" },
  { text: 'Rules', href: "/" },
  { text: 'Workers', href: "/workers" },
  { text: 'Help', href: "/help" },
];

const App = () => {
  return (
    <Router>
      <Header title="FunKit" links={links} />
      <div className="content">
        {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
      </div>
    </Router>
  );
};

ReactDOM.render(<App />,
  document.getElementById('app'));

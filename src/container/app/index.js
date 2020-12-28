import React from 'react';
import { routes } from '../../routes';
import { Header } from "../header";
import { Switch, Route, Redirect } from 'react-router-dom';
import { NotFoundPage } from "../../pages";
import { SideBar } from "../sidebar";

import './style.less';

export const AppContainer = () => {
  return (
    <div className="AppContainer">
      <Header />
      <div className="main">
          <SideBar />
          <div className="component">
              <Switch>
                  <Redirect
                      exact
                      from="/"
                      to="/start"
                  />
                  {routes
                      .map((route, i) => {
                          if (route.children) {
                              return route.children.map((child) => {
                                  return <Route
                                      key={i}
                                      path={`${child.path}`}
                                      render={(params) => <child.component {...params} item={child} />}
                                  />;
                              });
                          }
                          return (
                              <Route
                                  key={i}
                                  path={`${route.path}`}
                                  render={(params) => <route.component {...params} item={route} />}
                              />
                          );
                      })}
                  <Route render={(ren) => <NotFoundPage {...ren} />} />
              </Switch>
          </div>
      </div>
    </div>
  );
}

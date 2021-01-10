import React, {useEffect, useState} from 'react';
import { routes } from '../../routes';
import { connect } from "react-redux";
import { Header } from "../header";
import { Switch, Route, Redirect } from 'react-router-dom';
import { NotFoundPage } from "../../pages";
import { SideBar } from "../sidebar";
import Auth from "../auth";

import './style.less';

const AppContainer = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
      const isLogin = localStorage.getItem('isLogin') === 'true';
      const login = localStorage.getItem('login');
      const name = localStorage.getItem('name');
      const currentUser = {
          login, name
      }
      setUser(currentUser);
      setIsLogin(isLogin);
  }, [isLogin])

  const logOut = () => {
      localStorage.clear();
      window.location.reload(false);
  }

  return (
    <div className="AppContainer">
      <Header user={user} logOut={logOut} />
        {
            !isLogin
                ? <div className="auth-page">
                    <Auth />
                  </div>
                : <div className="main">
                    <SideBar />
                    <div className="component">
                        <Switch>
                            <Redirect
                                exact
                                from="/"
                                to="/home"
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
        }
    </div>
  );
}

export default connect((store) => {
    return {
        app: store.app,
    }
})(AppContainer)

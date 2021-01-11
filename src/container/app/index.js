import React, {useEffect, useState} from 'react';
import { routes } from '../../routes';
import { connect } from "react-redux";
import { Header } from "../header";
import { Switch, Route, Redirect } from 'react-router-dom';
import { NotFoundPage } from "../../pages";
import { SideBar } from "../sidebar";
import Auth from "../auth";
import { SnackbarProvider } from "notistack";
import {useUpdateStore} from "../../hooks";
import {actionTypes as types} from "../../constants";
import './style.less';

const AppContainer = (props) => {
  const {
      currentUser = {},
  } = props.app;

  const updateStore = useUpdateStore({ type: types.APP_UPDATE })

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
      const isLogin = localStorage.getItem('isLogin') === 'true';
      const login = localStorage.getItem('login');
      const name = localStorage.getItem('name');
      const password = localStorage.getItem('password');
      const id = localStorage.getItem('id');
      const encodedPass = atob(password);
      const encodedId = Number(atob(id));

      updateStore({
          currentUser: {
              login,
              name,
              password: encodedPass,
              id: encodedId,
          }
      })

      setIsLogin(isLogin);
  }, [isLogin])

  const logOut = () => {
      localStorage.clear();
      window.location.reload(false);
  }

  return (
      <SnackbarProvider maxSnack={3}>
        <div className="AppContainer">
          <Header user={currentUser} logOut={logOut} />
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
      </SnackbarProvider>
  );
}

export default connect((store) => {
    return {
        app: store.app,
    }
})(AppContainer)

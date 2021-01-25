import React, {useEffect, useState} from 'react';
import { routes } from '../../routes';
import { connect } from "react-redux";
import { Header } from "../header";
import { Switch, Route, Redirect } from 'react-router-dom';
import { NotFoundPage } from "../../pages";
import { SideBar } from "../sidebar";
import Auth from "../auth";
import { signOut } from "../auth/duck/action";
import { isRight } from "../../helpers/isRight";
import { useSnackbar } from "notistack";
import './style.less';

const AppContainer = (props) => {
  const {
      currentUser = {},
      notification = '',
  } = props.app;

  const { enqueueSnackbar } = useSnackbar()


    console.log({notification})

  // const updateStore = useUpdateStore({ type: types.APP_UPDATE })

  const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        const isLogin = localStorage.getItem('isLogin') === 'true';
        setIsLogin(isLogin);
    }, [isLogin])

  // TODO очищать уведомления

  useEffect( () => {
      if (notification !== '') {
          enqueueSnackbar(notification || '')
      }
  }, [notification])

  const logOut = () => {
      props.dispatch(signOut())
      localStorage.clear();
      window.location.reload(false);
  }

  const { displayName = '', photoURL = '' } = currentUser;
  const rightsArr = [];
  rightsArr.push(photoURL.toUpperCase())

  return (
          <div className="app-container">
            {!isLogin
                ? <div className="auth-page">
                    <Auth />
                  </div>
                : <>
                    <div className="control-panel">
                        <Header displayName={displayName} logOut={logOut} />
                        <SideBar rightsArr={rightsArr} />
                    </div>
                    <div className="main">
                        <div className="component">
                            <Switch>
                                <Redirect
                                    exact
                                    from="/"
                                    to="/home"
                                />
                                {routes
                                    .filter((item) => {
                                        const isVisible = isRight({rights: item.rights, userRights: rightsArr});
                                        return isVisible || !item.rights.length;
                                    })
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
                </>
            }
          </div>
  );
}

export default connect((store) => {
    return {
        app: store.app,
    }
})(AppContainer)

import React, {useEffect} from 'react';
import { actionTypes as types } from '../../constants'
import { routes } from '../../routes';
import { connect } from "react-redux";
import { Header } from "../header";
import { Switch, Route, Redirect } from 'react-router-dom';
import { NotFoundPage } from "../../pages";
import { SideBar } from "../sidebar";
import Auth from "../auth";
import {signOut} from "../auth/duck/action";
import { isRight } from "../../helpers/isRight";
import { useSnackbar } from "notistack";
import { useUpdateStore } from "../../hooks";
import './style.less';

const AppContainer = (props) => {
  const {
      currentUser = {},
      notification = {},
  } = props.app;

  const { enqueueSnackbar } = useSnackbar()

  const updateStore = useUpdateStore({ type: types.APP_UPDATE })

  useEffect( () => {
      if (notification.current !== '') {
          enqueueSnackbar(notification.new || '')
      }

      const payload = {
          notification: {
              current: ''
          }
      }
      updateStore(payload)

  }, [notification.new])

  const logOut = () => {
      props.dispatch(signOut())
  }

  const { displayName = '', photoURL = '' } = currentUser?.user || {};
  const rightsArr = [];
  rightsArr.push(photoURL?.toUpperCase())

  const isUserLogged = Object.keys(currentUser).length !== 0;

  return (
          <div className="app-container">
            {!isUserLogged
                ? <div className="auth-page"><Route render={(ren) => <Auth {...ren} />} /></div>
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

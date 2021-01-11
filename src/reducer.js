import { combineReducers } from 'redux';
import { app } from './container/app/duck/reducer';
import { auth } from './container/auth/duck/reducer';
import { home } from './pages/home_page/duck/reducer';
import { users } from './pages/users_page/duck/reducer';
import { profile } from "./pages/profile_page/duck/reducer";

export default combineReducers({
    auth,
    app,
    home,
    users,
    profile,
});
import { combineReducers } from 'redux';
import { home } from './pages/home_page/duck/reducer';
import { users } from './pages/users_page/duck/reducer';

export default combineReducers({
    home,
    users,
});
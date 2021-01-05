import { FirstPage, HomePage } from "./pages";
import {Icon} from "./components";
import UsersPage from "./pages/users_page";

export const routes = [
    {
        component: HomePage,
        icon: <Icon name="home" />,
        label: 'Home',
        path: '/start',
    },
    {
        component: FirstPage,
        icon: <Icon name="sack" />,
        label: 'First Page',
        path: '/first-page',
    },
    {
        component: UsersPage,
        icon: <Icon name="users" />,
        label: 'Users Page',
        path: '/users-page',
    },
]
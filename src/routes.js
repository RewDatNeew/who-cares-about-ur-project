import { ProfilePage, HomePage } from "./pages";
import { Icon } from "./components";
import UsersPage from "./pages/users_page";

export const routes = [
    {
        component: HomePage,
        icon: <Icon name="home" />,
        label: 'Home',
        path: '/home',
    },
    {
        component: ProfilePage,
        icon: <Icon name="sack" />,
        label: 'Profile Page',
        path: '/profile-page',
    },
    {
        component: UsersPage,
        icon: <Icon name="users" />,
        label: 'Users Page',
        path: '/users-page',
    },
]
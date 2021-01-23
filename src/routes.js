import { ProfilePage, HomePage } from "./pages";
import { Icon } from "./components";
import UsersPage from "./pages/users_page";
import AdministrationPage from "./pages/administration_page";
import { special } from "./constants";

export const routes = [
    {
        component: HomePage,
        icon: <Icon name="home" />,
        label: 'Home',
        path: '/home',
        rights: [special.SIMPLE, special.ADMIN],
    },
    {
        component: ProfilePage,
        icon: <Icon name="user" />,
        label: 'Profile Page',
        path: '/profile-page',
        rights: [special.SIMPLE, special.ADMIN],
    },
    {
        component: UsersPage,
        icon: <Icon name="users" />,
        label: 'Users Page',
        path: '/users-page',
        rights: [special.SIMPLE, special.ADMIN],
    },
    {
        component: AdministrationPage,
        icon: <Icon name="admin" />,
        label: 'Administration Page',
        path: '/admin-page',
        rights: [special.ADMIN],
    }
]
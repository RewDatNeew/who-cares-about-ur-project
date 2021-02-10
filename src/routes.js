import { ProfilePage, HomePage } from "./pages";
import { Icon } from "./components";
import UsersPage from "./pages/users_page";
import AdministrationPage from "./pages/administration_page";
import { special } from "./constants";

export const routes = [
    {
        component: HomePage,
        icon: <Icon name="home" />,
        label: 'Дом',
        path: '/home',
        info: '',
        rights: [special.SIMPLE, special.ADMIN],
    },
    {
        component: ProfilePage,
        icon: <Icon name="user" />,
        label: 'Профиль',
        path: '/profile-page',
        info: 'Ваш профиль. Можно ознакомиться с информацией о профиле и изменить пароль',
        rights: [special.SIMPLE, special.ADMIN],
    },
    {
        component: UsersPage,
        icon: <Icon name="users" />,
        label: 'Таблица Пользователей',
        path: '/users-page',
        info: 'Таблица с функциями создания, удаления, изменения и поиска несуществующих сущностей',
        rights: [special.SIMPLE, special.ADMIN],
    },
    {
        component: AdministrationPage,
        icon: <Icon name="admin" />,
        label: 'Админка',
        path: '/admin-page',
        info: '',
        rights: [special.ADMIN],
    }
]
import { FirstPage, HomePage } from "./pages";
import {Icon} from "./components";

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
]
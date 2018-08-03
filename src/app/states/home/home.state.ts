import { HomePage } from "./home.page";
import { HeaderComponentt } from "../../components/header.component";

/**
 * Metada of home state
 *
 *
 */
export const homeState = {
    name: 'home',
    url: '/home',
    views: {
        header: { component: HeaderComponentt },
        $default: { component: HomePage },
    },
};

import { HomePage } from "./home.page";
import { HeaderComponent } from "../../components/header.component";

/**
 * Metada of home state
 *
 *
 */
export const homeState = {
    name: 'home',
    url: '/home',
    views: {
        header: { component: HeaderComponent },
        $default: { component: HomePage },
    },
};

import { HeaderComponent } from '../../components/header/header.component';
import { HomePageComponent } from './home.page';
/**
 * Metadata of home state
 *
 *
 */
export const homeState = {
    name: 'home',
    url: '/home',
    views: {
        header: { component: HeaderComponent },
        $default: { component: HomePageComponent },
    },
};

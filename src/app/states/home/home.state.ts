import { HeaderComponent } from '../../components/header/header.component';
import { HomePageComponent } from './home.page';
import {FooterComponent} from '../../components/footer/footer.component';
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
        footer: { component: FooterComponent },
    },
};

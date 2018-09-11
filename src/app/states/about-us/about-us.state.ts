import { AboutUsPageComponent } from './about-us.page';
import { HeaderComponent } from '../../components/header/header.component';
import {FooterComponent} from '../../components/footer/footer.component';

/**
 * Metadata of home state
 *
 *
 */
export const  aboutUsState = {
    name: 'aboutUs',
    url: '/aboutUs',
    views: {
        header: { component: HeaderComponent },
        $default: { component: AboutUsPageComponent },
        footer: { component: FooterComponent },
    }
};

import { CasesPageComponent } from './cases.page';
import { HeaderComponent } from '../../components/header/header.component';
import {FooterComponent} from '../../components/footer/footer.component';

/**
 * Metadata of cases state
 *
 *
 */
export const casesState = {
    name: 'cases',
    url: '/cases',
    views: {
        header: { component: HeaderComponent },
        $default: { component: CasesPageComponent },
        footer: { component: FooterComponent },
    }
};

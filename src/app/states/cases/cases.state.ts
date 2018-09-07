import { CasesPageComponent } from './cases.page';
import { HeaderComponent } from '../../components/header/header.component';

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
    }
};

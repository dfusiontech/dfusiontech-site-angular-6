import { ContactsPageComponent } from './contacts.page';
import { HeaderComponent } from '../../components/header/header.component';
import {FooterComponent} from '../../components/footer/footer.component';

/**
 * Metadata of home state
 *
 *
 */
export const contactsState = {
    name: 'contacts',
    url: '/contacts',
    views: {
        header: { component: HeaderComponent },
        $default: { component: ContactsPageComponent },
        footer: { component: FooterComponent },
    }
};

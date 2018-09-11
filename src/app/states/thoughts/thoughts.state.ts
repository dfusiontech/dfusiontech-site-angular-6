import { ThoughtsPageComponent } from './thoughts.page';
import { HeaderComponent } from '../../components/header/header.component';
import {FooterComponent} from '../../components/footer/footer.component';


export const thoughtsState = {
    name: 'thoughts',
    url: '/thoughts',
    views: {
        header: { component: HeaderComponent },
        $default: { component: ThoughtsPageComponent },
        footer: { component: FooterComponent },
    },
};


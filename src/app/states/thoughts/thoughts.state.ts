import { ThoughtsPageComponent } from './thoughts.page';
import { HeaderComponent } from '../../components/header/header.component';


export const thoughtsState = {
    name: 'thoughts',
    url: '/thoughts',
    views: {
        header: { component: HeaderComponent },
        $default: { component: ThoughtsPageComponent },
    },
};


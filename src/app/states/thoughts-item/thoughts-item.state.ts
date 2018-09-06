import { ThoughtsItemPage } from './thoughts-item.page';
import { HeaderComponent } from '../../components/header/header.component';
import { Transition } from '@uirouter/angular';

export const thoughtsItemState = {
    name: 'thoughts-item',
    url: '/thought/:thoughtId', // there should be single case name or number
    views: {
        header: { component: HeaderComponent },
        $default: { component: ThoughtsItemPage },
    },
    resolve: [
        {
            token: 'thoughtId',
            deps: [Transition],
            resolveFn: (trans) => {
                // ThoughtsService.getThoughtByLink(trans.params().thoughtId);
                return trans.params().thoughtId;
            }
        }
    ]
};

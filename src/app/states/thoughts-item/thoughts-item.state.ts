import { Transition } from '@uirouter/angular';

import { ThoughtsItemPage } from './thoughts-item.page';
import { HeaderComponent } from '../../components/header/header.component';
import { ThoughtsService } from '../../services/Thoughts.service';

export function thoughtIdResolve ($transition$) {
    // thoughtsService.getThoughtByLink(trans.params().thoughtId);
    const params: any = $transition$.params();
    return params.thoughtId;
}

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
            deps: [Transition, ThoughtsService],
            resolveFn: thoughtIdResolve
        }
    ]
};

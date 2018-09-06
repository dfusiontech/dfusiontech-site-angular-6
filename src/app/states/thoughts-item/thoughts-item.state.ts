import { Transition } from '@uirouter/angular';

import { HeaderComponent } from '../../components/header/header.component';
import { ThoughtsItemPageComponent } from './thoughts-item.page';

import { ThoughtsService } from '../../services/Thoughts.service';

export function thoughtIdResolve ($transition$) {
    const params: any = $transition$.params();
    return params.thoughtId;
}

export const thoughtsItemState = {
    name: 'thoughts-item',
    url: '/thought/:thoughtId', // there should be single case name or number
    views: {
        header: { component: HeaderComponent },
        $default: { component: ThoughtsItemPageComponent },
    },
    resolve: [
        {
            token: 'thoughtId',
            deps: [Transition],
            resolveFn: thoughtIdResolve
            /*
            resolveFn2: (trans, thoughtsService) => {
                // thoughtsService.getThoughtByLink(trans.params().thoughtId);
                return trans.params().thoughtId;
            }
            */
        }
    ]
};

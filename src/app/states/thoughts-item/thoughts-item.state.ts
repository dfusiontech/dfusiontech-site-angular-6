// outsource
import { Transition } from '@uirouter/angular';

import { ThoughtsItemPageComponent } from './thoughts-item.page';

export function thoughtIdResolve ($transition$) {
    // thoughtsService.getThoughtByLink(trans.params().thoughtId);
    const params: any = $transition$.params();
    return params.thoughtId;
}

export const thoughtsItemState = {
    name: 'thoughts-item',
    url: '/thought/:thoughtId', // there should be single case name or number
    views: {
        $default: { component: ThoughtsItemPageComponent }
    },
    resolve: [
        {
            token: 'thoughtId',
            deps: [Transition],
            resolveFn: thoughtIdResolve
        }
    ]
};

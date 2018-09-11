// outsource
import { Transition } from '@uirouter/angular';

import { HeaderComponent } from '../../components/header/header.component';
import { ThoughtsItemPageComponent } from './thoughts-item.page';
import {FooterComponent} from '../../components/footer/footer.component';


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
        $default: { component: ThoughtsItemPageComponent },
        footer: { component: FooterComponent },
    },
    resolve: [
        {
            token: 'thoughtId',
            deps: [Transition],
            resolveFn: thoughtIdResolve
        }
    ]
};

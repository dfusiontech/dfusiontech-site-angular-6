// outsource
import { Transition } from '@uirouter/angular';
//
import { CasePageComponent } from './case.page';
import { HeaderComponent } from '../../components/header/header.component';
import { CasesService } from '../../services/Cases.service';

export function caseIdResolve ($transition$) {
    const params: any = $transition$.params();
    return params.caseId;
}

/**
 * Metadata of cases state
 *
 *
 */
export const casePageState = {
    name: 'case-page',
    url: '/case/:caseId', // there should be single case name or number
    views: {
        header: { component: HeaderComponent },
        $default: { component: CasePageComponent },
    },
    resolve: [
        {
            token: 'caseId',
            deps: [Transition, CasesService],
            resolveFn: caseIdResolve
        }
    ]
};

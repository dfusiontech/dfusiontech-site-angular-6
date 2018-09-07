// outsource
import { Transition } from "@uirouter/angular";

//
import { CasePage } from "./case.page";
import { HeaderComponent } from "../../components/header/header.component";
import { CasesService } from "../../services/Cases.service";



/**
 * Metadata of cases state
 *
 *
 */
export const casePageState = {
    name: 'case-page',
    url: '/case/:permalinkId', // there should be single case name or number
    views: {
        header: { component: HeaderComponent },
        $default: { component: CasePage },
    },
    resolve: [
        {
            token: 'permalinkId',
            deps: [Transition, CasesService],
            resolveFn: (trans, casesService) => {
                return trans.params().permalinkId;
            }
        }
    ]
};


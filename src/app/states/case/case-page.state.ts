import { CasePage } from "./case.page";
import { HeaderComponent } from "../../components/header/header.component";

/**
 * Metadata of cases state
 *
 *
 */
export const casePageState = {
    name: 'case-page',
    url: '/case-page', // there should be single case name or number
    views: {
        header: { component: HeaderComponent },
        $default: { component: CasePage },
    }
};


import { CasesItemPage } from "./cases-item.page";
import { HeaderComponent } from "../../components/header/header.component";

/**
 * Metadata of cases state
 *
 *
 */
export const casesItemState = {
    name: 'casesItem',
    url: '/casesItem', // there should be single case name or number
    views: {
        header: { component: HeaderComponent },
        $default: { component: CasesItemPage },
    }
};


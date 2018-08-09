import { ThoughtsItemPage } from "./thoughts-item.page";
import { HeaderComponent } from "../../components/header/header.component";


export const thoughtsItemState = {
    name: 'thoughtsItem',
    url: '/thoughtsItem', // there should be single case name or number
    views: {
        header: { component: HeaderComponent },
        $default: { component: ThoughtsItemPage },
    },
};

import { AboutUsPage } from "./about-us.page";
import { HeaderComponent } from "../../components/header/header.component";

/**
 * Metadata of home state
 *
 *
 */
export const  aboutUsState = {
    name: 'aboutUs',
    url: '/aboutUs',
    views: {
        header: { component: HeaderComponent },
        $default: { component: AboutUsPage },
    }
};

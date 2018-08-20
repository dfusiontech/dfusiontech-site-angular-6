// outsource
import { NgModule } from '@angular/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CommonModule } from '@angular/common';
import { RootModule, UIRouterModule } from "@uirouter/angular";
import { PreventParentScrollModule } from "ngx-prevent-parent-scroll";
import { NgxPageScrollModule } from 'ngx-page-scroll';
// app states
import { homeState } from "./home/home.state";
import { casesState } from "./cases/cases.state";
import { caseState } from "./case/case.state";
import { thoughtsState } from "./thoughts/thoughts.state";
import { aboutUsState } from "./about-us/about-us.state";
import { contactsState } from "./contacts/contacts.state";
import { thoughtsItemState } from "./thoughts-item/thoughts-item.state";
// Components
import { HeaderComponent } from "../components/header/header.component";
import { LayoutComponent } from "./layout.component";
import { FooterComponent } from "../components/footer/footer.component";
// pages
import { HomePage } from "./home/home.page";
import { CasesPage } from "./cases/cases.page";
import { CasePage } from "./case/case.page";
import { ThoughtsPage} from "./thoughts/thoughts.page";
import { ThoughtsItemPage } from "./thoughts-item/thoughts-item.page";
import { AboutUsPage } from "./about-us/about-us.page";
import { ContactsPage } from "./contacts/contacts.page";
import { CasesService } from "../services/Cases.service";
import { LetsChatComponent } from "../components/let's-chat/lets-chat.component";

/**
 * define all pages within application
 *
 *
 */
export const routing: RootModule = {
    // useHash: false, // html5mode - without #
    useHash: true, // with #
    otherwise: homeState.url,
    states: [
        homeState,
        casesState,
        caseState,
        thoughtsState,
        thoughtsItemState,
        aboutUsState,
        contactsState
    ],
};

/**
 * Layout application module
 *
 *
 */
@NgModule({
    // define list of all page components
    declarations: [
        HeaderComponent,
        FooterComponent,
        LetsChatComponent,
        LayoutComponent,
        HomePage,
        CasesPage,
        CasePage,
        ThoughtsPage,
        ThoughtsItemPage,
        AboutUsPage,
        ContactsPage
    ],
    // define dependencies for all page components
    imports: [
        NgxPageScrollModule,
        CommonModule,
        PreventParentScrollModule,
        NgbModule.forRoot(),
        UIRouterModule.forRoot(routing)
    ],
    providers: [CasesService],
    // define outgoing modules
    exports: [
        UIRouterModule
    ]
})
export class LayoutModule { }

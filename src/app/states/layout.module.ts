// outsource
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootModule, UIRouterModule } from "@uirouter/angular";
// app states
import { homeState } from "./home/home.state";
import { casesState } from "./cases/cases.state";
import { casesItemState } from "./case-item/cases-item.state";
import { thoughtsState } from "./thoughts/thoughts.state";
import { aboutUsState } from "./about-us/about-us.state";
import { contactsState } from "./contacts/contacts.state";

import { LayoutComponent } from "./layout.component";
import { FooterComponent } from "./../components/footer/footer.component";
import { thoughtsItemState } from "./thoughts-item/thoughts-item.state";

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
        casesItemState,
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
        FooterComponent,
        LayoutComponent,
        homeState.component,
        casesState.component,
        casesItemState.component,
        thoughtsState.component,
        thoughtsItemState.component,
        aboutUsState.component,
        contactsState.component
    ],
    // define dependencies for all page components
    imports: [
        CommonModule,
        UIRouterModule.forRoot(routing)
    ],
    // define outgoing modules
    exports: [
        UIRouterModule
    ]
})
export class LayoutModule { }

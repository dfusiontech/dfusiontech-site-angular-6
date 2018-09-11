// outsource
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { RootModule, UIRouterModule } from '@uirouter/angular';
import { PreventParentScrollModule } from 'ngx-prevent-parent-scroll';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { FormsModule } from '@angular/forms';
// services
import { CasesService } from '../services/Cases.service';
import { ThoughtsService } from '../services/Thoughts.service';
// app states
import { homeState } from './home/home.state';
import { casesState } from './cases/cases.state';
import { casePageState } from './case/case-page.state';
import { thoughtsState } from './thoughts/thoughts.state';
import { aboutUsState } from './about-us/about-us.state';
import { contactsState } from './contacts/contacts.state';
import { thoughtsItemState } from './thoughts-item/thoughts-item.state';
// Components
import { HeaderComponent } from '../components/header/header.component';
import { LayoutComponent } from './layout.component';
import { FooterComponent } from '../components/footer/footer.component';
import { LetsChatComponent } from '../components/lets-chat/lets-chat.component';
import { ErrorMessageComponent } from '../components/error-message/error-message.component';
import { PreloaderComponent } from '../components/preloader/preloader.component';
// pages
import { HomePageComponent } from './home/home.page';
import { CasesPageComponent } from './cases/cases.page';
import { CasePageComponent } from './case/case.page';
import { ThoughtsPageComponent } from './thoughts/thoughts.page';
import { ThoughtsItemPageComponent } from './thoughts-item/thoughts-item.page';
import { AboutUsPageComponent } from './about-us/about-us.page';
import { ContactsPageComponent } from './contacts/contacts.page';


/**
 * define all pages within application
 *
 *
 */
export const routing: RootModule = {
    useHash: false, // html5mode - without #
    // useHash: true, // with #
    otherwise: homeState.url,
    states: [
        homeState,
        casesState,
        casePageState,
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
        ErrorMessageComponent,
        PreloaderComponent,
        LayoutComponent,
        HomePageComponent,
        CasesPageComponent,
        CasePageComponent,
        ThoughtsPageComponent,
        ThoughtsItemPageComponent,
        AboutUsPageComponent,
        ContactsPageComponent
    ],
    // define dependencies for all page components
    imports: [
        NgxPageScrollModule,
        CommonModule,
        PreventParentScrollModule,
        NgbModule.forRoot(),
        UIRouterModule.forRoot(routing),
        FormsModule
    ],
    providers: [
        CasesService,
        ThoughtsService
    ],
    // define outgoing modules
    exports: [
        UIRouterModule
    ]
})
export class LayoutModule { }

// outsource
import { NgModule } from '@angular/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CommonModule } from '@angular/common';
import { RootModule, UIRouterModule } from "@uirouter/angular";
// app states
import { homeState } from "./home/home.state";
import { loginState } from "./login/login.state";
// Components
import { HeaderComponent } from "../components/header.component";
import { HomePage } from "./home/home.page";
import { LoginPage } from "./login/login.page";
import { LayoutComponent } from "./layout.component";
// outsource
import { PreventParentScrollModule } from "ngx-prevent-parent-scroll";

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
        loginState
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
      HomePage,
      LoginPage,
      LayoutComponent
  ],
  // define dependencies for all page components
  imports: [
      CommonModule,
      PreventParentScrollModule,
      NgbModule.forRoot(),
      UIRouterModule.forRoot(routing)
  ],
  // define outgoing modules
  exports: [
    UIRouterModule
  ]
})
export class LayoutModule { }

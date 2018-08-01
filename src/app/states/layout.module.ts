// outsource
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootModule, UIRouterModule } from "@uirouter/angular";
// app states
import { homeState } from "./home/home.state";
import { loginState } from "./login/login.state";


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
      homeState.component,
      loginState.component
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

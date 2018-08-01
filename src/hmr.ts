/**
 *  Angular-HMR Hot Module Reloading for Webpack and Angular.
 *  All versions of Angular and Webpack will work with this module
 *
 *  for more information see:
 *  https://github.com/gdi2290/angular-hmr
 *  https://webpack.js.org/guides/hot-module-replacement
 */
import { NgModuleRef, ApplicationRef } from '@angular/core';
import { createNewHosts } from '@angularclass/hmr';

export const hmrBootstrap = (module: any, bootstrap: () => Promise<NgModuleRef<any>>) => {
    let ngModule: NgModuleRef<any>;
    module.hot.accept();
    bootstrap().then(mod => ngModule = mod);
    module.hot.dispose(() => {
        const appRef: ApplicationRef = ngModule.injector.get(ApplicationRef);
        const elements = appRef.components.map(c => c.location.nativeElement);
        const makeVisible = createNewHosts(elements);
        ngModule.destroy();
        makeVisible();
    });
};

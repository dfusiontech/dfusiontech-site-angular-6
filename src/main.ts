import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { hmrBootstrap } from './hmr';

if (environment.production) {
    enableProdMode();
} else {
    console.info('%c APP Environment:\n',
        'background: green; color: #fff; font-size: 14px; font-weigth: bolder;', environment);
}

const bootstrap = () =>platformBrowserDynamic().bootstrapModule(AppModule);
if (environment.hmr) {
    if (module[ 'hot' ]) {
        hmrBootstrap(module, bootstrap);
    } else {
        console.error('HMR is not enabled for webpack-dev-server!');
        console.log('Are you using the --hmr flag for ng serve?');
    }
} else {
    bootstrap().catch(error => console.error('%c APP bootstraping ERROR:\n',
        'background: red; color: #fff; font-size: 18px; font-weigth: bolder;', error));
}

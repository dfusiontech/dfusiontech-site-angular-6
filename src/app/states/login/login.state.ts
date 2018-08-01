import { LoginPage } from './login.page';

/**
 * Metada of home state
 *
 *
 */
export const loginState = {
    name: 'login',
    url: '/login',
    component: LoginPage,
    // resolve: [
    //     {
    //         token: 'people',
    //         deps: [],
    //         resolveFn: () => {
    //             return new Promise(( resolve, reject ) => {
    //                 setTimeout(resolve, 2 * 1000);
    //             });
    //         }
    //     }
    // ]
};

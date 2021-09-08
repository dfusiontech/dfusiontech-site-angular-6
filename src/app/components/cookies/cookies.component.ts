import { Component } from '@angular/core';

interface Alert {
    message: string;
    buttonText: string;
}

const ALERTS: Alert[] = [{
    message: 'We use cookies to make our website as convenient as possible for you. ' +
    'By using our website, you agree to the placement of cookies on your device.',
    buttonText: 'I agree'
}
];

@Component({
    selector: '[data-dft-cookies]',
    templateUrl: './cookies.html'
})
export class CookiesComponent {

    cookie: Alert[];

    constructor() {
        if (!localStorage.getItem('dft-cookie-banner')) { this.cookie = Array.from(ALERTS); }
    }

    closeAlert(alert: Alert) {
        localStorage.setItem('dft-cookie-banner', '1');
        this.cookie.splice(this.cookie.indexOf(alert), 1);
    }
}


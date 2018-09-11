import { Component, OnInit, HostListener } from '@angular/core';

@Component({
    selector: '[data-lets-chat]',
    templateUrl: './lets-chat.html'
})
export class LetsChatComponent implements OnInit {
    public mobileRestructuringPoint = 768;
    public caseMobileBehavior;

    constructor() {}
    ngOnInit() {
        if ( window.innerWidth < this.mobileRestructuringPoint ) {
            this.caseMobileBehavior = true;
        } else {
            this.caseMobileBehavior = false;
        }
    }
    // find out width of current desktop and set needed header height value and transmit it to on scroll event
    @HostListener('window:resize') onResize() {
        if ( window.innerWidth < this.mobileRestructuringPoint ) {
            this.caseMobileBehavior = true;
        } else {
            this.caseMobileBehavior = false;
        }
    }
}

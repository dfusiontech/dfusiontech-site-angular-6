import { Component, OnInit, HostListener } from '@angular/core';

@Component({
    templateUrl: './header.html'
})
export class HeaderComponent implements OnInit {

    // initially menu icon isn't triggered
    public menuToggler = false;
    // initially background color transparent
    public isScrolled = false;
    // header size and value which set pixels quantity after which header bg will change
    private headerHeight: number;

    private headerRestructuringPoint = 768;
    private mobileHeaderHeight = 57;
    private desktopHeaderHeight = 95;

    constructor() {}
    ngOnInit() {
        // find out initial desktop width
        if ( window.innerWidth > this.headerRestructuringPoint ) {
            this.headerHeight = this.desktopHeaderHeight;
        } else {
            this.headerHeight = this.mobileHeaderHeight;
        }
    }
    // find out width of current desktop and set needed header height value and transmit it to on scroll event
    @HostListener('window:resize') onResize() {
        if ( window.innerWidth > this.headerRestructuringPoint ) {
            this.headerHeight = this.desktopHeaderHeight;
        } else {
            this.headerHeight = this.mobileHeaderHeight;
        }
    }

    // listening to scroll event, changing background color after header height quantity of pixels were scrolled
    @HostListener('window:scroll') onScroll() {
        this.isScrolled = !!window.pageYOffset;
    }
}

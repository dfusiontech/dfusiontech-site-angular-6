import { Component, OnInit } from '@angular/core';

@Component({
    // selector: '[id="header"]',
    templateUrl: './header.html'
})
export class HeaderComponent implements OnInit {
    // initially menu icon isn't triggered
    public menuToggler = false;

    constructor() {}
    ngOnInit() {
    }
}

import { Component, OnInit } from '@angular/core';

@Component({
    selector: '[id="header"]',
    templateUrl: './header.html'
})
export class HeaderComponentt implements OnInit {
    // initially menu icon isn't triggered
    public menuTrigger = false;
    constructor() { }

    ngOnInit() {
    }

}

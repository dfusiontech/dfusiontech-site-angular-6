// outsource
import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';

@Component({
    selector: '[id="about-us"]',
    templateUrl: './about-us.html'
})
export class AboutUsPageComponent implements OnInit {
    /**
     * constructor holder to define what exactly past in public vm object
     *
     *
     */
    constructor ( private state: StateService ) {

    }

    ngOnInit() {
    }
}

// outsource
import { Component, OnInit } from "@angular/core";
import { StateService } from "@uirouter/angular";

@Component({
    selector: '[id="case"]',
    templateUrl: './case.html'
})
export class CasePage implements OnInit {
    /**
     * using vm to define public data of the page
     * and delegate prepared properties
     *
     */
    public vm = {

    };

    /**
     * constructor holder to define what exactly past in public vm object
     *
     *
     */
    constructor ( private state: StateService ) {

    };

    ngOnInit() {};
}

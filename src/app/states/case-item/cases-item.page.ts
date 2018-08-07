// outsource
import { Component, OnInit } from "@angular/core";
import { StateService } from "@uirouter/angular";

@Component({
    selector: '[id="casesItem"]',
    templateUrl: './cases-item.html'
})
export class CasesItemPage implements OnInit {
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

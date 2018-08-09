// outsource
import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';

@Component({
    selector: '[id="cases"]',
    templateUrl: './cases.html'
})
export class CasesPage implements OnInit {
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


    /**
     * example of programmatically redirect
     *
     *
     */
    public goToCase (caseId) { // Here should be logic of opening different cases (maybe here should be called service)
        if(caseId == 0) {
            this.state.go('casesItem');
        } else if(caseId == 1) {
            this.state.go('casesItem');
        }
    };

    ngOnInit() {};
}

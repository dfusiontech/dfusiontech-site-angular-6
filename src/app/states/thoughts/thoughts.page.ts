// outsource
import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';

import { ThoughtsService } from "../../services/Thoughts.service";

@Component({
    selector: '[id="thoughts"]',
    templateUrl: './thoughts.html'
})
export class ThoughtsPage implements OnInit {
    // initially data is loading
    public thoughtsListLoaded = false;

    public errorResponse;
    // initially we don't know if error has been occurred with getting data
    public errorOccurred = false;

    public thoughtsList;

    /**
     * constructor holder to define what exactly past in public vm object
     *
     *
     */
    constructor (private state: StateService, private thoughtsService: ThoughtsService) {

    };

    ngOnInit() {
        this.thoughtsService
            .getThoughts()
            .then(data => {
                this.thoughtsList = data;
                this.thoughtsListLoaded = true;
            })
            .catch(error => {
                this.errorResponse = error;
                this.errorOccurred = true;
            });
    };

    // /**
    //  * example of programmatically redirect
    //  *
    //  *
    //  */
    // public goToThought (thoughtId) { // Here should be logic of opening different thoughts (maybe here should be called service)
    //     if(thoughtId == 0) {
    //         this.state.go('thoughtsItem');
    //     } else if(thoughtId == 1) {
    //         this.state.go('thoughtsItem');
    //     }
    // };
}

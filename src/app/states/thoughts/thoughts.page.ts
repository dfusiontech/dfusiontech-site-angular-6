// outsource
import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';

@Component({
    templateUrl: './thoughts.html'
})
export class ThoughtsPage implements OnInit {
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
    constructor (private state: StateService) {

    };

    /**
     * example of programmatically redirect
     *
     *
     */
    public goToThought (thoughtId) { // Here should be logic of opening different thoughts (maybe here should be called service)
        if(thoughtId == 0) {
            this.state.go('thoughtsItem');
        } else if(thoughtId == 1) {
            this.state.go('thoughtsItem');
        }
    };

    ngOnInit() {};
}

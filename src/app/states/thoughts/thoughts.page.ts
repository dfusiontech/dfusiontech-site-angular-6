// outsource
import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';

import { ThoughtsService } from '../../services/Thoughts.service';

@Component({
    selector: '[id="thoughts"]',
    templateUrl: './thoughts.html'
})
export class ThoughtsPageComponent implements OnInit {
    // initially data is loading
    public thoughtsListLoaded = false;
    public thoughtsListEmpty = true;
    public errorResponse;

    // initially we don't know if error has been occurred with getting data
    public errorOccurred = false;

    public thoughtsList;
    public headingThought;

    /**
     * constructor holder to define what exactly past in public vm object
     *
     *
     */
    constructor (private state: StateService, private thoughtsService: ThoughtsService) {}

    ngOnInit() {
        this.thoughtsService
            .getThoughts()
            .then((data: Array<Object>) => {
                if (data.length) {
                    this.headingThought = data.splice(0, 1)[0];
                    this.thoughtsList = data;
                    this.thoughtsListLoaded = true;
                    this.thoughtsListEmpty = false;
                } else {
                    this.thoughtsListLoaded = true;
                    this.thoughtsListEmpty = true;
                }
            })
            .catch(error => {
                this.errorResponse = error;
                this.errorOccurred = true;
                this.thoughtsListEmpty = true;
                this.thoughtsListLoaded = false;
            });
    }
}

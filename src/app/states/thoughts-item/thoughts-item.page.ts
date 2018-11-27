// outsource
import { Component, OnInit, Input } from '@angular/core';
import { StateService } from '@uirouter/angular';
// local dependencies
import { ThoughtsService } from '../../services/Thoughts.service';
import {SEOService} from '../../services/Seo.service';

@Component({
    selector: '[id="thoughts-item"]',
    templateUrl: './thoughts-item.html'
})
export class ThoughtsItemPageComponent implements OnInit {
    @Input() thoughtId;


    public thought;
    // initially data is loading
    public thoughtItemLoaded = false;
    // will contain potential error
    public errorResponse;
    // initially we don't know if error has been occurred with getting data
    public errorOccurred = false;

    private metaTags = [
        {
            title: 'Thoughts page. dFusiontech inc.'
        },
        {
            name: 'description',
            content: 'THOUGHTS PAGE OF THE SITE, DFT IS OUR PRIDE'
        }
    ];

    /**
     * constructor holder to define what exactly past in public vm object
     *
     */
    constructor (
        private state: StateService,
        private thoughtsService: ThoughtsService,
        private seoService: SEOService) {}

    ngOnInit() {
        this.seoService.updateMetaTags(this.metaTags);

        this.thoughtsService
            .getThoughtByLink(this.thoughtId)
            .then(data => {
                this.thought = data;
                this.thoughtItemLoaded = true;
                // update meta tags with new information on current thought
                this.metaTags.push({title: this.thought.title + '. dFusiontech inc.'});
                this.metaTags.push({name: 'description', content: this.thought.description});
                this.seoService.updateMetaTags(this.metaTags);
            })
            .catch(error => {
                this.errorResponse = error;
                this.errorOccurred = true;
            });
    }
}

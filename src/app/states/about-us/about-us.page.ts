// outsource
import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';
// local dependencies
import { SEOService } from '../../services/Seo.service';

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

    private metaTags = [
        {
            title: 'About us. dFusionTech Inc.'
        },
        {
            name: 'description',
            content: 'ABOUT US PAGE OF THE SITE, DFT IS OUR PRIDE'
        },
    ];

    constructor (
        private state: StateService,
        private seoService: SEOService) {}

    ngOnInit() {
        this.seoService.updateMetaTags(this.metaTags);
    }
}

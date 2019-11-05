// outsource
import { Component, OnInit, HostListener, AfterContentInit } from '@angular/core';
import { StateService } from '@uirouter/angular';
// local dependencies
import { SEOService } from '../../services/Seo.service';

@Component({
    selector: '[id="about-us"]',
    templateUrl: './about-us.html'
})
export class AboutUsPageComponent implements OnInit, AfterContentInit {
    verticalCardWidth: number;
    horizontalCardWidth: number;
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

    ngAfterContentInit() {
        this.verticalCardWidth = window.document.getElementById('horizontal').offsetWidth;
        this.horizontalCardWidth = window.document.getElementById('vertical').offsetWidth;
    }

    @HostListener('window:resize') onResize() {
        const horizontal = window.document.getElementById('horizontal');
        const vertical = window.document.getElementById('vertical');
        setTimeout(() => {
            this.verticalCardWidth = horizontal.offsetWidth;
            this.horizontalCardWidth = vertical.offsetWidth;
        }, 100);
    }
}

// outsource
import { Component, HostListener, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';
// local dependencies
import { CasesService } from '../../services/Cases.service';
import { ThoughtsService } from '../../services/Thoughts.service';
import { SEOService } from '../../services/Seo.service';

@Component({
    selector: '[id="home"]',
    templateUrl: './home.html'
})
export class HomePageComponent implements OnInit {
    // initially data is loading
    public casesListLoaded = false;
    public thoughtsListLoaded = false;
    public errorResponse;
    // initially we don't know if error has been occurred with getting data
    public errorOccurred = false;
    public casesList;
    public thoughtsList;
    public caseMobileBehavior;
    public caseMediumDesktopBehavior;
    public caseLargeDesktopBehavior;
    public caseRestructuringPointMobile = 768;
    public caseRestructuringPointDesktop = 992;
    public caseRestructuringPointLgDesktop =  1200;

    private metaTags = [
        {
            title: 'Home page. dFusionTech Inc.'
        },
        {
            name: 'description',
            content: 'HOME PAGE OF THE SITE, DFT IS OUR PRIDE'
        }
    ];

    constructor (
        private state: StateService,
        private casesService: CasesService,
        private thoughtsService: ThoughtsService,
        private seoService: SEOService) {}

    ngOnInit() {
        // add specific meta tags for Home page
        this.seoService.updateMetaTags(this.metaTags);
        this.casesList = this.casesService.getCases().slice(0, 2);

        this.thoughtsList = this.thoughtsService.getThoughts().slice(0, 3);

        // changing cases content order on mobile
        if ( window.innerWidth < this.caseRestructuringPointMobile ) {
            this.caseMobileBehavior = true;
        } else {
            this.caseMobileBehavior = false;
        }
        // changing cases content order on medium desktop
        if ( window.innerWidth < this.caseRestructuringPointDesktop ) {
            this.caseMediumDesktopBehavior = true;
        } else {
            this.caseMediumDesktopBehavior = false;
        }
        // changing cases content order on large desktop
        if ( window.innerWidth < this.caseRestructuringPointLgDesktop ) {
            this.caseLargeDesktopBehavior = true;
        } else {
            this.caseLargeDesktopBehavior = false;
        }

    }

    @HostListener('window:resize') onResize() {
        if ( window.innerWidth < this.caseRestructuringPointMobile ) {
            this.caseMobileBehavior = true;
        } else {
            this.caseMobileBehavior = false;
        }
        // for medium desktop
        if ( window.innerWidth < this.caseRestructuringPointDesktop ) {
            this.caseMediumDesktopBehavior = true;
        } else {
            this.caseMediumDesktopBehavior = false;
        }
        // changing cases content order on large desktop
        if ( window.innerWidth < this.caseRestructuringPointLgDesktop ) {
            this.caseLargeDesktopBehavior = true;
        } else {
            this.caseLargeDesktopBehavior = false;
        }
    }
}

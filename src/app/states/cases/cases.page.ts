// outsource
import { Component, HostListener, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';
// local dependencies
import { CasesService } from '../../services/Cases.service';
import { SEOService } from '../../services/Seo.service';

@Component({
    selector: '[id="cases"]',
    templateUrl: './cases.html'
})
export class CasesPageComponent implements OnInit {
    // initially data is loading
    public casesListLoaded = false;

    public errorResponse;
    // initially we don't know if error has been occurred with getting data
    public errorOccurred = false;

    public casesList;

    public caseMobileBehavior;
    public caseMediumDesktopBehavior;
    public caseLargeDesktopBehavior;
    public caseRestructuringPointMobile = 768;
    public caseRestructuringPointDesktop = 992;
    public caseRestructuringPointLgDesktop =  1200;

    private metaTags = [
        {
            title: 'Cases. dFusiontech inc.'
        },
        {
            name: 'description',
            content: 'CASES PAGE OF THE SITE, DFT IS OUR PRIDE'
        },
    ];

    constructor (
        private state: StateService,
        private casesService: CasesService,
        private seoService: SEOService) {}

    ngOnInit() {
        this.seoService.updateMetaTags(this.metaTags);
        this.casesList = this.casesService.getCases();

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
        // for large desktop
        if ( window.innerWidth < this.caseRestructuringPointLgDesktop ) {
            this.caseLargeDesktopBehavior = true;
        } else {
            this.caseLargeDesktopBehavior = false;
        }
    }
}

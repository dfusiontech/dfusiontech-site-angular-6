// outsource
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';
// local dependencies
import { CasesService } from '../../services/Cases.service';
import { SEOService } from '../../services/Seo.service';

@Component({
    selector: '[id="case-page"]',
    templateUrl: './case-page.html'
})
export class CasePageComponent implements OnInit {
    @Input() caseId;

    public case;
    // initially data is loading
    public caseItemLoaded = false;
    // will contain potential error
    public errorResponse;
    // initially we don't know if error has been occurred with getting data
    public errorOccurred = false;

    public caseXlgDesktopBehavior;
    public caseMobileDesktopBehavior;
    public caseRestructuringPointMobile = 768;
    public caseRestructuringPointLarge = 1199;
    public caseImgPlaceholder = '';
    public caseImgLoaded = false;
    public placeholderLoaded = false;

    constructor (
        private state: StateService,
        private casesService: CasesService,
        private seoService: SEOService) {}

    private metaTags = [
        {
            title: 'Case page. dFusiontech inc.'
        },
        {
            name: 'description',
            content: 'CASE PAGE OF THE SITE, DFT IS OUR PRIDE'
        }
    ];

    private setPlaceholder() {
      this.caseImgPlaceholder = this.case.headingImg.replace('heading.jpg', 'heading.placeholder.jpg')
    }

    private preloadHeading() {
      const img = new Image();
      img.src = this.case.headingImg;
      img.addEventListener('load', () => this.caseImgLoaded = true)
    }

    private preloadPlaceholder() {
      const img = new Image();
      img.src = this.caseImgPlaceholder;
      img.addEventListener('load', () => this.placeholderLoaded = true)
    }

    ngOnInit() {
        this.seoService.updateMetaTags(this.metaTags);

        // changing case page content order on large desktop
        if ( window.innerWidth > this.caseRestructuringPointLarge ) {
            this.caseXlgDesktopBehavior = true;
        } else {
            this.caseXlgDesktopBehavior = false;
        }
        if ( window.innerWidth < this.caseRestructuringPointMobile ) {
            this.caseMobileDesktopBehavior = true;
        } else {
            this.caseMobileDesktopBehavior = false;
        }

        this.case = this.casesService.getCaseByLink(this.caseId)
        this.metaTags.push({title: this.case.title + '. dFusiontech inc.'});
        this.metaTags.push({name: 'description', content: this.case.description});
        this.seoService.updateMetaTags(this.metaTags);
        this.setPlaceholder();
        this.preloadHeading();
        this.preloadPlaceholder();

    }

    @HostListener('window:resize') onResize() {
        // for large desktop
        if ( window.innerWidth > this.caseRestructuringPointLarge ) {
            this.caseXlgDesktopBehavior = true;
        } else {
            this.caseXlgDesktopBehavior = false;
        }
        // for small desktop
        if ( window.innerWidth < this.caseRestructuringPointMobile ) {
            this.caseMobileDesktopBehavior = true;
        } else {
            this.caseMobileDesktopBehavior = false;
        }
    }
}

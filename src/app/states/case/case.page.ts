// outsource
import {
    AfterViewChecked,
    Component,
    ElementRef,
    HostListener,
    Input,
    OnInit,
    ViewChild
} from '@angular/core';
import { StateService } from '@uirouter/angular';
// local dependencies
import { CasesService } from '../../services/Cases.service';
import { SEOService } from '../../services/Seo.service';

@Component({
    selector: '[id="case-page"]',
    templateUrl: './case-page.html'
})
export class CasePageComponent implements OnInit, AfterViewChecked {
    @Input() caseId;

    public case;
    // initially data is loading
    public caseItemLoaded = false;
    // will contain potential error
    public errorResponse;
    // initially we don't know if error has been occurred with getting data
    public errorOccurred = false;
    @ViewChild('headingImg') headingImg: ElementRef;
    @ViewChild('headingDescription') headingDescription: ElementRef;

    public caseXlgDesktopBehavior;
    public caseMobileDesktopBehavior;
    public caseRestructuringPointMobile = 768;
    public caseRestructuringPointLarge = 1199;
    constructor (
        private state: StateService,
        private casesService: CasesService,
        private seoService: SEOService) {}

    private metaTags = [
        {
            title: 'Case page. dFusionTech Inc.'
        },
        {
            name: 'description',
            content: 'CASE PAGE OF THE SITE, DFT IS OUR PRIDE'
        }
    ];

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

        this.case = this.casesService.getCaseByLink(this.caseId);
        this.metaTags.push({title: this.case.title + '. dFusionTech Inc.'});
        this.metaTags.push({name: 'description', content: this.case.description});
        this.seoService.updateMetaTags(this.metaTags);
        this.case.projectLinkText = this.case.projectLink
                .match(/:\/\/(?:www\.)?(.[^/]+)(.*)/)[1]
                || this.case.title;

    }

    ngAfterViewChecked() {
        // when window.innerWidth less than 768 we dont need to change styling
        // because the layout is changing
        if ( window.innerWidth > this.caseRestructuringPointMobile ) {
            let delta = 200;

            if ( window.innerWidth > this.caseRestructuringPointLarge ) {
                delta = 120;
            } else if (window.innerWidth > 991) {
                delta = 190;
            }

            const img = this.headingImg.nativeElement;
            const descr = this.headingDescription.nativeElement;
            descr.style.top = img.offsetHeight - descr.offsetHeight + delta + 'px';
        }
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

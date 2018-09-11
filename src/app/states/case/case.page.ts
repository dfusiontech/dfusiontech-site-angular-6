// outsource
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';
import { CasesService } from '../../services/Cases.service';

@Component({
    selector: '[data-case-page]',
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
    constructor ( private state: StateService, private casesService: CasesService) {}

    ngOnInit() {
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

        this.casesService
            .getCaseByLink(this.caseId)
            .then(data => {
                this.case = data;
                this.caseItemLoaded = true;
            })
            .catch(error => {
                this.errorResponse = error;
                this.errorOccurred = true;
            });
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

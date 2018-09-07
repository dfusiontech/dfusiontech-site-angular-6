// outsource
import { Component, HostListener, Input, OnInit } from "@angular/core";
import { StateService } from "@uirouter/angular";
import { CasesService } from "../../services/Cases.service";

@Component({
    selector: '[id="case-page"]',
    templateUrl: './case-page.html'
})
export class CasePage implements OnInit {
    @Input() caseId;
    public case;
    public caseXlgDesktopBehavior;
    public caseMobileDesktopBehavior;
    public caseRestructuringPointMobile = 768;
    public caseRestructuringPointLarge = 1199;
    constructor ( private state: StateService, private casesService: CasesService) {};

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

        this.casesService.getCaseByLink(this.caseId).then(data => {
            this.case = data;
        });
    };

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

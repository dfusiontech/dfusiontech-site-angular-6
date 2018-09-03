// outsource
import { Component, HostListener, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';
// services
import { CasesService } from "../../services/Cases.service";

@Component({
    selector: '[id="home"]',
    templateUrl: './home.html'
})
export class HomePage implements OnInit {
    public casesList;
    public caseMobileBehavior;
    public caseMediumDesktopBehavior;
    public caseRestructuringPointMobile = 768;
    public caseRestructuringPointDesktop = 992;

    constructor ( private state: StateService, private casesService: CasesService) {};

    ngOnInit() {
        this.casesService.getCases().then(data => {
            this.casesList = data;
        });
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

    };

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
    }
}

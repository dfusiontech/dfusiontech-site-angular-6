// outsource
import { Component, HostListener, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';
import { CasesService } from "../../services/Cases.service";

@Component({
    selector: '[id="cases"]',
    templateUrl: './cases.html'
})
export class CasesPage implements OnInit {
    public casesList;
    public caseMobileBehavior;
    public caseRestructuringPoint = 768;
    constructor ( private state: StateService, private casesService: CasesService) {};

    ngOnInit() {
        this.casesService.getCases().then(data => {
            console.log(data);
            this.casesList = data;
            console.log(this.casesList);
        });
        // changing cases content order on mobile
        if ( window.innerWidth < this.caseRestructuringPoint ) {
            this.caseMobileBehavior = true;
        } else {
            this.caseMobileBehavior = false;
        }
    };

    @HostListener('window:resize') onResize() {
        if ( window.innerWidth < this.caseRestructuringPoint ) {
            this.caseMobileBehavior = true;
        } else {
            this.caseMobileBehavior = false;
        }
    }
}

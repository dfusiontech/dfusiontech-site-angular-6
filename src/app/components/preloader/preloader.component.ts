import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-preloader',
    templateUrl: './preloader.html'
})
export class PreloaderComponent implements OnInit {
    // set amount of spinners in preloader, if you will change this number from current we should understand that in
    // index.html you must change quantity manually
    public spinnerQuantity = 8;
    // we need array to use *ngFor
    public spinnerList = [];
    constructor() {}
    ngOnInit() {
        // set amount of spinners
        this.spinnerList.length = this.spinnerQuantity;
    }
}

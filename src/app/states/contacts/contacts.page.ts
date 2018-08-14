// outsource
import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';

@Component({
    selector: '[id="contacts"]',
    templateUrl: './contacts.html'
})
export class ContactsPage implements OnInit {

    /**
     * constructor holder to define what exactly past in public vm object
     *
     */
    constructor(private state: StateService) {
    }

    ngOnInit() {

    }

    // onSubmit() { }
}

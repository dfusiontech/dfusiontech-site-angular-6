// outsource
import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';

@Component({
    selector: '[id="contacts"]',
    templateUrl: './contacts.html'
})
export class ContactsPage implements OnInit {
    /**
     * using vm to define publick data of the page
     * and deleagate prepared properties
     *
     */
    public vm = {

    };

    /**
     * constructor holder to define what exactly past in public vm object
     *
     *
     */
    constructor ( private state: StateService ) {

    }

    ngOnInit() {
    }
}

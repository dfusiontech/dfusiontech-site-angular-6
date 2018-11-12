// outsource
import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';

@Component({
    selector: '[id="contacts"]',
    templateUrl: './contacts.html'
})
export class ContactsPageComponent implements OnInit {
    contactMessage: any = {
        name: '',
        email: '',
        message: ''
    };

    /**
     * constructor holder to define what exactly past in public vm object
     *
     */
    constructor(private state: StateService) {  }

    ngOnInit() {  }

    /**
     * Here should be a logic for sending the object [contactMessage]
     * to the server side
     */
    onSubmit() {
        console.log(JSON.stringify(this.contactMessage));
    }
}

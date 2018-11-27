// outsource
import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';
// local dependencies
import { SEOService } from '../../services/Seo.service';

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

    private metaTags = [
        {
            title: 'Contact us. dFusiontech inc.'
        },
        {
            name: 'description',
            content: 'CONTACTS PAGE OF THE SITE, DFT IS OUR PRIDE'
        },
    ];

    /**
     * constructor holder to define what exactly past in public vm object
     *
     */
    constructor(
        private state: StateService,
        private seoService: SEOService) {}

    ngOnInit() {
        this.seoService.updateMetaTags(this.metaTags);
    }

    /**
     * Here should be a logic for sending the object [contactMessage]
     * to the server side
     */
    onSubmit() {
        console.log(JSON.stringify(this.contactMessage));
    }
}

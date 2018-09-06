import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: '[id="errorMessage"]',
    templateUrl: './error-message.html'
})
export class ErrorMessageComponent implements OnInit {
    @Input() errorResponse;

    constructor() {};
    ngOnInit() {
    };
}

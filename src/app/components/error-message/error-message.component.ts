import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-error-message',
    templateUrl: './error-message.html'
})
export class ErrorMessageComponent implements OnInit {
    @Input() errorResponse;

    constructor() {}
    ngOnInit() {
    }
}

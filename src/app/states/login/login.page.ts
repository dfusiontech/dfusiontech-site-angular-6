// outsource
import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';

@Component({
  selector: '[id="login"]',
  templateUrl: './login.html'
})
export class LoginPage implements OnInit {
    /**
     * using vm to define publick data for the page
     * and deleagate some properties
     *
     */
    public vm = {
        items: [{name: 'foo', action: null }, {name: 'bar', action: null } ]
    }

    /**
     * constructor holder to define what exactly past in public vm object
     *
     *
     */
    constructor ( private state: StateService ) {

    }

    /**
     * example of programmatically redirect
     *
     *
     */
    public goHome () {
        this.state.go('home');
    }
  ngOnInit() {
  }

}

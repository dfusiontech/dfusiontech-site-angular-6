// outsource
import { Component, OnInit } from "@angular/core";
import { StateService } from "@uirouter/angular";

import { TeamLeadersService } from "../../services/Team-leaders.service";

@Component({
    selector: '[id="aboutUs"]',
    templateUrl: './about-us.html'
})
export class AboutUsPage implements OnInit {
    public teamLeadersList;
    /**
     * constructor holder to define what exactly past in public vm object
     *
     *
     */
    constructor ( private state: StateService, private teamLeadersService: TeamLeadersService ) {  }

    ngOnInit() {
        this.teamLeadersService.getTeamLeaders().then(data => {
            this.teamLeadersList = data;
        });
    }
}

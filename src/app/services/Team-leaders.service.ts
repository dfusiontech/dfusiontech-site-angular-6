import { Injectable } from "@angular/core";
import { TeamLeadersConstant } from "../constants/team-leaders.constant";

@Injectable()

export class TeamLeadersService {
    constructor() {  }
    public getTeamLeaders() {
        const teamLeadersList = [];
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                if ( TeamLeadersConstant ) {
                    for (let i = 0; i < TeamLeadersConstant.length; i++) {
                        teamLeadersList.push(TeamLeadersConstant[i]);
                    }
                    resolve( teamLeadersList );
                }
                else {
                    reject('TeamLeadersService: error handled while waiting for TeamLeadersConst..');
                }
            }, 1000);
        });
        return promise;
    }
}

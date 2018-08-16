import { Injectable } from "@angular/core";
import { CasesConstant } from "../constants/cases.constant";
import { CaseModel } from "../models/case.model";

@Injectable()
export class CasesService {
    constructor() {}
    public getCases() {
        const casesList = [];
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                if ( CasesConstant ) {
                    for ( let i = 0; i < CasesConstant.length; i++ ) {
                        casesList.push(new CaseModel( CasesConstant[i] ))
                    }
                    resolve( casesList );
                } else {
                    reject('error');
                }
            }, 1000);
        });
        return promise;
    }
}

import { Injectable } from "@angular/core";
import { CasesConstant } from "../constants/cases.constant";
import { CaseModel } from "../models/case.model";

@Injectable()
export class CasesService {
    public error = false;
    constructor() {}
    public getCases() {
        const casesList = [];
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (this.error) {
                    reject('error');
                } else {
                    for ( let i = 0; i < CasesConstant.length; i++ ) {
                        casesList.push(new CaseModel( CasesConstant[i] ))
                    }
                    resolve( casesList );
                }
            }, 1000);
        });
        return promise;
    }
}

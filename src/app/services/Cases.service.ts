import { Injectable } from "@angular/core";
import { CasesConstant } from "../constants/cases.constant";
import { Observable, Subject } from "rxjs/index";


@Injectable()
export class CasesService {
    private subject = new Subject<any>();
    constructor() {}
    public getCases(): Observable<any> {
        // console.log(CasesConstant);
        return this.subject
    }
}

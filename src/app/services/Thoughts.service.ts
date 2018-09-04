import { Injectable } from "@angular/core";
import { ThoughtsConstant } from "../constants/thoughts.constant";
import { ThoughtModel } from "../models/thought.model";

@Injectable()
export class ThoughtsService {
    constructor() {}
    public getThoughts() {
        const thoughtsList = [];
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                if ( ThoughtsConstant ) {
                    for ( let i = 0; i < ThoughtsConstant.length; i++ ) {
                        thoughtsList.push(new ThoughtModel( ThoughtsConstant[i] ))
                    }
                    resolve( thoughtsList );
                } else {
                    reject('error');
                }
            }, 1000);
        });
        return promise;
    }
}

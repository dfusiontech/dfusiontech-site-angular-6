import { Injectable } from "@angular/core";
import { ThoughtsConstant } from "../constants/thoughts.constant";
import { ThoughtModel } from "../models/thought.model";

@Injectable()
export class ThoughtsService {
    // in case of problems with getting data transmit message with this content
    public errorResponse = 'Sorry, content is not available at that moment.';
    constructor() {}
    public getThoughts() {
        const thoughtsList = [];
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                if ( ThoughtsConstant ) {
                    for ( let i = 0; i < ThoughtsConstant.length; i++ ) {
                        thoughtsList.push(new ThoughtModel( ThoughtsConstant[i] ));
                        thoughtsList[i].thoughtId = 'thought-' + (i+1);
                    }
                    resolve( thoughtsList );
                } else {
                    reject( this.errorResponse );
                }
            }, 1000);
        });
        return promise;
    }
    public getThoughtByLink(link) {
        const thoughtsList = [];
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (ThoughtsConstant) {
                    for (let i = 0; i < ThoughtsConstant.length; i++) {
                        thoughtsList.push(new ThoughtModel(ThoughtsConstant[i]));
                        thoughtsList[i].thoughtId = 'thought-' + (i + 1);
                    }
                    resolve(thoughtsList.find(thought => thought.thoughtId === link));
                } else {
                    reject( this.errorResponse );
                }
            }, 1000);
        });
        return promise;
    }

}

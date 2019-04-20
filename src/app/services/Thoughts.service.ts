import { Injectable } from '@angular/core';
import { ThoughtsConstant } from '../constants/thoughts.constant';
import { ThoughtModel } from '../models/thought.model';

@Injectable()
export class ThoughtsService {
    // in case of problems with getting data transmit message with this content
    public errorResponse = 'Sorry, content is not available at that moment.';
    constructor() {}
    public getThoughts() {
        const thoughtsList = [];
        for ( let i = 0; i < ThoughtsConstant.length; i++ ) {
            thoughtsList.push(new ThoughtModel( ThoughtsConstant[i] ));
            thoughtsList[i].thoughtId = 'thought-' + (i + 1);
        }
        return thoughtsList
    }
    public getThoughtByLink(link) {
        const thoughtsList = [];
        for (let i = 0; i < ThoughtsConstant.length; i++) {
            // thoughtsList.push(new ThoughtModel(ThoughtsConstant[i]));
            thoughtsList.push(ThoughtsConstant[i]);
            thoughtsList[i].thoughtId = 'thought-' + (i + 1);
        }
        return thoughtsList.find(thought => thought.thoughtId === link);
    }
}

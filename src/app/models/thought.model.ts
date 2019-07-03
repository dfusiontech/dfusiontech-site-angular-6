/**
 * Thought item model
 * preparing data before view
 */
export class ThoughtModel {
    title: string;
    description: string;
    date: string;
    overviewImg: string;
    headingImg: string;
    sections: object;
    constructor ( data ) {
        this.title = data.title || '';
        this.description = data.description || '';
        this.date = data.date || '';
        this.overviewImg = data.overviewImg || '';
        this.headingImg = data.headingImg || '';
        this.sections = data.sections || {};
    }
}

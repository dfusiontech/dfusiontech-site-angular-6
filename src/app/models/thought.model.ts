/**
 * Thought item model
 * preparing data before view
 */
export class ThoughtModel {
    title: string;
    description: string;
    date: string;
    img: string;
    constructor ( data ) {
        this.title = data.title || '';
        this.description = data.description || '';
        this.date = data.date || '';
        this.img = data.img || '';
    }
}

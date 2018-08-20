/**
 * Case item model
 * preparing data before view
 */
export class CaseModel {
    title: string;
    description: string;
    img: string;
    constructor ( data ) {
        this.title = data.title || '';
        this.description = data.description || '';
        this.img = data.img || '';
    }
}

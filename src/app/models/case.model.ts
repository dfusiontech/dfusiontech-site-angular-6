/**
 * Case item model
 * preparing data before view
 */
export class CaseModel {
    title: string;
    description: string;
    img: string;
    contentBackground: string;
    constructor ( data ) {
        this.title = data.title || '';
        this.description = data.description || '';
        this.img = data.img || '';
        // this property will be filled in cases service, need this property to set unique value of bg color of case
        // content on hover
        this.contentBackground = '';
    }
}

/**
 * Case item model
 * preparing data before view
 */
export class CaseModel {
    title: string;
    description: string;
    overviewImg: string;
    headingImg: string;
    firstProjectViewImg: string;
    secondProjectViewImg: string;
    wholeDescription: string;
    challenge: string;
    solution: string;
    projectLink: string;
    technologyStack: any;
    technologyStackPathes: any;
    contentBackground: string;
    permalinkId: string;
    constructor ( data ) {
        this.title = data.title || '';
        this.description = data.description || '';
        this.overviewImg = data.overviewImg || '';
        this.headingImg = data.headingImg || '';
        this.firstProjectViewImg = data.firstProjectViewImg || '';
        this.secondProjectViewImg = data.secondProjectViewImg || '';
        this.wholeDescription = data.wholeDescription || '';
        this.challenge = data.challenge || '';
        this.solution = data.solution || '';
        this.projectLink = data.projectLink || '';
        this.technologyStack = data.technologyStack || [];
        // holder for paths to images of technology, will be filled in service
        this.technologyStackPathes = [];
        // this property will be filled in cases service, need this property to set unique value of bg color of case
        // content on hover
        this.contentBackground = '';
        this.permalinkId = data.permalinkId;
    }
}

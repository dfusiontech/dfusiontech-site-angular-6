/**
 * Case item model
 * preparing data before view
 */
export class CaseModel {
    title: string;
    description: string;
    overviewImg: string;
    headingImg: string;
    headingImgXS: string;
    headingImgSM: string;
    headingImgMD: string;
    headingImgLG: string;
    firstProjectViewImg: string;
    secondProjectViewImg: string;
    wholeDescription: string;
    challenge: string;
    solution: string;
    projectLink: string;
    technologyStack: any;
    technologyStackPaths: any;
    contentBackground: string;
    permalinkId: string;
    constructor ( data ) {
        this.title = data.title || '';
        this.description = data.description || '';
        this.overviewImg = data.overviewImg || '';
        this.headingImg = data.headingImg || '';
        this.headingImgXS = data.headingImgXS || '';
        this.headingImgSM = data.headingImgSM || '';
        this.headingImgMD = data.headingImgMD || '';
        this.headingImgLG = data.headingImgLG || '';
        this.firstProjectViewImg = data.firstProjectViewImg || '';
        this.secondProjectViewImg = data.secondProjectViewImg || '';
        this.wholeDescription = data.wholeDescription || '';
        this.challenge = data.challenge || '';
        this.solution = data.solution || '';
        this.projectLink = data.projectLink || '';
        this.technologyStack = data.technologyStack || [];
        // holder for paths to images of technology, will be filled in service
        this.technologyStackPaths = [];
        // this property will be filled in cases service, need this property to set unique value of bg color of case
        // content on hover
        this.contentBackground = '';
        this.permalinkId = data.permalinkId;
    }
}

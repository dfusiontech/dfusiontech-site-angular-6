import { Injectable } from '@angular/core';
import { CasesConstant } from '../constants/cases.constant';
import { CaseModel } from '../models/case.model';

@Injectable()
export class CasesService {
    constructor() {}
    public getCases() {
        // variable to get prepared collection and cases items with different background color, not ordered
        const casesList = [];
        // variable to order each 5 cases by groups ( two in "single" and three in "group" )
        const casesListGroupsOrdered = [];
        // final version of cases list with prepared metadata for repeating of cases collection corresponding to design
        const casesListOrdered = [];
        // getting cases list without order
        const caseContentData = CasesConstant.map(e => ({ ... e })); // deep copy
        for ( let i = 0; i < caseContentData.length; i++ ) {
            // caseContentData[i].caseId = caseContentData[i].caseId + '-' + ((n) => n + 1)(i);
            casesList.push( new CaseModel( caseContentData[i] ));
            casesList[i].caseId = caseContentData[i].caseId + (i + 1).toString();
        }
        // set random background color which will be used on hover background case content
        for ( let i = 0; i < casesList.length; i++ ) {
            // available variables of background color
            const listBackgroundColors = [ 'turquoise', 'green', 'orange', 'purple', 'red', 'blue' ];
            let randomBackgroundColor;
            if ( i === 0 ) {
                randomBackgroundColor = listBackgroundColors[ Math.floor(Math.random() * listBackgroundColors.length ) ];
                casesList[i].contentBackground = randomBackgroundColor;
            } else {
                // prevent repeating background colors of nearby items
                do {
                    randomBackgroundColor = listBackgroundColors[ Math.floor(Math.random() * listBackgroundColors.length ) ];
                    casesList[i].contentBackground = randomBackgroundColor;
                } while ( casesList[i].contentBackground === casesList[i - 1].contentBackground );
            }
        }
        // variable for creating and filtering new elements of cases list
        let a = 0;
        // create first element
        casesListGroupsOrdered[a] = [];
        for ( let i = 0; i < casesList.length; i++ ) {
            if ( i === 0 && a === 0 ) {
                casesListGroupsOrdered[a].push( casesList[i] );
                // first element of cases list single corresponding to design so we creating next element
                a++;
                casesListGroupsOrdered[a] = [];
            } else if ( a % 2 && ((casesList.length - i) > 0) ) {
                // even elements consist of three cases corresponding to design
                // if amount of cases not enough to form element than it would be single element
                if ( casesListGroupsOrdered[a].length < 3 ) {
                    casesListGroupsOrdered[a].push( casesList[i] );
                } else {
                    // when element filled with three cases we crating next one
                    a++;
                    casesListGroupsOrdered[a] = [];
                    casesListGroupsOrdered[a].push( casesList[i] );
                }
            } else {
                // odd elements consist of two cases corresponding to design
                if ( casesListGroupsOrdered[a].length < 2 ) {
                    casesListGroupsOrdered[a].push( casesList[i] );
                } else {
                    // when element filled with two cases we crating next one
                    a++;
                    casesListGroupsOrdered[a] = [];
                    casesListGroupsOrdered[a].push( casesList[i] );
                }
            }
        }

        //  prepare metadata for repeating of cases collection corresponding to design
        for ( let i = 0, j = 0, k = 0; i < casesListGroupsOrdered.length; i++ ) {
            // we need to separate first case corresponding to design
            if ( i === 0 ) {
                casesListOrdered[i] = {
                    type: 'single',
                    cols: [
                        {
                            order: 'first',
                            colSize: '12',
                            caseModels: [],
                        },
                    ]
                };
                casesListOrdered[i].cols[0].caseModels.push( casesListGroupsOrdered[i] );
            } else if ( i % 2 && i !== 0 && casesListGroupsOrdered[i].length === 3 ) {
                // filling even elements
                casesListOrdered[i] = {
                    type: 'group',
                    cols: [
                        {
                            revers: '',
                            colSize: '12',
                            items: [
                                {
                                    colSize: '8',
                                    caseModels: [],
                                },
                                {
                                    colSize: '4',
                                    caseModels: [],
                                }
                            ]
                        },
                    ]
                };
                // property "revers" changes order of items for every next element
                if ( j % 2 ) {
                    casesListOrdered[i].cols[0].revers = true;
                    j++;
                } else {
                    casesListOrdered[i].cols[0].revers = false;
                    j++;
                }
                // filling element with previously prepared cases
                casesListOrdered[i].cols[0].items[0].caseModels.push(casesListGroupsOrdered[i][0]);
                casesListOrdered[i].cols[0].items[0].caseModels.push(casesListGroupsOrdered[i][1]);
                casesListOrdered[i].cols[0].items[1].caseModels.push(casesListGroupsOrdered[i][2]);
            } else {
                // filling odd elements
                // in this context type = "single" means that cases of this element taking full screen width
                casesListOrdered[i] = {
                    type: 'single',
                    revers: '',
                    cols: [
                        {
                            order: 'odd',
                            colSize: '12',
                            caseModels: [],
                            // if element consist only of one case ( situation when it is last element ) we
                            // need to change repeating behavior of this element on view
                            lastCase: false,
                        },
                    ]
                };
                if ( k % 2 ) {
                    casesListOrdered[i].revers = true;
                    k++;
                } else {
                    casesListOrdered[i].revers = false;
                    k++;
                }
                if ( casesListGroupsOrdered[i].length === 2 ) {
                    casesListOrdered[i].cols[0].caseModels.push(casesListGroupsOrdered[i][0]);
                    casesListOrdered[i].cols[0].caseModels.push(casesListGroupsOrdered[i][1]);
                } else {
                    casesListOrdered[i].cols[0].caseModels.push(casesListGroupsOrdered[i][0]);
                    casesListOrdered[i].cols[0].lastCase = true;
                }
            }
        }
        return casesListOrdered;
    }
    public getCaseByLink( link ) {
        const casesList = [];
        for (let i = 0; i < CasesConstant.length; i++) {
            casesList.push( new CaseModel( CasesConstant[i] ) );
            casesList[i].caseId = 'case-' + (i + 1);
        }
        // forming a list of paths to technology stack images depending on technology stack list
        const technologyStackPath = 'assets/images/pages/case-page/technology-stack/';
        for ( let i = 0; i < casesList.length; i++ ) {
            let technologyStackUnit = '';
            for ( let j = 0; j < casesList[i].technologyStack.length; j++ ) {
                technologyStackUnit = casesList[i].technologyStack[j];
                casesList[i].technologyStackPaths[j] = `${technologyStackPath}${technologyStackUnit}.png`;
            }
        }
        return casesList.find(fcase => fcase.caseId === link);
    }
}

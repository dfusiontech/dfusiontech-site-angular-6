import { Injectable } from "@angular/core";
import { CasesConstant } from "../constants/cases.constant";
import { CaseModel } from "../models/case.model";

@Injectable()
export class CasesService {
    constructor() {}
    public getCases() {
        let casesList = [];
        // prepare metadata for repeating of cases collection corresponding to design
        let orderedCasesList = [
            {
                items: [
                    // this object will be filled only with data of first case item to repeat cases list
                    // corresponding to design
                    {
                        // mark this object because at home page we need only this case of type "single"
                        order: 'first',
                        type: 'single',
                        cols: [
                            {
                                colSize: '12',
                                caseModels: [],
                            }
                        ]
                    },
                    // this object will be filled with next three case items to repeat cases list
                    // corresponding to design
                    {
                        type: 'group',
                        cols: [
                            // will be filled with two case items
                            {
                                colSize: '8',
                                caseModels: [],
                            },
                            // will be filled with one case item
                            {
                                colSize: '4',
                                caseModels: [],
                            },
                        ],
                    },
                    // this object will be filled with remaining case items
                    {
                        type: 'single',
                        cols: [
                            {
                                colSize: '12',
                                caseModels: [],
                            }
                        ]
                    },
                ]
            },
        ];

        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                if ( CasesConstant ) {
                    // getting cases list without order
                    for ( let i = 0; i < CasesConstant.length; i++ ) {
                        casesList.push( new CaseModel( CasesConstant[i] ));
                    }
                    // set random background color which will be used on hover background cse content
                    for ( let i = 0; i < casesList.length; i++ ) {
                        // available variables of background color
                        let listBackgroundColors = [ 'turquoise', 'green', 'orange', 'purple', 'red', 'blue' ];
                        if ( i === 0 ) {
                            let randomBackgroundColor = listBackgroundColors[ Math.floor(Math.random() * listBackgroundColors.length ) ];
                            casesList[i].contentBackground = randomBackgroundColor;
                        } else {
                            // prevent repeating background colors of nearby items
                            do {
                                let randomBackgroundColor = listBackgroundColors[ Math.floor(Math.random() * listBackgroundColors.length ) ];
                                casesList[i].contentBackground = randomBackgroundColor;
                            } while ( casesList[i].contentBackground === casesList[i-1].contentBackground )
                        }
                    }
                    // making cases list ordered
                    for ( let i = 0; i < casesList.length; i++ ) {
                        if ( i === 0 ) {
                            orderedCasesList[0].items[0].cols[0].caseModels.push( casesList[i] );
                        } else if ( i === 1 ) {
                            orderedCasesList[0].items[1].cols[0].caseModels.push( casesList[i] );
                        } else if ( i === 2 ) {
                            orderedCasesList[0].items[1].cols[0].caseModels.push( casesList[i] )
                        } else if ( i === 3 ) {
                            orderedCasesList[0].items[1].cols[1].caseModels.push( casesList[i] );
                        } else {
                            orderedCasesList[0].items[2].cols[0].caseModels.push( casesList[i] );
                        }
                    }
                    resolve( orderedCasesList );
                } else {
                    reject('error');
                }
            }, 1000);
        });
        return promise;
    }
}

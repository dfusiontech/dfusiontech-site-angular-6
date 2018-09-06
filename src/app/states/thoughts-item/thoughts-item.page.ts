// outsource
import { Component, OnInit, Input } from "@angular/core";
import { StateService } from "@uirouter/angular";
import { ThoughtsService } from "../../services/Thoughts.service";

@Component({
    selector: '[id="thoughtsItem"]',
    templateUrl: './thoughts-item.html'
})
export class ThoughtsItemPage implements OnInit {
    @Input() thoughtId;

    // initially data is loading
    public thoughtItemLoaded = false;

    public errorResponse;
    // initially we don't know if error has been occurred with getting data
    public errorOccurred = false;

    public thought;

    /**
     * constructor holder to define what exactly past in public vm object
     *
     *
     */
    constructor ( private state: StateService, private thoughtsService: ThoughtsService ) {

    };

    ngOnInit() {
        // this.thought = this.thoughtsService.getThoughtByLink(this.thoughtId);
        this.thoughtsService
            .getThoughtByLink(this.thoughtId)
            .then(data => {
                this.thought = data;
                this.thoughtItemLoaded = true;
            })
            .catch(error => {
                this.errorResponse = error;
                this.errorOccurred = true;
            });
    };


}

// outsource
import { Component, HostListener, OnInit, Input } from '@angular/core';
import { StateService } from '@uirouter/angular';
// local dependencies
import { ThoughtsService } from '../../services/Thoughts.service';
import { SEOService } from '../../services/Seo.service';

@Component({
    selector: '[id="thoughts-item"]',
    templateUrl: './thoughts-item.html'
})
export class ThoughtsItemPageComponent implements OnInit {
    @Input() thoughtId;


    public thought;
    // initially data is loading
    public thoughtItemLoaded = false;
    // will contain potential error
    public errorResponse;
    // initially we don't know if error has been occurred with getting data
    public errorOccurred = false;
    // media points for switching image sizes
    public currentPoint;
    public smPoint = 480;
    public mdPoint = 773;
    public lgPoint = 1028;
    public xlPoint = 1400;

    private metaTags = [
        {
            title: 'Thoughts page. dFusiontech inc.'
        },
        {
            name: 'description',
            content: 'THOUGHTS PAGE OF THE SITE, DFT IS OUR PRIDE'
        }
    ];

    /**
     * constructor holder to define what exactly past in public vm object
     *
     */
    constructor (
        private state: StateService,
        private thoughtsService: ThoughtsService,
        private seoService: SEOService) {}

    ngOnInit() {
        this.seoService.updateMetaTags(this.metaTags);
        this.thought = this.thoughtsService.getThoughtByLink(this.thoughtId);
        this.metaTags.push({title: this.thought.title + '. dFusiontech inc.'});
        this.metaTags.push({name: 'description', content: this.thought.description});
        this.seoService.updateMetaTags(this.metaTags);

        // changing current point order on extra large desktop
        if ( window.innerWidth <= this.xlPoint ) {
            this.currentPoint = 'xl';
        }
        // changing current point order on large desktop
        if ( window.innerWidth <= this.lgPoint ) {
            this.currentPoint = 'lg';
        }
        // changing current point order on medium desktop
        if ( window.innerWidth <= this.mdPoint ) {
            this.currentPoint = 'md';
        }
        // changing current point order on mobile
        if ( window.innerWidth <= this.smPoint ) {
            this.currentPoint = 'sm';
        }
    }

    @HostListener('window:resize') onResize() {
        // changing current point order on extra large desktop
        if ( window.innerWidth <= this.xlPoint ) {
            this.currentPoint = 'xl';
        }
        // changing current point order on large desktop
        if ( window.innerWidth <= this.lgPoint ) {
            this.currentPoint = 'lg';
        }
        // changing current point order on medium desktop
        if ( window.innerWidth <= this.mdPoint ) {
            this.currentPoint = 'md';
        }
        // changing current point order on mobile
        if ( window.innerWidth <= this.smPoint ) {
            this.currentPoint = 'sm';
        }
    }
}

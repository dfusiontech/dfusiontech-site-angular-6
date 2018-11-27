// outsource
import { Injectable } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';

// local dependencies


@Injectable({
    providedIn: 'root'
})
export class SEOService {
    private defaultValues = [
        {
            title: 'dFusiontech inc.'
        },
        {
            name: 'description',
            content: '"dFusiontech inc." is your better choice in nowadays IT community. We have strong ' +
            'experience in the development of all kinds of applications and web projects.'
        },
        // Schema.org markup for Google+
        {
            itemprop: 'name',
            content: 'dFusiontech inc.'
        },
        {
            itemprop: 'description',
            content: '"dFusiontech inc." is your better choice in nowadays IT community. We have strong ' +
            'experience in the development of all kinds of applications and web projects.'
        },
        // Twitter Card data
        {
            name: 'twitter:card',
            content: 'summary' // The card type, which will be one of “summary”, “summary_large_image”, “app”, or “player”.
        },
        {
            name: 'twitter:site',
            content: '@dfusiontechinc' // @username for the website used in the card footer.
        },
        {
            name: 'twitter:title',
            content: 'dFusiontech inc.'
        },
        {
            name: 'twitter:description',
            content: '"dFusiontech inc." is your better choice in nowadays IT community. We have strong ' +
            'experience in the development of all kinds of applications and web projects.'
        },
        {
            name: 'twitter:creator',
            content: '@dfusiontechinc' // @username for the content creator / author.
        },
        // Twitter summary card with large image must be at least 280x150px
        {
            name: 'twitter:image:src',
            content: 'https://images.pexels.com/photos/908284/pexels-photo-908284.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
        },
        // Open Graph data
        {
            property: 'og:title',
            content: 'dFusiontech inc.'
        },
        {
            property: 'og:description',
            content: '"dFusiontech inc." is your better choice in nowadays IT community. We have strong ' +
            'experience in the development of all kinds of applications and web projects.'
        },
        {
            property: 'og:type',
            content: 'website'
        },
        {
            property: 'og:url',
            content: 'http://dfusiontech.com/'
        },
        {
            property: 'og:image',
            content: 'http://dfusiontech.com/assets/images/slider-image.jpg'
        },
        {
            property: 'og:site_name',
            content: 'dFusiontech'
        },
        {
            property: 'article:published_time',
            content: '2018-11-27T10:49:17+02:00'
        },
        {
            property: 'article:modified_time',
            content: '2018-11-27T10:50:00+02:00'
        },
        {
            property: 'article:section',
            content: 'welcome to dFusiontech'
        },
        {
            property: 'article:tag',
            content: 'dft dFusion dFusiontech technologies IT development'
        }
    ];


    constructor( private meta: Meta, private title: Title ) {
        // this.resetTags();
    }

    _removeTag(tag: MetaDefinition) {
        this.meta.removeTag(
            tag.name ? 'name=\'' + tag.name + '\''
                : tag.itemprop ? 'itemprop=\'' + tag.itemprop + '\''
                    : tag.property ? 'property=\'' + tag.property + '\''
                        : tag.id ? 'id=\'' + tag.id + '\''
                            : tag.class ? 'class=\'' + tag.class + '\''
                                : null);
    }

    _addTag(tag: MetaDefinition) {
        if (tag.title) {
            this.title.setTitle(tag.title);
            return;
        }
        this._removeTag(tag);
        if (tag.content === '') {
            return;
        }
        this.meta.addTag(tag);
    }

    _addTags(tagsArray: MetaDefinition[]) {
        for (const tag of tagsArray) {
            this._addTag(tag);
        }
    }
    /**
     * Setting up default meta tags which are the same for all pages;
     * NOTICE: on concrete pages some of them can be overwritten by method updateMetaTags([tags]);
     */
    _resetTags() {
        this._addTags(this.defaultValues);
    }
    /**
     * Overwrites default meta tags passed as [tagsArray];
     */
    updateMetaTags(tagsArray: MetaDefinition[]) {
        this._resetTags();
        this._addTags(tagsArray);
    }
}

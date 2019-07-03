/**
 * Cases section data
 *
 * @NOTE For each technology in technologyStack you must define the link for technology image in technologyStackPathes
 *      by the same index
 */
export const CasesConstant = [
    {
        title: 'Unreel.me',
        'caseId': 'case-',
        description: 'Unreel is a video streaming service that aims at reaching fans everywhere they watch! With a ' +
            'lineup of customized apps for each of the brands, Unreel’s OTT offerings put the user in control of ' +
            'his video publishing journey.',
        overviewImg: [
            'assets/images/pages/case-page/unreel-me/unreel-me2_bmjswj_c_scale,w_480.jpg 480w',
            'assets/images/pages/case-page/unreel-me/unreel-me2_bmjswj_c_scale,w_608.jpg 608w',
            'assets/images/pages/case-page/unreel-me/unreel-me2_bmjswj_c_scale,w_738.jpg 738w',
            'assets/images/pages/case-page/unreel-me/unreel-me2_bmjswj_c_scale,w_765.jpg 765w'
        ],
        headingImg: [
            'assets/images/pages/case-page/unreel-me/heading3_ukx6fr_c_scale,w_480.jpg 480w',
            'assets/images/pages/case-page/unreel-me/heading3_ukx6fr_c_scale,w_874.jpg 874w',
            'assets/images/pages/case-page/unreel-me/heading3_ukx6fr_c_scale,w_1169.jpg 1169w',
            'assets/images/pages/case-page/unreel-me/heading3_ukx6fr_c_scale,w_1400.jpg 1400w'
        ],
        firstProjectViewImg: [
            'assets/images/pages/case-page/unreel-me/about-unreel-me_jnrkec_c_scale,w_480.jpg 480w',
            'assets/images/pages/case-page/unreel-me/about-unreel-me_jnrkec_c_scale,w_859.jpg 859w',
            'assets/images/pages/case-page/unreel-me/about-unreel-me_jnrkec_c_scale,w_1148.jpg 1148w',
            'assets/images/pages/case-page/unreel-me/about-unreel-me_jnrkec_c_scale,w_1400.jpg 1400w'
        ],
        secondProjectViewImg: [
            'assets/images/pages/case-page/unreel-me/product-unreel-me_xeaulk_c_scale,w_480.jpg 480w',
            'assets/images/pages/case-page/unreel-me/product-unreel-me_xeaulk_c_scale,w_876.jpg 876w',
            'assets/images/pages/case-page/unreel-me/product-unreel-me_xeaulk_c_scale,w_1174.jpg 1174w',
            'assets/images/pages/case-page/unreel-me/product-unreel-me_xeaulk_c_scale,w_1400.jpg 1400w'
        ],
        wholeDescription: 'This project is a combination of back-end and front-end applications integrated with a ' +
            'couple of 3rd party media content providers. On the one hand, the main purpose of the system is to build ' +
            'next-generation tool for content owners to distribute and monetize their media. On the other hand, the ' +
            'system shall offer convenient and flexible tool for media consumers. Therefore, the overall goal of the ' +
            'system is to become a sweet home for content creators and a playground for fans!',
        challenge: [
            {
                type: 'p',
                text: 'Our team started with just one back-end developer who became a part of international development ' +
                    'team.\nEarlier, the back-end application could only find YouTube videos by YouTube’s channel ID using a ' +
                    'single thread at that time. Our main goal was to significantly extend the back-end functionality and provide ' +
                    'a scalable multi-thread and multi-node application configuration.\nLater on, the team grew on our side and ' +
                    'some more developers joined the rest; we also had our own DevOps engineer. The scope of work broadened and ' +
                    'we started to get tasks on the new media content generation and automation of the applications lifecycle.\nAt ' +
                    'that moment, our team was also working on development of the predictive engine, integration with the 3rd ' +
                    'party systems and media content analysis.'
            },
            {
                type: 'p',
                text: 'The client-side is a single-page application that uses ' +
                    'AngularJS, open source web application framework maintained by Google. In addition, it is a very ' +
                    'powerful tool for creating single-page web applications. We’ve implemented a proper authentication and ' +
                    'authorization strategy, so that sensitive data can be accessed via server-side API.'
            },
            {
                type: 'ul',
                text: 'The server-side app is a multi-purpose application that is used to:',
                items: [
                    'fill the project\'s knowledge base with the media content from all over the web (YouTube, Facebook, ' +
                    'Reddit, Vimeo, various MRSS feeds, etc.);',
                    'prepare new media content automatically or on a user’s request (highlight reels, gifs, memes, etc.);',
                    'analyze video-related threads and extract relevant insights e.g. that people had reacted to within their effort;',
                    'predict user\'s behavior based on historical data and pick the most appropriate content to build ' +
                    'automatic playlists, aggregate content;',
                    'etc.'
                ]
            }
        ],
        solution: [
            {
                type: 'p',
                text: 'At first, we used MongoDB as the main data storage. Then, we used a set of distributed back-end ' +
                    'applications in the cloud. Some of them are powered by Java, others by Node.js, Scala, etc. For a messaging ' +
                    'system between the components we used RabbitMQ. On the front-end, there is a web application built with ' +
                    'AndularJS, Node.js, Bootstrap, and a set of mobile applications for most popular platforms.'
            }
        ],
        projectLink: 'https://www.unreel.me',
        technologyStack: [
            'Java',
            'spring',
            'swagger',
            'jUnit',
            'jraw',
            'Mockito',
            'node-js',
            'mongoose',
            'express',
            'FFmpeg',
            'angular-js',
            'angular-ui-router',
            'bootstrap',
            'rabbitmq',
            'predictionIO',
            'algolia',
            'AWS',
            'api-google',
            'restfb',
        ],
        technologyStackPaths: []
    },
    {
        title: 'Bottles Waiting',
        'caseId': 'case-',
        description: 'BottlesWaiting is an app for your best experience with nightclubs and day clubs. See which ' +
            'event or club you want to go to, view clubs’ layouts and pick the table you like.',
        overviewImg: [
            'assets/images/pages/case-page/bottles-waiting/bottles-waiting_f5fm8j_c_scale,w_480.jpg 480w',
            'assets/images/pages/case-page/bottles-waiting/bottles-waiting_f5fm8j_c_scale,w_612.jpg 612w',
            'assets/images/pages/case-page/bottles-waiting/bottles-waiting_f5fm8j_c_scale,w_737.jpg 737w',
            'assets/images/pages/case-page/bottles-waiting/bottles-waiting_f5fm8j_c_scale,w_765.jpg 765w'
        ],
        headingImg: [
            'assets/images/pages/case-page/bottles-waiting/heading_cn0fua_c_scale,w_480.jpg 480w',
            'assets/images/pages/case-page/bottles-waiting/heading_cn0fua_c_scale,w_865.jpg 865w',
            'assets/images/pages/case-page/bottles-waiting/heading_cn0fua_c_scale,w_1149.jpg 1149w',
            'assets/images/pages/case-page/bottles-waiting/heading_cn0fua_c_scale,w_1400.jpg 1400w'
        ],
        firstProjectViewImg: [
            'assets/images/pages/case-page/bottles-waiting/nightlife_khnlhm_c_scale,w_480.jpg 480w',
            'assets/images/pages/case-page/bottles-waiting/nightlife_khnlhm_c_scale,w_862.jpg 862w',
            'assets/images/pages/case-page/bottles-waiting/nightlife_khnlhm_c_scale,w_1157.jpg 1157w',
            'assets/images/pages/case-page/bottles-waiting/nightlife_khnlhm_c_scale,w_1400.jpg 1400w'
        ],
        secondProjectViewImg: [
            'assets/images/pages/case-page/bottles-waiting/DJ-version_zqm4bz_c_scale,w_480.jpg 480w',
            'assets/images/pages/case-page/bottles-waiting/DJ-version_zqm4bz_c_scale,w_855.jpg 855w',
            'assets/images/pages/case-page/bottles-waiting/DJ-version_zqm4bz_c_scale,w_1146.jpg 1146w',
            'assets/images/pages/case-page/bottles-waiting/DJ-version_zqm4bz_c_scale,w_1400.jpg 1400w'
        ],
        wholeDescription: 'This project is a combination of back-end and front-end applications managing different ' +
            'parts of the ecosystem. Bottles Waiting is an innovative Software as a Service (SaaS) company in the booming ' +
            'nightlife industry. It helps day clubs and nightclubs operate more effectively and tap into new revenue ' +
            'streams through unique table and bottle management software. From event creation to event data, Bottles ' +
            'Waiting is set to be the most useful software for clubs.',
        challenge: [
            {
                type: 'p',
                text: 'dFusion worked on functional fixing, support, and extension of BottlesWaiting application. Our ' +
                    'main goal was to create a set of web applications with user-friendly interface for doormen, DJs, and party ' +
                    'goers.'
            },
            {
                type: 'ul',
                text: 'We had to make existing applications more convenient and add a couple of more features such as:',
                items: [
                    'ordering bottles, mixers, presentations from phone for all customers;',
                    'viewing DJs’ profiles and listening to their tracks at Soundcloud;',
                    'browsing events without logging in;',
                    'viewing all the charges before committing (including taxes, tip, etc.);'
                ]
            },
            {
                type: 'ul',
                text: 'For this purposes, we needed to implement back-end functionality which allows to use scalable ' +
                    'multi-thread and multi-node application configuration.Also, we required to integrate the app with ' +
                    'third-party systems and media content analytics to enable:',
                items: [
                    'email alerts;',
                    'payment system;',
                    'third-party authentication;'
                ]
            },
            {
                type: 'p',
                text: 'The client-side part is a single-page application that uses AngularJS. ' +
                    'We decided to use Angular JS because at the project start it was a relevant web application framework ' +
                    'maintained by Google.\nFurthermore, it is a very powerful tool for creating single-page web applications ​in ' +
                    'addition to Apple’s Cocoa Touch for iOS used for building software applications.\n​We’ve implemented a proper ' +
                    'authentication and authorization strategy, so that any sensitive data can be accessed via server-side API. ' +
                    'Also, the project supports social login as requested by the customer.'
            },
        ],
        solution: [
            {
                type: 'p',
                text: 'For our purposes we used DynamoDB data storage because it’s fast, fully managed NoSQL database ' +
                    'service that makes it simple and cost-effective to store and retrieve any amount of data. Additionally, it ' +
                    'helps serve any level of request traffic. Then we use a set of distributed back-end applications such as ' +
                    'Spring which includes several modules that provide a range of services powered with Java. On the front-end, ' +
                    'there is a web application built with Angular.js, Bootstrap and Cocoa Touch for OS X and iOS.'
            }
        ],
        projectLink: 'https://www.bottleswaiting.com/#!',
        technologyStack: [
            'angular-js',
            'angular-ui-router',
            'bootstrap'
        ],
        technologyStackPaths: []
    },
    {
        title: 'Lincoln Center',
        'caseId': 'case-',
        description: 'Lincoln Center is a platform to collect, store, aggregate, and share videos. The engine allows ' +
            'users to create their own TV channel out of YouTube videos and broadcast live from mobile phone.',
        overviewImg: [
            'assets/images/pages/case-page/lincoln-center/lincoln-center_jjziuo_c_scale,w_480.jpg 480w',
            'assets/images/pages/case-page/lincoln-center/lincoln-center_jjziuo_c_scale,w_604.jpg 604w',
            'assets/images/pages/case-page/lincoln-center/lincoln-center_jjziuo_c_scale,w_735.jpg 735w',
            'assets/images/pages/case-page/lincoln-center/lincoln-center_jjziuo_c_scale,w_765.jpg 765w'
        ],
        headingImg: [
            'assets/images/pages/case-page/lincoln-center/heading3_uwxzcc_c_scale,w_480.jpg 480w',
            'assets/images/pages/case-page/lincoln-center/heading3_uwxzcc_c_scale,w_871.jpg 871w',
            'assets/images/pages/case-page/lincoln-center/heading3_uwxzcc_c_scale,w_1169.jpg 1169w',
            'assets/images/pages/case-page/lincoln-center/heading3_uwxzcc_c_scale,w_1400.jpg 1400w'
        ],
        firstProjectViewImg: [
            'assets/images/pages/case-page/lincoln-center/score-lincoln-center_rbbjpi_c_scale,w_480.jpg 480w',
            'assets/images/pages/case-page/lincoln-center/score-lincoln-center_rbbjpi_c_scale,w_859.jpg 859w',
            'assets/images/pages/case-page/lincoln-center/score-lincoln-center_rbbjpi_c_scale,w_1160.jpg 1160w',
            'assets/images/pages/case-page/lincoln-center/score-lincoln-center_rbbjpi_c_scale,w_1400.jpg 1400w'
        ],
        secondProjectViewImg: [
            'assets/images/pages/case-page/lincoln-center/video-lincoln-center_jgktma_c_scale,w_480.jpg 480w',
            'assets/images/pages/case-page/lincoln-center/video-lincoln-center_jgktma_c_scale,w_865.jpg 865w',
            'assets/images/pages/case-page/lincoln-center/video-lincoln-center_jgktma_c_scale,w_1159.jpg 1159w',
            'assets/images/pages/case-page/lincoln-center/video-lincoln-center_jgktma_c_scale,w_1400.jpg 1400w'
        ],
        wholeDescription: 'The Lincoln Center offers event tickets for sale and monitors forthcoming music, dance, and ' +
            'theater performances which take place at the Metropolitan Opera, the Lincoln Center Theater, the New York ' +
            'Philharmonic, and the New York City Ballet.',
        challenge: [
            {
                type: 'p',
                text: 'Our team worked on support, improvement, and functional extension of Lincoln Center application.'
            },
            {
                type: 'ul',
                text: '​Our main challenge was to create a back office responsible for performing all business functions related to ' +
                    'its operations such as:',
                items: [
                    'maintaining the databases of all institutions that are a part of Lincoln Center;',
                    'handling the company finances;'
                ]
            },
            {
                type: 'p',
                text: 'The client-side part is a single-page application that uses Backbone.js ' +
                    'because at project initiation it was a relevant web application framework which provides minimal set of ' +
                    'data-structuring. Moreover, it offers UI primitives that are useful when building web applications with ' +
                    'JavaScript. \nWe’ve implemented a proper authentication and authorization strategy, so that any sensitive ' +
                    'data can be accessed via server-side API. Also, the project supports social login as requested by customer.'
            },
            {
                type: 'ul',
                text: 'The server-side app is a multi-purpose application that is used to:',
                items: [
                    'fill the project\'s knowledge base with media content from the Cloud;',
                    'prepare new media content automatically or on a user’s request;'
                ]
            }
        ],
        solution: [
            {
                type: 'p',
                text: 'For our purposes, we used MongoDB data storage. To create database-driven application and API in ' +
                    'Node.js we used KeystoneJS which is built on Express and MongoDB. On the front-end, there is a web ' +
                    'application built with Backbone.js, Bootstrap.'
            }
        ],
        projectLink: 'http://www.lincolncenter.org/',
        technologyStack: [
            'mongoose',
            'express',
            // '​Keystone',
            // '​StrongLoop',
            'AWS',
            'api-google',
            'swagger',
            'backbone',
            'bootstrap',
        ],
        technologyStackPaths: []
    },
    {
        title: 'Skillz',
        'caseId': 'case-',
        description: 'Skillz is a leading mobile eSports platform connecting the world’s 2.6 billion mobile gamers and ' +
        'making eSports accessible for everyone.',
        overviewImg: [
            'assets/images/pages/case-page/skillz/skillz_vazn81_c_scale,w_480.jpg 480w',
            'assets/images/pages/case-page/skillz/skillz_vazn81_c_scale,w_623.jpg 623w',
            'assets/images/pages/case-page/skillz/skillz_vazn81_c_scale,w_744.jpg 744w',
            'assets/images/pages/case-page/skillz/skillz_vazn81_c_scale,w_765.jpg 765w'
        ],
        headingImg: [
            'assets/images/pages/case-page/skillz/heading_jchwxg_c_scale,w_480.jpg 480w',
            'assets/images/pages/case-page/skillz/heading_jchwxg_c_scale,w_914.jpg 914w',
            'assets/images/pages/case-page/skillz/heading_jchwxg_c_scale,w_1212.jpg 1212w',
            'assets/images/pages/case-page/skillz/heading_jchwxg_c_scale,w_1400.jpg 1400w'
        ],
        firstProjectViewImg: [
            'assets/images/pages/case-page/skillz/about-skillz_eufqd7_c_scale,w_480.jpg 480w',
            'assets/images/pages/case-page/skillz/about-skillz_eufqd7_c_scale,w_863.jpg 863w',
            'assets/images/pages/case-page/skillz/about-skillz_eufqd7_c_scale,w_1148.jpg 1148w',
            'assets/images/pages/case-page/skillz/about-skillz_eufqd7_c_scale,w_1400.jpg 1400w'
        ],
        secondProjectViewImg: [
            'assets/images/pages/case-page/skillz/products-skillz_brx1iu_c_scale,w_480.jpg 480w',
            'assets/images/pages/case-page/skillz/products-skillz_brx1iu_c_scale,w_854.jpg 854w',
            'assets/images/pages/case-page/skillz/products-skillz_brx1iu_c_scale,w_1149.jpg 1149w',
            'assets/images/pages/case-page/skillz/products-skillz_brx1iu_c_scale,w_1400.jpg 1400w'
        ],
        wholeDescription: 'This project is a synthesis of live streaming mobile games and  a competition platform ' +
            'that’s fueled by different technologies. The main purpose of the system is to enable users to host streaming ' +
            'video game tournaments and interact with other fans of live sporting events. Skillz, the leading mobile ' +
            'eSports platform, allows to compete 2.6 billion mobile gamers from all around the globe online. Over 12 ' +
            'million gamers use the platform to showcase their mobile gaming skills across 3,000+ game studios.',
        challenge: [
            {
                type: 'p',
                text: 'Our team had to start with just one mobile developer who became a part of international ' +
                    'cross-border development team. By then, Skillz has already implemented mobile framework with Objective-C ' +
                    'and Swift languages which are native for iOS. Later on, the team grew on our side and some Android developers ' +
                    'came on board. There was an idea to support another large mobile platform such as Android and create a ' +
                    'multi-platform solution.'
            },
            {
                type: 'p',
                text: 'Our main goal was to significantly extend and improve the functionality of the ' +
                    'mobile platform using React Native solution developed by Facebook. This approach allows to speed up ' +
                    'development and switch to other popular mobile platforms if necessary providing a multi-platform support.'
            }
        ],
        solution: [
            {
                type: 'ul',
                text: 'The decision was to use React Native which applies the React architecture to native iOS, Android, ' +
                    'and UWP applications. The benefits of the approach are the following:',
                items: [
                    'building native mobile apps using JavaScript and React, a React Native app is a real mobile app;',
                    'using native code when it needed;'
                ]
            },
            {
                type: 'p',
                text: 'User interface is mostly done on React Native which allows to easily use the same code between supported ' +
                    'mobile platforms. Beyond that, some inner subsystems of the project are still implemented with native ' +
                    'languages and frameworks for the platforms.'
            }
        ],
        projectLink: 'https://corp.skillz.com',
        technologyStack: [
            'objective-c',
            'swift',
            'java-android',
            'react'
        ],
        technologyStackPaths: []
    },
    {
        title: 'Almentor',
        'caseId': 'case-',
        description: 'This project is a cutting-edge online video marketplace for e-learning and professional business ' +
            'development throughout the Middle East and Africa.',
        overviewImg: [
            'assets/images/pages/case-page/almentor/almentor_b6zswt_c_scale,w_480.jpg 480w',
            'assets/images/pages/case-page/almentor/almentor_b6zswt_c_scale,w_622.jpg 622w',
            'assets/images/pages/case-page/almentor/almentor_b6zswt_c_scale,w_738.jpg 738w',
            'assets/images/pages/case-page/almentor/almentor_b6zswt_c_scale,w_765.jpg 765w'
        ],
        headingImg: [
            'assets/images/pages/case-page/almentor/heading_a3oa8u_c_scale,w_480.jpg 480w',
            'assets/images/pages/case-page/almentor/heading_a3oa8u_c_scale,w_934.jpg 934w',
            'assets/images/pages/case-page/almentor/heading_a3oa8u_c_scale,w_1227.jpg 1227w',
            'assets/images/pages/case-page/almentor/heading_a3oa8u_c_scale,w_1400.jpg 1400w'
        ],
        firstProjectViewImg: [
            'assets/images/pages/case-page/almentor/courses-en-version_o12ayn_c_scale,w_480.jpg 480w',
            'assets/images/pages/case-page/almentor/courses-en-version_o12ayn_c_scale,w_855.jpg 855w',
            'assets/images/pages/case-page/almentor/courses-en-version_o12ayn_c_scale,w_1161.jpg 1161w',
            'assets/images/pages/case-page/almentor/courses-en-version_o12ayn_c_scale,w_1400.jpg 1400w'
        ],
        secondProjectViewImg: [
            'assets/images/pages/case-page/almentor/courses-arabic-version_rkjwws_c_scale,w_480.jpg 480w',
            'assets/images/pages/case-page/almentor/courses-arabic-version_rkjwws_c_scale,w_854.jpg 854w',
            'assets/images/pages/case-page/almentor/courses-arabic-version_rkjwws_c_scale,w_1160.jpg 1160w',
            'assets/images/pages/case-page/almentor/courses-arabic-version_rkjwws_c_scale,w_1400.jpg 1400w'
        ],
        wholeDescription: 'Almentor.net offers video courses and top-rated training programs of expert-generated ' +
            'content and guided curriculum in Arabic and English.',
        challenge: [
            {
                type: 'ul',
                text: 'Our team’s main goal was to offer multi-language web application compatible with majority of ' +
                    'browsers to provide user-friendly interface for different users:',
                items: [
                    'project administrators;',
                    'mentors;',
                    'end customers (online learners);'
                ]
            },
            {
                type: 'ul',
                text: 'Therefore, we needed to implement back-end functionality which allows using ' +
                    'scalable multi-thread and multi-node application configuration. Also, there was a necessity to enable ' +
                    'integration with third-party systems and media content analytics:',
                items: [
                    'email alerts;',
                    'payment system;',
                    'third-party authentication;'
                ]
            }
        ],
        solution: [
            {
                type: 'p',
                text: 'We used MySQL as the main data storage. Then, we used a set of distributed back-end applications ' +
                    'powered by Java. On the front-end side, there is a web application built with AngularJS, Bootstrap, and a ' +
                    'set of mobile applications for most popular platforms.'
            }
        ],
        projectLink: 'https://www.almentor.net/en/home',
        technologyStack: [
            'elastic-search',
            'predictionIO',
            'Java',
            'spring',
            'AWS',
            'api-google',
            'mail-jet',
            'jraw',
            'swagger',
            'jUnit',
            'angular-js',
            'angular-ui-router',
            'bootstrap',
        ],
        technologyStackPaths: []
    },
    {
        title: 'FlaskData',
        'caseId': 'case-',
        description: 'The FlaskData.io is patient compliance automation platform for clinical data management and ' +
            'automated monitoring.',
        overviewImg: [
            'assets/images/pages/case-page/flaskdata/flaskdata_fpgiig_c_scale,w_480.jpg 480w',
            'assets/images/pages/case-page/flaskdata/flaskdata_fpgiig_c_scale,w_604.jpg 604w',
            'assets/images/pages/case-page/flaskdata/flaskdata_fpgiig_c_scale,w_733.jpg 733w',
            'assets/images/pages/case-page/flaskdata/flaskdata_fpgiig_c_scale,w_765.jpg 765w'
        ],
        headingImg: [
            'assets/images/pages/case-page/flaskdata/heading_okpsqw_c_scale,w_480.jpg 480w',
            'assets/images/pages/case-page/flaskdata/heading_okpsqw_c_scale,w_872.jpg 872w',
            'assets/images/pages/case-page/flaskdata/heading_okpsqw_c_scale,w_1172.jpg 1172w',
            'assets/images/pages/case-page/flaskdata/heading_okpsqw_c_scale,w_1400.jpg 1400w'
        ],
        firstProjectViewImg: [
            'assets/images/pages/case-page/flaskdata/about-flask_nopgqm_c_scale,w_480.jpg 480w',
            'assets/images/pages/case-page/flaskdata/about-flask_nopgqm_c_scale,w_855.jpg 855w',
            'assets/images/pages/case-page/flaskdata/about-flask_nopgqm_c_scale,w_1148.jpg 1148w',
            'assets/images/pages/case-page/flaskdata/about-flask_nopgqm_c_scale,w_1400.jpg 1400w'
        ],
        secondProjectViewImg: [
            'assets/images/pages/case-page/flaskdata/products-flask_izhqu9_c_scale,w_480.jpg 480w',
            'assets/images/pages/case-page/flaskdata/products-flask_izhqu9_c_scale,w_865.jpg 865w',
            'assets/images/pages/case-page/flaskdata/products-flask_izhqu9_c_scale,w_1165.jpg 1165w',
            'assets/images/pages/case-page/flaskdata/products-flask_izhqu9_c_scale,w_1400.jpg 1400w'
        ],
        wholeDescription: 'This project is a part of an open-source software for clinical research and consists of ' +
            'back-end and front-end applications.\nOur client’s patient compliance automation platform is a comprehensive ' +
            'solution for clinical data management and automated monitoring. \nThe platform includes Cloud EDC, ' +
            'eSource/eSource, study portfolio management, and cloud-based remote risk-based monitoring of patient and ' +
            'doctor compliance. \nFlaskData.io cloud services are HIPAA and 21 CFR Part 11-compliant and enable healthcare ' +
            'companies to reduce monitoring costs and accelerate their time to statistical report.\n',
        challenge: [
            {
                type: 'p',
                text: 'Our team works on support and functional extension of Flask application. Our  main challenge was to ' +
                    'build a suite of applications that are convenient, safe, and reliable.'
            },
            {
                type: 'ul',
                text: 'The list of integrated applications:',
                items: [
                    'Flask IdP;',
                    'Flask API;',
                    'Flask Forms;',
                    'Flask Forms Viewer;',
                    'Flask Mobile ( in progress );'
                ]
            }
        ],
        solution: [
            {
                type: 'p',
                text: 'We used PostgreSQL as the main data storage. Additionally, we used a set of distributed back-end ' +
                    'applications powered by Node js. \nOn the front-end, there is a web application built with AngularJS, ' +
                    'Bootstrap, Material, and a set of mobile applications for most popular platforms.'
            }
        ],
        projectLink: 'https://www.flaskdata.io/',
        technologyStack: [
            'cake-php',
            // 'jwt-authorization',
            'node-js',
            'mongoose',
            'express',
            'jwt',
            'AWS',
            'api-google',
            'swagger'
        ],
        technologyStackPaths: []
    },
    // {
    //     title: 'HATOLOGY',
    //     'caseId': 'case-',
    //     overviewImg: 'http://placehold.it/870x376',
    //     description: 'Non velit irure qui elit ex nulla incididunt ullamco non. Nostrud ipsum laborum dolor ' +
    //     'adipisicing ut aute minim. Tempor non sint exercitation proident excepteur exercitation nulla exercitation' +
    //     ' ipsum veniam ad. Aliqua proident et occaecat occaecat tempor nisi ex fugiat velit consectetur.'
    // },
    // {
    //     'title': 'INVENTURE',
    //     'caseId': 'case-',
    //     'overviewImg': 'http://placehold.it/870x376',
    //     'description': 'Non velit irure qui elit ex nulla incididunt ullamco non. Nostrud ipsum laborum dolor ' +
    //     'adipisicing ut aute minim. Tempor non sint exercitation proident excepteur exercitation nulla exercitation ' +
    //     'ipsum veniam ad. Aliqua proident et occaecat occaecat tempor nisi ex fugiat velit consectetur.'
    // },
    // {
    //     title: 'GLUKGLUK',
    //     'caseId': 'case-',
    //     overviewImg: 'http://placehold.it/870x376',
    //     description: 'Non velit irure qui elit ex nulla incididunt ullamco non. Nostrud ipsum laborum dolor ' +
    //     'adipisicing ut aute minim. Tempor non sint exercitation proident excepteur exercitation nulla exercitation ' +
    //     'ipsum veniam ad. Aliqua proident et occaecat occaecat tempor nisi ex fugiat velit consectetur.'
    // },
    // {
    //     title: 'PODUNK',
    //     'caseId': 'case-',
    //     overviewImg: 'http://placehold.it/870x376',
    //     description: 'Non velit irure qui elit ex nulla incididunt ullamco non. Nostrud ipsum laborum dolor adipisicing' +
    //     ' ut aute minim. Tempor non sint exercitation proident excepteur exercitation nulla exercitation ipsum veniam' +
    //     ' ad. Aliqua proident et occaecat occaecat tempor nisi ex fugiat velit consectetur.'
    // },
    // {
    //     title: 'XLEEN',
    //     'caseId': 'case-',
    //     overviewImg: 'http://placehold.it/870x376',
    //     description: 'Non velit irure qui elit ex nulla incididunt ullamco non. Nostrud ipsum laborum dolor adipisicing' +
    //     ' ut aute minim. Tempor non sint exercitation proident excepteur exercitation nulla exercitation ipsum veniam ad.' +
    //     ' Aliqua proident et occaecat occaecat tempor nisi ex fugiat velit consectetur.'
    // },
    // {
    //     title: 'EMPIRICA',
    //     'caseId': 'case-',
    //     overviewImg: 'http://placehold.it/870x376',
    //     description: 'Non velit irure qui elit ex nulla incididunt ullamco non. Nostrud ipsum laborum dolor adipisicing' +
    //     ' ut aute minim. Tempor non sint exercitation proident excepteur exercitation nulla exercitation ipsum veniam ' +
    //     'ad. Aliqua proident et occaecat occaecat tempor nisi ex fugiat velit consectetur.'
    // },
    // {
    //     title: 'DATAGEN',
    //     'caseId': 'case-',
    //     overviewImg: 'http://placehold.it/870x376',
    //     description: 'Non velit irure qui elit ex nulla incididunt ullamco non. Nostrud ipsum laborum dolor adipisicing ' +
    //     'ut aute minim. Tempor non sint exercitation proident excepteur exercitation nulla exercitation ipsum veniam ad.' +
    //     ' Aliqua proident et occaecat occaecat tempor nisi ex fugiat velit consectetur.'
    // },
    // {
    //     title: 'ZAGGLE',
    //     'caseId': 'case-',
    //     overviewImg: 'http://placehold.it/870x376',
    //     description: 'Non velit irure qui elit ex nulla incididunt ullamco non. Nostrud ipsum laborum dolor adipisicing' +
    //     ' ut aute minim. Tempor non sint exercitation proident excepteur exercitation nulla exercitation ipsum veniam ad.' +
    //     ' Aliqua proident et occaecat occaecat tempor nisi ex fugiat velit consectetur.'
    // },
    // {
    //     title: 'XURBAN',
    //     'caseId': 'case-',
    //     overviewImg: 'http://placehold.it/870x376',
    //     description: 'Non velit irure qui elit ex nulla incididunt ullamco non. Nostrud ipsum laborum dolor adipisicing ' +
    //     'ut aute minim. Tempor non sint exercitation proident excepteur exercitation nulla exercitation ipsum veniam ad. ' +
    //     'Aliqua proident et occaecat occaecat tempor nisi ex fugiat velit consectetur.'
    // },
    // {
    //     title: 'JIMBIES',
    //     'caseId': 'case-',
    //     overviewImg: 'http://placehold.it/870x376',
    //     description: 'Non velit irure qui elit ex nulla incididunt ullamco non. Nostrud ipsum laborum dolor adipisicing' +
    //     ' ut aute minim. Tempor non sint exercitation proident excepteur exercitation nulla exercitation ipsum veniam ad.' +
    //     ' Aliqua proident et occaecat occaecat tempor nisi ex fugiat velit consectetur.'
    // },
    // {
    //     title: 'NSPIRE',
    //     'caseId': 'case-',
    //     overviewImg: 'http://placehold.it/870x376',
    //     description: 'Non velit irure qui elit ex nulla incididunt ullamco non. Nostrud ipsum laborum dolor adipisicing ' +
    //     'ut aute minim. Tempor non sint exercitation proident excepteur exercitation nulla exercitation ipsum veniam ad.' +
    //     ' Aliqua proident et occaecat occaecat tempor nisi ex fugiat velit consectetur.'
    // },
    // {
    //     title: 'MAGNAFONE',
    //     'caseId': 'case-',
    //     overviewImg: 'http://placehold.it/870x376',
    //     description: 'Non velit irure qui elit ex nulla incididunt ullamco non. Nostrud ipsum laborum dolor adipisicing ' +
    //     'ut aute minim. Tempor non sint exercitation proident excepteur exercitation nulla exercitation ipsum veniam ad.' +
    //     ' Aliqua proident et occaecat occaecat tempor nisi ex fugiat velit consectetur.'
    // },
    // {
    //     title: 'ANIMALIA',
    //     'caseId': 'case-',
    //     overviewImg: 'http://placehold.it/870x376',
    //     description: 'Non velit irure qui elit ex nulla incididunt ullamco non. Nostrud ipsum laborum dolor adipisicing' +
    //     ' ut aute minim. Tempor non sint exercitation proident excepteur exercitation nulla exercitation ipsum veniam ad.' +
    //     ' Aliqua proident et occaecat occaecat tempor nisi ex fugiat velit consectetur.'
    // },
    // {
    //     title: 'SONGLINES',
    //     'caseId': 'case-',
    //     overviewImg: 'http://placehold.it/870x376',
    //     description: 'Non velit irure qui elit ex nulla incididunt ullamco non. Nostrud ipsum laborum dolor adipisicing' +
    //     ' ut aute minim. Tempor non sint exercitation proident excepteur exercitation nulla exercitation ipsum veniam ad.' +
    //     ' Aliqua proident et occaecat occaecat tempor nisi ex fugiat velit consectetur.'
    // },
    // {
    //     title: 'HIVEDOM',
    //     'caseId': 'case-',
    //     overviewImg: 'http://placehold.it/870x376',
    //     description: 'Non velit irure qui elit ex nulla incididunt ullamco non. Nostrud ipsum laborum dolor adipisicing' +
    //     ' ut aute minim. Tempor non sint exercitation proident excepteur exercitation nulla exercitation ipsum veniam ad.' +
    //     ' Aliqua proident et occaecat occaecat tempor nisi ex fugiat velit consectetur.'
    // },
    // {
    //     title: 'ORBOID',
    //     'caseId': 'case-',
    //     overviewImg: 'http://placehold.it/870x376',
    //     description: 'Non velit irure qui elit ex nulla incididunt ullamco non. Nostrud ipsum laborum dolor adipisicing ' +
    //     'ut aute minim. Tempor non sint exercitation proident excepteur exercitation nulla exercitation ipsum veniam ad.' +
    //     ' Aliqua proident et occaecat occaecat tempor nisi ex fugiat velit consectetur.'
    // },
    // {
    //     title: 'CONJURICA',
    //     'caseId': 'case-',
    //     overviewImg: 'http://placehold.it/870x376',
    //     description: 'Non velit irure qui elit ex nulla incididunt ullamco non. Nostrud ipsum laborum dolor adipisicing' +
    //     ' ut aute minim. Tempor non sint exercitation proident excepteur exercitation nulla exercitation ipsum veniam ad.' +
    //     ' Aliqua proident et occaecat occaecat tempor nisi ex fugiat velit consectetur.'
    // },
    // {
    //     title: 'WARETEL',
    //     'caseId': 'case-',
    //     overviewImg: 'http://placehold.it/870x376',
    //     description: 'Non velit irure qui elit ex nulla incididunt ullamco non. Nostrud ipsum laborum dolor adipisicing ' +
    //     'ut aute minim. Tempor non sint exercitation proident excepteur exercitation nulla exercitation ipsum veniam ad. ' +
    //     'Aliqua proident et occaecat occaecat tempor nisi ex fugiat velit consectetur.'
    // },
    // {
    //     title: 'FOSSIEL',
    //     'caseId': 'case-',
    //     overviewImg: 'http://placehold.it/870x376',
    //     description: 'Non velit irure qui elit ex nulla incididunt ullamco non. Nostrud ipsum laborum dolor adipisicing' +
    //     ' ut aute minim. Tempor non sint exercitation proident excepteur exercitation nulla exercitation ipsum veniam ad.' +
    //     ' Aliqua proident et occaecat occaecat tempor nisi ex fugiat velit consectetur.'
    // },
    // {
    //     title: 'KIGGLE',
    //     'caseId': 'case-',
    //     overviewImg: 'http://placehold.it/870x376',
    //     description: 'Non velit irure qui elit ex nulla incididunt ullamco non. Nostrud ipsum laborum dolor adipisicing ' +
    //     'ut aute minim. Tempor non sint exercitation proident excepteur exercitation nulla exercitation ipsum veniam ad.' +
    //     ' Aliqua proident et occaecat occaecat tempor nisi ex fugiat velit consectetur.'
    // }
    // ,
    // {
    //     title: 'QWERTY LOREM IPSUM',
    //     'caseId': 'case-',
    //     overviewImg: 'http://placehold.it/870x376',
    //     description: 'Non velit irure qui elit ex nulla incididunt ullamco non. Nostrud ipsum laborum dolor adipisicing' +
    //     ' ut aute minim. Tempor non sint exercitation proident excepteur exercitation nulla exercitation ipsum veniam ad.' +
    //     ' Aliqua proident et occaecat occaecat tempor nisi ex fugiat velit consectetur.'
    // }
];

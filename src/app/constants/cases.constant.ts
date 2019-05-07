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
        overviewImg: 'assets/images/pages/cases/unreel-me.jpg',
        headingImg: 'assets/images/pages/case-page/unreel-me/heading2.jpg',
        firstProjectViewImg: 'assets/images/pages/case-page/unreel-me/about-unreel-me.jpg',
        secondProjectViewImg: 'assets/images/pages/case-page/unreel-me/product-unreel-me.jpg',
        wholeDescription: 'This project is a combination of back-end and front-end applications integrated with a ' +
        'couple of 3rd party media content providers. On the one hand, the main purpose of the system is to build ' +
        'next-generation tool for content owners to distribute and monetize their media. On the other hand, the ' +
        'system shall offer convenient and flexible tool for media consumers. Therefore, the overall goal of the ' +
        'system is to become a sweet home for content creators and a playground for fans!',
        challenge: 'Our team started with just one back-end developer who became a part of international development ' +
        'team.\nEarlier, the back-end application could only find YouTube videos by YouTube’s channel ID using a ' +
        'single thread at that time. Our main goal was to significantly extend the back-end functionality and provide ' +
        'a scalable multi-thread and multi-node application configuration.\nLater on, the team grew on our side and ' +
        'some more developers joined the rest; we also had our own DevOps engineer. The scope of work broadened and ' +
        'we started to get tasks on the new media content generation and automation of the applications lifecycle.\NAt ' +
        'that moment, our team was also working on development of the predictive engine, integration with the 3rd ' +
        'party systems and media content analysis.\n\nThe client-side is a single-page application that uses ' +
        'AngularJS, open source web application framework maintained by Google. In addition, it is a very ' +
        'powerful tool for creating single-page web applications. We’ve implemented a proper authentication and ' +
        'authorization strategy, so that sensitive data can be accessed via server-side API.\n\nThe server-side app is ' +
        'a multi-purpose application that is used to:\n' +
        '- fill the project\'s knowledge base with the media content from all over the web (YouTube, Facebook, ' +
        'Reddit, Vimeo, various MRSS feeds, etc.);\n- prepare new media content automatically or on a user’s ' +
        'request (highlight reels, gifs, memes, etc.);\n- analyze video-related threads and extract relevant ' +
        'insights e.g. that people had reacted to within their effort;\n- predict user\'s behavior based on ' +
        'historical data and pick the most appropriate content to build automatic playlists, aggregate content, etc.\n',
        solution: 'At first, we used MongoDB as the main data storage. Then, we used a set of distributed back-end ' +
        'applications in the cloud. Some of them are powered by Java, others by Node.js, Scala, etc. For a messaging ' +
        'system between the components we used RabbitMQ. On the front-end, there is a web application built with ' +
        'AndularJS, Node.js, Bootstrap, and a set of mobile applications for most popular platforms.',
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
        overviewImg: 'assets/images/pages/cases/bottles-waiting.jpg',
        headingImg: 'assets/images/pages/case-page/bottles-waiting/heading2.jpg',
        firstProjectViewImg: 'assets/images/pages/case-page/bottles-waiting/nightlife.jpg',
        secondProjectViewImg: 'assets/images/pages/case-page/bottles-waiting/DJ-version.jpg',
        wholeDescription: 'This project is a combination of back-end and front-end applications managing different ' +
        'parts of the ecosystem. Bottles Waiting is an innovative Software as a Service (SaaS) company in the booming ' +
        'nightlife industry. It helps day clubs and nightclubs operate more effectively and tap into new revenue ' +
        'streams through unique table and bottle management software. From event creation to event data, Bottles ' +
        'Waiting is set to be the most useful software for clubs.',
        challenge: 'dFusion worked on functional fixing, support, and extension of BottlesWaiting application. Our ' +
        'main goal was to create a set of web applications with user-friendly interface for doormen, DJs, and party ' +
        'goers.\nWe had to make existing applications more convenient and add a couple of more features such as:\n' +
        '- ordering bottles, mixers, presentations from phone for all customers\n- viewing DJs’ profiles and listening ' +
        'to their tracks at Soundcloud\n- browsing events without logging in\n- viewing all the charges before ' +
        'committing (including taxes, tip, etc.)\n\nFor this purposes, we needed to implement back-end functionality ' +
        'which allows to use scalable multi-thread and multi-node application configuration. Also, we required to ' +
        'integrate the app with third-party systems and media content analytics to enable:\n- email alerts\n- payment ' +
        'system\n- third-party authentication\n\nThe client-side part is a single-page application that uses AngularJS. ' +
        'We decided to use Angular JS because at the project start it was a relevant web application framework ' +
        'maintained by Google.\nFurthermore, it is a very powerful tool for creating single-page web applications ​in ' +
        'addition to Apple’s Cocoa Touch for iOS used for building software applications.\n​We’ve implemented a proper ' +
        'authentication and authorization strategy, so that any sensitive data can be accessed via server-side API. ' +
        'Also, the project supports social login as requested by the customer.',
        solution: 'For our purposes we used DynamoDB data storage because it’s fast, fully managed NoSQL database ' +
        'service that makes it simple and cost-effective to store and retrieve any amount of data. Additionally, it ' +
        'helps serve any level of request traffic.\nThen we use a set of distributed back-end applications such as ' +
        'Spring which includes several modules that provide a range of services powered with Java.\nOn the front-end, ' +
        'there is a web application built with Angular.js, Bootstrap and Cocoa Touch for OS X and iOS.',
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
        overviewImg: 'assets/images/pages/cases/lincoln-center.jpg',
        headingImg: 'assets/images/pages/case-page/lincoln-center/heading2.jpg',
        firstProjectViewImg: 'assets/images/pages/case-page/lincoln-center/score-lincoln-center.jpg',
        secondProjectViewImg: 'assets/images/pages/case-page/lincoln-center/video-lincoln-center.jpg',
        wholeDescription: 'The Lincoln Center offers event tickets for sale and monitors forthcoming music, dance, and ' +
        'theater performances which take place at the Metropolitan Opera, the Lincoln Center Theater, the New York ' +
        'Philharmonic, and the New York City Ballet.',
        challenge: 'Our team worked on support, improvement, and functional extension of Lincoln Center application.' +
        '​Our main challenge was to create a back office responsible for performing all business functions related to ' +
        'its operations such as:\n- maintaining the databases of all institutions that are a part of Lincoln Center,\n' +
        '- handling the company finances.\n\nThe client-side part is a single-page application that uses Backbone.js ' +
        'because at project initiation it was a relevant web application framework which provides minimal set of ' +
        'data-structuring. Moreover, it offers UI primitives that are useful when building web applications with ' +
        'JavaScript. \nWe’ve implemented a proper authentication and authorization strategy, so that any sensitive ' +
        'data can be accessed via server-side API. Also, the project supports social login as requested by customer.\n\n' +
        'The server-side app is a multi-purpose application that is used to:\n- fill the project\'s knowledge base ' +
        'with media content from the Cloud;\n- prepare new media content automatically or on a user’s request;',
        solution: 'For our purposes, we used MongoDB data storage. To create database-driven application and API in ' +
        'Node.js we used KeystoneJS which is built on Express and MongoDB. On the front-end, there is a web ' +
        'application built with Backbone.js, Bootstrap.',
        projectLink: 'http://www.lincolncenter.org/',
        technologyStack: [
            'mongoose',
            'express',
            // '​Keystone',
            // '​StrongLoop',
            'AWS',
            'api-google',
            'swagger',
            // 'Backbone.js',
            'bootstrap',
        ],
        technologyStackPaths: []
    },
    {
        title: 'Skillz',
        'caseId': 'case-',
        description: 'Skillz is a leading mobile eSports platform connecting the world’s 2.6 billion mobile gamers and ' +
        'making eSports accessible for everyone.',
        overviewImg: 'assets/images/pages/cases/skillz.jpg',
        headingImg: 'assets/images/pages/case-page/skillz/heading2.jpg',
        firstProjectViewImg: 'assets/images/pages/case-page/skillz/about-skillz.jpg',
        secondProjectViewImg: 'assets/images/pages/case-page/skillz/products-skillz.jpg',
        wholeDescription: 'This project is a synthesis of live streaming mobile games and  a competition platform ' +
        'that’s fueled by different technologies. The main purpose of the system is to enable users to host streaming ' +
        'video game tournaments and interact with other fans of live sporting events.Skillz, the leading mobile ' +
        'eSports platform, allows to compete 2.6 billion mobile gamers from all around the globe online. Over 12 ' +
        'million gamers use the platform to showcase their mobile gaming skills across 3,000+ game studios.',
        challenge: 'Our team had to start with just one mobile developer who became a part of international ' +
        'cross-border development team. By then, Skillz has already implemented mobile framework with Objective-C ' +
        'and Swift languages which are native for iOS.Later on, the team grew on our side and some Android developers ' +
        'came on board.There was an idea to support another large mobile platform such as Android and create a ' +
        'multi-platform solution. Our main goal was to significantly extend and improve the functionality of the ' +
        'mobile platform using React Native solution developed by Facebook. This approach allows to speed up ' +
        'development and switch to other popular mobile platforms if necessary providing a multi-platform support.',
        solution: 'The decision was to use React Native which applies the React architecture to native iOS, Android, ' +
        'and UWP applications. The benefits of the approach are the following:\n- building native mobile apps using ' +
        'JavaScript and React, a React Native app is a real mobile app\n- using native code when it needed\n\n' +
        'User interface is mostly done on React Native which allows to easily use the same code between supported ' +
        'mobile platforms. Beyond that, some inner subsystems of the project are still implemented with native ' +
        'languages and frameworks for the platforms.',
        projectLink: 'https://corp.skillz.com',
        technologyStack: [],
        technologyStackPaths: []
    },
    {
        title: 'Almentor',
        'caseId': 'case-',
        description: 'This project is a cutting-edge online video marketplace for e-learning and professional business ' +
        'development throughout the Middle East and Africa.',
        overviewImg: 'assets/images/pages/cases/almentor.jpg',
        headingImg: 'assets/images/pages/case-page/almentor/heading2.jpg',
        firstProjectViewImg: 'assets/images/pages/case-page/almentor/courses-en-version.jpg',
        secondProjectViewImg: 'assets/images/pages/case-page/almentor/courses-arabic-version.jpg',
        wholeDescription: 'Almentor.net offers video courses and top-rated training programs of expert-generated ' +
        'content and guided curriculum in Arabic and English.',
        challenge: 'Our team’s main goal was to offer multi-language web application compatible with majority of ' +
        'browsers to provide user-friendly interface for different users:\n- project administrators\n- mentors\n- end ' +
        'customers (online learners)\n\nTherefore, we needed to implement back-end functionality which allows using ' +
        'scalable multi-thread and multi-node application configuration. Also, there was a necessity to enable ' +
        'integration with third-party systems and media content analytics:\n- email alerts\n- payment system\n- ' +
        'third-party authentication',
        solution: 'We used MySQL as the main data storage. Then, we used a set of distributed back-end applications ' +
        'powered by Java. On the front-end side, there is a web application built with AngularJS, Bootstrap, and a ' +
        'set of mobile applications for most popular platforms.',
        projectLink: 'https://www.almentor.net/en/home',
        technologyStack: [],
        technologyStackPaths: []
    },
    {
        title: 'Flaskdata',
        'caseId': 'case-',
        description: 'The Flaskdata.io is patient compliance automation platform for clinical data management and ' +
        'automated monitoring.',
        overviewImg: 'assets/images/pages/cases/flaskdata.jpg',
        headingImg: 'assets/images/pages/case-page/flaskdata/heading2.jpg',
        firstProjectViewImg: 'assets/images/pages/case-page/flaskdata/about-flask.jpg',
        secondProjectViewImg: 'assets/images/pages/case-page/flaskdata/products-flask.jpg',
        wholeDescription: 'This project is a part of an open-source software for clinical research and consists of ' +
        'back-end and front-end applications.\nOur client’s patient compliance automation platform is a comprehensive ' +
        'solution for clinical data management and automated monitoring. \nThe platform includes Cloud EDC, ' +
        'eSource/eSource, study portfolio management, and cloud-based remote risk-based monitoring of patient and ' +
        'doctor compliance. \nFlaskdata.io cloud services are HIPAA and 21 CFR Part 11-compliant and enable healthcare ' +
        'companies to reduce monitoring costs and accelerate their time to statistical report.\n',
        challenge: 'Our team works on support and functional extension of Flask application. Our  main challenge was to ' +
        'build a suite of applications that are convenient, safe, and reliable.\nThe list of integrated applications:\n' +
        '- Flask IdP\n' +
        '- Flask API\n' +
        '- Flask Forms\n' +
        '- Flask Forms Viewer\n' +
        '- Flask Mobile ( in progress )\n',
        solution: 'We used PostgreSQL as the main data storage. Additionally, we used a set of distributed back-end ' +
        'applications powered by Node js. \nOn the front-end, there is a web application built with AngularJS, ' +
        'Bootstrap, Material, and a set of mobile applications for most popular platforms.',
        projectLink: 'https://www.flaskdata.io/',
        technologyStack: [],
        technologyStackPaths: []
    },
    // {
    //     title: 'HATOLOGY',
    //     'caseId': 'case-',
    //     img: 'http://placehold.it/870x376',
    //     description: 'Non velit irure qui elit ex nulla incididunt ullamco non. Nostrud ipsum laborum dolor ' +
    //     'adipisicing ut aute minim. Tempor non sint exercitation proident excepteur exercitation nulla exercitation' +
    //     ' ipsum veniam ad. Aliqua proident et occaecat occaecat tempor nisi ex fugiat velit consectetur.'
    // },
    // {
    //     'title': 'INVENTURE',
    //     'caseId': 'case-',
    //     'img': 'http://placehold.it/870x376',
    //     'description': 'Non velit irure qui elit ex nulla incididunt ullamco non. Nostrud ipsum laborum dolor ' +
    //     'adipisicing ut aute minim. Tempor non sint exercitation proident excepteur exercitation nulla exercitation ' +
    //     'ipsum veniam ad. Aliqua proident et occaecat occaecat tempor nisi ex fugiat velit consectetur.'
    // },
    // {
    //     title: 'GLUKGLUK',
    //     'caseId': 'case-',
    //     img: 'http://placehold.it/870x376',
    //     description: 'Non velit irure qui elit ex nulla incididunt ullamco non. Nostrud ipsum laborum dolor ' +
    //     'adipisicing ut aute minim. Tempor non sint exercitation proident excepteur exercitation nulla exercitation ' +
    //     'ipsum veniam ad. Aliqua proident et occaecat occaecat tempor nisi ex fugiat velit consectetur.'
    // },
    // {
    //     title: 'PODUNK',
    //     'caseId': 'case-',
    //     img: 'http://placehold.it/870x376',
    //     description: 'Non velit irure qui elit ex nulla incididunt ullamco non. Nostrud ipsum laborum dolor adipisicing' +
    //     ' ut aute minim. Tempor non sint exercitation proident excepteur exercitation nulla exercitation ipsum veniam' +
    //     ' ad. Aliqua proident et occaecat occaecat tempor nisi ex fugiat velit consectetur.'
    // },
    // {
    //     title: 'XLEEN',
    //     'caseId': 'case-',
    //     img: 'http://placehold.it/870x376',
    //     description: 'Non velit irure qui elit ex nulla incididunt ullamco non. Nostrud ipsum laborum dolor adipisicing' +
    //     ' ut aute minim. Tempor non sint exercitation proident excepteur exercitation nulla exercitation ipsum veniam ad.' +
    //     ' Aliqua proident et occaecat occaecat tempor nisi ex fugiat velit consectetur.'
    // },
    // {
    //     title: 'EMPIRICA',
    //     'caseId': 'case-',
    //     img: 'http://placehold.it/870x376',
    //     description: 'Non velit irure qui elit ex nulla incididunt ullamco non. Nostrud ipsum laborum dolor adipisicing' +
    //     ' ut aute minim. Tempor non sint exercitation proident excepteur exercitation nulla exercitation ipsum veniam ' +
    //     'ad. Aliqua proident et occaecat occaecat tempor nisi ex fugiat velit consectetur.'
    // },
    // {
    //     title: 'DATAGEN',
    //     'caseId': 'case-',
    //     img: 'http://placehold.it/870x376',
    //     description: 'Non velit irure qui elit ex nulla incididunt ullamco non. Nostrud ipsum laborum dolor adipisicing ' +
    //     'ut aute minim. Tempor non sint exercitation proident excepteur exercitation nulla exercitation ipsum veniam ad.' +
    //     ' Aliqua proident et occaecat occaecat tempor nisi ex fugiat velit consectetur.'
    // },
    // {
    //     title: 'ZAGGLE',
    //     'caseId': 'case-',
    //     img: 'http://placehold.it/870x376',
    //     description: 'Non velit irure qui elit ex nulla incididunt ullamco non. Nostrud ipsum laborum dolor adipisicing' +
    //     ' ut aute minim. Tempor non sint exercitation proident excepteur exercitation nulla exercitation ipsum veniam ad.' +
    //     ' Aliqua proident et occaecat occaecat tempor nisi ex fugiat velit consectetur.'
    // },
    // {
    //     title: 'XURBAN',
    //     'caseId': 'case-',
    //     img: 'http://placehold.it/870x376',
    //     description: 'Non velit irure qui elit ex nulla incididunt ullamco non. Nostrud ipsum laborum dolor adipisicing ' +
    //     'ut aute minim. Tempor non sint exercitation proident excepteur exercitation nulla exercitation ipsum veniam ad. ' +
    //     'Aliqua proident et occaecat occaecat tempor nisi ex fugiat velit consectetur.'
    // },
    // {
    //     title: 'JIMBIES',
    //     'caseId': 'case-',
    //     img: 'http://placehold.it/870x376',
    //     description: 'Non velit irure qui elit ex nulla incididunt ullamco non. Nostrud ipsum laborum dolor adipisicing' +
    //     ' ut aute minim. Tempor non sint exercitation proident excepteur exercitation nulla exercitation ipsum veniam ad.' +
    //     ' Aliqua proident et occaecat occaecat tempor nisi ex fugiat velit consectetur.'
    // },
    // {
    //     title: 'NSPIRE',
    //     'caseId': 'case-',
    //     img: 'http://placehold.it/870x376',
    //     description: 'Non velit irure qui elit ex nulla incididunt ullamco non. Nostrud ipsum laborum dolor adipisicing ' +
    //     'ut aute minim. Tempor non sint exercitation proident excepteur exercitation nulla exercitation ipsum veniam ad.' +
    //     ' Aliqua proident et occaecat occaecat tempor nisi ex fugiat velit consectetur.'
    // },
    // {
    //     title: 'MAGNAFONE',
    //     'caseId': 'case-',
    //     img: 'http://placehold.it/870x376',
    //     description: 'Non velit irure qui elit ex nulla incididunt ullamco non. Nostrud ipsum laborum dolor adipisicing ' +
    //     'ut aute minim. Tempor non sint exercitation proident excepteur exercitation nulla exercitation ipsum veniam ad.' +
    //     ' Aliqua proident et occaecat occaecat tempor nisi ex fugiat velit consectetur.'
    // },
    // {
    //     title: 'ANIMALIA',
    //     'caseId': 'case-',
    //     img: 'http://placehold.it/870x376',
    //     description: 'Non velit irure qui elit ex nulla incididunt ullamco non. Nostrud ipsum laborum dolor adipisicing' +
    //     ' ut aute minim. Tempor non sint exercitation proident excepteur exercitation nulla exercitation ipsum veniam ad.' +
    //     ' Aliqua proident et occaecat occaecat tempor nisi ex fugiat velit consectetur.'
    // },
    // {
    //     title: 'SONGLINES',
    //     'caseId': 'case-',
    //     img: 'http://placehold.it/870x376',
    //     description: 'Non velit irure qui elit ex nulla incididunt ullamco non. Nostrud ipsum laborum dolor adipisicing' +
    //     ' ut aute minim. Tempor non sint exercitation proident excepteur exercitation nulla exercitation ipsum veniam ad.' +
    //     ' Aliqua proident et occaecat occaecat tempor nisi ex fugiat velit consectetur.'
    // },
    // {
    //     title: 'HIVEDOM',
    //     'caseId': 'case-',
    //     img: 'http://placehold.it/870x376',
    //     description: 'Non velit irure qui elit ex nulla incididunt ullamco non. Nostrud ipsum laborum dolor adipisicing' +
    //     ' ut aute minim. Tempor non sint exercitation proident excepteur exercitation nulla exercitation ipsum veniam ad.' +
    //     ' Aliqua proident et occaecat occaecat tempor nisi ex fugiat velit consectetur.'
    // },
    // {
    //     title: 'ORBOID',
    //     'caseId': 'case-',
    //     img: 'http://placehold.it/870x376',
    //     description: 'Non velit irure qui elit ex nulla incididunt ullamco non. Nostrud ipsum laborum dolor adipisicing ' +
    //     'ut aute minim. Tempor non sint exercitation proident excepteur exercitation nulla exercitation ipsum veniam ad.' +
    //     ' Aliqua proident et occaecat occaecat tempor nisi ex fugiat velit consectetur.'
    // },
    // {
    //     title: 'CONJURICA',
    //     'caseId': 'case-',
    //     img: 'http://placehold.it/870x376',
    //     description: 'Non velit irure qui elit ex nulla incididunt ullamco non. Nostrud ipsum laborum dolor adipisicing' +
    //     ' ut aute minim. Tempor non sint exercitation proident excepteur exercitation nulla exercitation ipsum veniam ad.' +
    //     ' Aliqua proident et occaecat occaecat tempor nisi ex fugiat velit consectetur.'
    // },
    // {
    //     title: 'WARETEL',
    //     'caseId': 'case-',
    //     img: 'http://placehold.it/870x376',
    //     description: 'Non velit irure qui elit ex nulla incididunt ullamco non. Nostrud ipsum laborum dolor adipisicing ' +
    //     'ut aute minim. Tempor non sint exercitation proident excepteur exercitation nulla exercitation ipsum veniam ad. ' +
    //     'Aliqua proident et occaecat occaecat tempor nisi ex fugiat velit consectetur.'
    // },
    // {
    //     title: 'FOSSIEL',
    //     'caseId': 'case-',
    //     img: 'http://placehold.it/870x376',
    //     description: 'Non velit irure qui elit ex nulla incididunt ullamco non. Nostrud ipsum laborum dolor adipisicing' +
    //     ' ut aute minim. Tempor non sint exercitation proident excepteur exercitation nulla exercitation ipsum veniam ad.' +
    //     ' Aliqua proident et occaecat occaecat tempor nisi ex fugiat velit consectetur.'
    // },
    // {
    //     title: 'KIGGLE',
    //     'caseId': 'case-',
    //     img: 'http://placehold.it/870x376',
    //     description: 'Non velit irure qui elit ex nulla incididunt ullamco non. Nostrud ipsum laborum dolor adipisicing ' +
    //     'ut aute minim. Tempor non sint exercitation proident excepteur exercitation nulla exercitation ipsum veniam ad.' +
    //     ' Aliqua proident et occaecat occaecat tempor nisi ex fugiat velit consectetur.'
    // }
    // ,
    // {
    //     title: 'QWERTY LOREM IPSUM',
    //     'caseId': 'case-',
    //     img: 'http://placehold.it/870x376',
    //     description: 'Non velit irure qui elit ex nulla incididunt ullamco non. Nostrud ipsum laborum dolor adipisicing' +
    //     ' ut aute minim. Tempor non sint exercitation proident excepteur exercitation nulla exercitation ipsum veniam ad.' +
    //     ' Aliqua proident et occaecat occaecat tempor nisi ex fugiat velit consectetur.'
    // }
];

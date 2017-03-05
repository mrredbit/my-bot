import presetMessage from './presetMessages';

const companyMapping = {
  'streetlife': {
    'talkabout.previous_jobs': 'I worked in Streetlife as a frontend developer from Aug 2016 to Jan 2017. Streetlife was a UK leading online community for neighbourhood, connecting people together based on where they live.\n\nI worked with two other frontend developers, contributing product ideas and developed different features on web platform that serve the needs of more than 1,500,000 active users and local businesses. I also helped revamping the website with ReactJS + Redux for better maintenance and performance.\n\nThe technologies involved are mainly Javascript (ES6 + React + Redux), HTML5, CSS3, LESS, Webpack, Mocha, Chai, Sinon, Selenium, Gulp, Travis, Bootstrap and JQuery.',
    'talkabout.previous_job.company_size': 'Streetlife is a company with 20 employees based in London. I worked in a dev team of 11, in a flat hierarchy with 2 other frontend developers.',
    'talkabout.previous_job.duration': 'I worked in Streetlife for 6 months until it was accquired by US unicorn Nextdoor.',
    'talkabout.skills': 'The technologies I used in Streetlife are mainly Javascript (ES6 + React + Redux), HTML5, CSS3, LESS, Webpack, Mocha, Chai, Sinon, Selenium, Gulp, Travis, Bootstrap and JQuery.'
  },
  'accedo': {
    'talkabout.previous_jobs': 'Accedo is a global leading video-centric solution provider, I worked in Accedo as a frontend software engineer from Jun 2014 to Jul 2016, helped different video-on-demand providers to build their TV app from scratch.\n\nIn my latest project, I worked in a dev team of 8, helped Maxdome, the leading video-on-demand provider in Germany, to deliver video contents to over 1,000,000 users on more than 10 Smart TV platforms such as Samsung, LG, Panasonic, PlayStation, Sony and Amazon FireTV…etc.\n\nThe biggest challenge in Accedo is that different TV platforms have different native api, e.g. a Samsung app couldn\'t run on LG. We solved it by adding an abstract layer on top of our application to talk with different TV platform, so that we could write one app and deploy to different platforms. The technologies involved are mainly Javascript, HTML5, CSS3, Gulp, Grunt, Jenkins and Smart TV frameworks.',
    'talkabout.previous_job.company_size': 'Accedo is a Sweden based company with more than 300 employees around the world. I have been working in Hong Kong Office (the Global Developement Centre) with other 60 developers and in London Office with other 10 developers. The project team varies from project to project, I was working as a senior role in a team of 8 in my latest project.',
    'talkabout.previous_job.duration': 'I worked in Accedo Hong Kong office for 1 year and 5 months, London office for 10 months.',
    'talkabout.skills': 'The technologies I used in Accedo are mainly Javascript, HTML5, CSS3, Gulp, Grunt, Jenkins and Smart TV frameworks.'
  },
  'hkgs': {
    'talkabout.previous_jobs': 'Hong Kong Good Store (hkgoodstore.com) is a non-commercial, independent project started in 2012 by me and 3 friends, trying to raise public awareness about the values of independent local stores in Hong Kong.\n\nWe are responsible for everything from making decision, applications development, online marketing to holding events. We built a web app and an iOS client making thousands of local independent shops searchable among the public. The iOS application once hit the Top Lifestyle App Chart on Hong Kong App Store and attracted attention from major media. We also built a Facebook community (fb.com/hkgoodstore) with currently has 146,000+ organic followers in Hong Kong.\n\nThe technologies involved in this project are mainly Javascript, HTML5, CSS3, SASS, Bootstrap, JQuery and ASP.NET.',
    'talkabout.previous_job.company_size': 'Hong Kong Good Store is a part-time project of me and 3 of my friends. As a co-founder, we are responsible for everything from making decision, application development, online marketing to holding events.',
    'talkabout.previous_job.duration': 'I ran the Hong Kong Good Store project for more than 5 years, recently we decided to shutdown the website, but the facebook community is still active.',
    'talkabout.skills': 'The technologies I used in Hong Kong Good Store are mainly Javascript, HTML5, CSS3, SASS, Bootstrap, JQuery and ASP.NET.'
  },
  'eperfect': {
    'talkabout.previous_jobs': 'e-Perfect is a Hong Kong IT solution provider on healthcare and government projects. I worked in e-Perfect from Apr 2012 to Mar 2014 as a Senior Analyst Programmer.\n\nI worked in a dev team of 8, built a Human Resources Management System to manage internal human resources of over 100 clinics in the medical network. Also revamped the Licensing and Survey of Local Vessel System of Hong Kong Marine Department, from a legacy web based system to a service- oriented architecture based system from scratch.\n\nThe technologies involved in this project are Javascript, HTML, CSS, MSSQL, Oracle DB, ASP.Net and Java.',
    'talkabout.previous_job.company_size': 'e-Perfect is a company of 30 employees based in Hong Kong. I worked as a senior role in a dev team of 8.',
    'talkabout.previous_job.duration': 'I worked in e-Perfect for 2 years.',
    'talkabout.skills': 'The technologies I used in e-Perfect are mainly Javascript, HTML, CSS, MSSQL, Oracle DB, ASP.Net and Java.'
  },
  'vance_info': {
    'talkabout.previous_jobs': 'Vance Info is a global IT solution provider which merged with HiSoft to form Pactera in 2012. I worked in Vance Info as an ASP.net Developer from Aug 2011 to Mar 2012.\n\nI worked in a dev team of 5, enhanced the Telephone Betting Services of Hong Kong Jockey Club to allow thousands of users betting at the same time with Voice Over IP technology.\n\nThe technologies involved are Javascript, Html, CSS and VOIP.',
    'talkabout.previous_job.company_size': 'Vance Info is a company of more than 14,000 employees around the world. I worked in a small dev team of 5 solely for the Jockey Club project. But at the same time working closely with different team of Jockey Club.',
    'talkabout.previous_job.duration': 'I worked in VanceInfo for 8 months.',
    'talkabout.skills': 'The technologies I used in Vance Info are mainly Javascript, Html, CSS and VOIP.'
  },
  'time_medical': {
    'talkabout.previous_jobs': 'Time Medical is a startup company professional in magnetic resonance imaging (MRI). I worked in Time Medical as a software engineer from Nov 2009 to July 2011.\n\nI worked in a dev team of 8, built a MRI console system from scratch.\n\nThe technologies involved are .Net and WinForms.',
    'talkabout.previous_job.company_size': 'Time Medical is a company with more than 300 employees, I worked in a dev team of 8, working closely with hardware team and manufacturing team in Shanghai and Taizhou',
    'talkabout.previous_job.duration': 'I worked in Time Medical for 1 year and 9 months.',
    'talkabout.skills': 'The technologies I used in Time Medical are mainly .Net and WinForms.'
  },
  'not_mentioned': {
    'talkabout.previous_jobs': 'I have 7 years of solid working experience in frontend development, below are the companies / projects I have worked in, if you are interested in any specific one of them, I am happy to tell you more in detail. \n- Streetlife \n- Accedo \n- Hong Kong Good Store \n- e-Perfect \n- Vance Info \n- Time Medical',
    'talkabout.previous_job.duration': 'Which one in particular do you wanna know more about? \n\n- Streetlife \n- Accedo \n- Hong Kong Good Store \n- e-Perfect \n- Vance Info \n- Time Medical',
    'talkabout.previous_job.company_size': 'Which one in particular do you wanna know more about? \n\n- Streetlife \n- Accedo \n- Hong Kong Good Store \n- e-Perfect \n- Vance Info \n- Time Medical'
  }
};

const skillMapping = {
  'not_mentioned': {
    'talkabout.skills': 'I am a senior frontend developer proficient in Javascript (ES6 + React + Redux), with experience in BDD (using Mocha, Chai, Sinon and Selenium) and Continuous Delivery. I am also familiar with JQuery, Smart TV javascript frameworks and backend technology like .Net, Java, Nodejs.\n\nIf you are interested to know more about specific skills, I am happy to tell you in detail.'
  },
  'javascript': {
    'talkabout.skills': 'I have 7 years of development experience using Javascript to build web applications serving over million of users. I have also helped revamping existing JQuery website with React and Redux.\n\nPersonally perfer using React and Redux in large application, I like Redux\'s unidirectional data flow and single source of truth which helps maintainance and testing a lot.'
  },
  'frontend': {
    'talkabout.skills': 'I have 7 years of experience in frontend development, proficient in using Javascript to build web applications that serve over million of users. I have also helped revamping websites from JQuery to React and Redux.\n\nPersonally perfer using React and Redux in large application, I like Redux\'s unidirectional data flow and single source of truth which help maintainance and testing a lot.'
  },
  'backend': {
    'talkabout.skills': 'For backend development, I have experience in building a company HR system and also a local vessel system for Hong Kong governent from scratch. The technologies I used are ASP.Net MVC and Java, I also have some experience with Nodejs in my side projects.'
  },
  'unit_test': {
    'talkabout.skills': 'I am familiar with BDD. In my last job Streetlife we use Mocha, Chai, Sinon and also Selenium to write tests.'
  },
  'smart_tv': {
    'talkabout.skills': 'I am familiar with Smart TV application development, its mainly Javascript, HTML5 and CSS3 like web applications, but the biggest challenge of it is that different TV platforms have different native api, e.g. a Samsung app couldn\'t run on a LG TV. When I worked in Accedo we solved this problem by adding an abstract layer on top of our application to talk with different TV platform, so that we can write one app and deploy to different platforms.'
  },
  'continuous_delivery': {
    'talkabout.skills': 'I have experience with continuous delivery when I was working in Streetlife. Application will be built and test suites will be run automatically, everything was pre-scripted with error handling to avoid any human errors.'
  },
  'dotnet': {
    'talkabout.skills': 'I have experience in building a company HR system with .Net'
  },
  'java': {
    'talkabout.skills': 'I have experience in building a local vessel system for Hong Kong government from scratch.'
  },
  'node': {
    'talkabout.skills': 'I have used Nodejs in some of my side projects.'
  },
  'website': {
    'talkabout.skills': 'I built small and large websites, from internal HR system to social network that serves more that 1,500,000 users. Right now I am building the chat bot that you are talking to.'
  }
};

const overrideSmallTalkMapping = {
  'job': presetMessage.fallbackMessage,
  'look': presetMessage.fallbackMessage
}

export default  {
  map: function (intent, parameters = {}) {
    console.log("Intent", intent);
    console.log("Parameters", parameters);
    let previousJob = 'not_mentioned';
    let skill = 'not_mentioned';

    switch (intent) {
      case 'talkabout.previous_jobs':
      case 'talkabout.previous_job.company_size':
      case 'talkabout.previous_job.duration':
      case 'talkabout.previous_job.skill':
        if (parameters.previous_job || parameters.context_previous_job) {
          previousJob = parameters.previous_job || parameters.context_previous_job;
        }
        return companyMapping[previousJob] && companyMapping[previousJob][intent];
      case 'talkabout.skills':

        if (parameters.skill) {
          skill = parameters.skill;
          return skillMapping[skill] && skillMapping[skill][intent];
        } else if (parameters.previous_job || parameters.context_previous_job) {
          previousJob = parameters.previous_job || parameters.context_previous_job;
          return companyMapping[previousJob] && companyMapping[previousJob][intent];
        } else {
          return skillMapping[skill] && skillMapping[skill][intent];
        }
      /* To override unwanted smalltalk message */
      case 'smalltalk.topics':
      case 'smalltalk.dialog':
        switch (parameters.simplified) {
          case 'job':
          case 'look':
            return overrideSmallTalkMapping[parameters.simplified];
        }
        break;
    }
  }
};

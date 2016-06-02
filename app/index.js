const Angular = window.angular = require('angular');

require('oclazyload');

// require('./page3/page3Module')(Angular);
//require('./page4Module')(Angular);

require('./styles/main.scss')
const ngModule = Angular.module('myApp', [require('angular-ui-router'), 'oc.lazyLoad']);

require('./config')(ngModule);

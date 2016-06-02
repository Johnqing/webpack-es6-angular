require('oclazyload');

// require('./page3/page3Module')(Angular);
//require('./page4Module')(Angular);

require('./styles/main.scss')
const ngModule = angular.module('myApp', ['vapour', 'oc.lazyLoad']);

require('./config')(ngModule);

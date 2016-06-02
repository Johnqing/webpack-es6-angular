export default function(){
    const module = angular.module('homeApp', []);
    require('./home.scss');
    require('./homeController')(module);
};

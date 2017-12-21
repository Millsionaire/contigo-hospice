const main = require('./app/main');
const header = require('./app/header');
const footer = require('./app/footer');
const about = require('./app/about');
const howItWorks = require('./app/howitworks');
const contact = require('./app/contact');
const AnimateService = require('./app/services/animateService');

require('jquery');
const angular = require('angular');
const angularMaterialize = require('angular-materialize');
require('./index.scss');

angular
  .module('app', [angularMaterialize])
  .service('AnimateService', AnimateService)
  .component('app', main)
  .component('contigoHeader', header)
  .component('about', about)
  .component('howItWorks', howItWorks)
  .component('contact', contact)
  .component('contigoFooter', footer);

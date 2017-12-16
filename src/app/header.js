module.exports = {
  template: require('./header.html'),
  controller: HeaderController
};

function HeaderController() {
  this.closeNav = function () {
    angular.element('.button-collapse').sideNav('hide');
  };
}

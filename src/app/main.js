module.exports = {
  template: require('./main.html'),
  controller: main
};

function main() {
  angular.element('.button-collapse').sideNav();
  angular.element('.parallax').parallax();
  angular.element('.scrollspy').scrollSpy({scrollOffset: 100});
}

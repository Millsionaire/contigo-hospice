module.exports = {
  template: require('./carousel.html'),
  controller: ['$interval', title]
};

function title($interval) {
  angular.element('.carousel.carousel-slider').carousel({
    fullWidth: true
  });

  $interval(function () {
    angular.element('.carousel').carousel('next');
  }, 2000);

  angular.element('.paralax').parallax();
}


module.exports = {
  template: require('./about.html'),
  controller: ['AnimateService', about]
};

function about(AnimateService) {
  const animateAboutObj = [
    {
      id: '#about-title',
      classToAdd: 'moveLeftAndFadeIn',
      classToRemove: 'hidden'
    },
    {
      id: '.about-content',
      classToAdd: 'moveRightAndFadeIn',
      classToRemove: 'hidden'
    }
  ];

  this.animateAbout = function () {
    AnimateService.animate(animateAboutObj);
  };
}


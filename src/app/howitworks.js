module.exports = {
  template: require('./howitworks.html'),
  controller: ['AnimateService', howItWorks]
};

function howItWorks(AnimateService) {
  const animateHowItWorksObj = [
    {
      id: '#howItWorks-title',
      classToAdd: 'moveDownAndFadeIn',
      classToRemove: 'hidden'
    },
    {
      id: '#howItWorks-sub-title-1',
      classToAdd: 'moveLeftAndFadeIn',
      classToRemove: 'hidden'
    },
    {
      id: '#howItWorks-content-1',
      classToAdd: 'moveLeftAndFadeIn',
      classToRemove: 'hidden'
    },
    {
      id: '#howItWorks-sub-title-2',
      classToAdd: 'moveRightAndFadeIn',
      classToRemove: 'hidden'
    },
    {
      id: '#howItWorks-content-2',
      classToAdd: 'moveRightAndFadeIn',
      classToRemove: 'hidden'
    },
    {
      id: '#howItWorks-sub-title-3',
      classToAdd: 'moveLeftAndFadeIn',
      classToRemove: 'hidden'
    },
    {
      id: '#howItWorks-content-3',
      classToAdd: 'moveLeftAndFadeIn',
      classToRemove: 'hidden'
    },
    {
      id: '.divider',
      classToAdd: 'fadeIn',
      classToRemove: 'hidden'
    }
  ];

  this.animateHowItWorks = function () {
    AnimateService.animate(animateHowItWorksObj);
  };
}

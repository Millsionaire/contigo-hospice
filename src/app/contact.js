module.exports = {
  template: require('./contact.html'),
  controller: ['AnimateService', contact]
};

function contact(AnimateService) {
  const animateContact = [
    {
      id: '#contact-phone',
      classToAdd: 'scaleUpAndFadeIn',
      classToRemove: 'hidden'
    },
    {
      id: '#contact-mail',
      classToAdd: 'scaleUpAndFadeIn',
      classToRemove: 'hidden'
    },
    {
      id: '#contact-location',
      classToAdd: 'scaleUpAndFadeIn',
      classToRemove: 'hidden'
    },
    {
      id: '#contact-title',
      classToAdd: 'moveDownAndFadeIn',
      classToRemove: 'hidden'
    },
    {
      id: '#contact-map',
      classToAdd: 'moveUpAndFadeIn',
      classToRemove: 'hidden'
    }
  ];

  this.animateContact = function () {
    AnimateService.animate(animateContact);
  };
}

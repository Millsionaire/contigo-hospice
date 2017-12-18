module.exports = {
  template: require('./footer.html'),
  controller: ['AnimateService', footer]
};

function footer(AnimateService) {
  this.year = new Date().getFullYear();

  const animateFooterObj = [
    {
      id: '#footer',
      classToAdd: 'fadeIn',
      classToRemove: 'hidden'
    },
    {
      id: '.footer-brand',
      classToAdd: 'fadeIn',
      classToRemove: 'hidden'
    }
  ];

  this.animateFooter = function () {
    AnimateService.animate(animateFooterObj);
  };
}

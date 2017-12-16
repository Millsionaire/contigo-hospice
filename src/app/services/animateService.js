function AnimateService() {
}

AnimateService.prototype.animate = function (elArr) {
  let i = 0;
  while (i < elArr.length) {
    angular.element(elArr[i].id).addClass(elArr[i].classToAdd);
    angular.element(elArr[i].id).removeClass(elArr[i].classToRemove);
    i++;
  }
};

module.exports = AnimateService;


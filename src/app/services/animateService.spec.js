var angular = require('angular');
require('angular-mocks');
var {AnimateService} = require('./animateService');

describe('AnimateService service', function () {
  beforeEach(function () {
    angular
      .module('AnimateService', [])
      .service('AnimateService', AnimateService);
    angular.mock.module('AnimateService');
  });

  it('should', angular.mock.inject(function (AnimateService) {
    expect(AnimateService.getData()).toEqual(3);
  }));
});

'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('ngPawsApp'));

  var MainCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of phones to the scope', function () {
    expect(MainCtrl.phones.length).toBe(3);
  });
});

// describe('phone list view is dynamic', function(){
//   beforeEach(function() {
//     browser.get('app/index.html');
//   });
//
//     it('should filter the phone list as a user types into the search box', function() {
//       var phoneList = element.all(by.repeater('phone in phones'));
//       var query = element(by.model('query'));
//
//       expect(phoneList.count()).toBe(3);
//
//       query.sendKeys('nexus'); expect(phoneList.count()).toBe(1);
//
//       query.clear(); query.sendKeys('motorola');
//       expect(phoneList.count()).toBe(2);
//     });
// });

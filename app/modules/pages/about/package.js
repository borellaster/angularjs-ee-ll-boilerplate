!function(){"use strict";define("app/modules/pages/about/module",["require","angular","uiRouter"],function(t){var a=t("angular");return t("uiRouter"),a.module("about",["ui.router"])}),define("app/modules/pages/about/controller",["require","./module"],function(t){function a(){var t=this;t.pageName="About Page"}var e=t("./module");e.controller("AboutCtrl",a)}),define("app/modules/pages/about/states",["require","./module"],function(t){function a(t){t.state("about",{url:"/about",views:{master:{templateUrl:"app/core/main/templates/layout.html"},"content@about":{templateUrl:"app/modules/pages/about/templates/page.html",controller:"AboutCtrl",controllerAs:"vm"}}})}var e=t("./module");e.config(a),a.$inject=["$stateProvider","$urlRouterProvider"]}),define("app/modules/pages/about/templatesCache",["require","./module"],function(t){function a(t){t.put("app/modules/pages/about/templates/backend.html","..."),t.put("app/modules/pages/about/templates/frontend.html",'<ul><li>CSS Framework: <a href="http://getbootstrap.com/" target=_blank>Bootstrap</a> v3.3.2<ul><li><a href=http://getbootstrap.com/css/?#grid target=_blank>Grid System</a> | <a href=http://getbootstrap.com/css/?#tables target=_blank>Table</a> | <a href=http://getbootstrap.com/css/?#forms target=_blank>Form</a> | <a href=http://getbootstrap.com/css/?#responsive-utilities target=_blank>Responsive utilities</a> | <a href=http://getbootstrap.com/css/?#less target=_blank>Less</a> (<a href="http://lesscss.org/" target=_blank>Less Site</a>)<br><br></li></ul></li><li><a href="http://jquery.com/" target=_blank>JQuery</a> v2.1.3<br><br></li><li><a href="http://requirejs.org/" target=_blank>Require.js</a> v2.1.15 - is a JavaScript file and module loader<br><br></li><li>JavaScript Framework: <a href="http://angularjs.org/" target=_blank>Angularjs</a> v1.3.11<ul><li><a href=http://code.angularjs.org/1.3.11/docs/guide target=_blank>Angular Developer Guide</a>:<ul><li><a href=http://code.angularjs.org/1.3.11/docs/guide/concepts target=_blank>Conceptual Overview</a></li><li><a href=http://code.angularjs.org/1.3.11/docs/guide/databinding target=_blank>Data Binding</a> | <a href=http://code.angularjs.org/1.3.11/docs/guide/di target=_blank>Dependency Injection</a> | <a href=http://code.angularjs.org/1.3.11/docs/guide/controller target=_blank>Controllers</a></li><li><a href=http://code.angularjs.org/1.3.11/docs/guide/directive target=_blank>Directives</a> | <a href=http://code.angularjs.org/1.3.11/docs/guide/$location target=_blank>$location</a></li></ul></li><li><a href=http://code.angularjs.org/1.3.11/docs/api target=_blank>Angular API Docs</a>:<ul><li><a href=http://code.angularjs.org/1.3.11/docs/api/ng/service/$location target=_blank>$location</a> | <a href=http://code.angularjs.org/1.3.11/docs/api/ng/service/$http target=_blank>$http</a> | <a href=http://code.angularjs.org/1.3.11/docs/api/ngResource/service/$resource target=_blank>$resource</a></li></ul></li><li><a href=https://github.com/ocombe/ocLazyLoad target=_blank>ocLazyLoad</a> v0.5.2 - Load modules on demand (lazy load) in AngularJS</li><li><a href="http://victorbjelkholm.github.io/ngProgress/" target=_blank>ngProgress</a> A slim, site-wide progressbar for AngularJS</li><li><a href=https://github.com/jirikavi/AngularJS-Toaster target=_blank>AngularJS-Toaster</a> is a customized version of "toastr" non-blocking notification javascript library</li><li><a href="https://angular-ui.github.io/" target=_blank>Angular UI</a><ul><li><a href="https://angular-ui.github.io/bootstrap/" target=_blank>Bootstrap</a> v0.12.0</li><li><a href="https://angular-ui.github.io/ui-router/site/" target=_blank>Router</a> v0.2.13</li></ul></li><li>Mock<ul><li>Angular API Docs: <a href=http://code.angularjs.org/1.3.11/docs/api/ngMock/service/$httpBackend target=_blank>$httpBackend</a></li><li><a href=https://github.com/erkobridee/angular-mocks-backend/releases/tag/0.1.7 target=_blank>angular-mocks-backend</a> v0.1.7</li><li><a href="http://lokijs.org/" target=_blank>LokiJS</a> v1.0.1</li></ul></li></ul></li></ul>'),t.put("app/modules/pages/about/templates/page.html",'<div class=container><div class=row>&nbsp;</div><div class=row><p><a href="#/">Back to Home</a> | Page name: {{vm.pageName}}</p></div><div class=row>&nbsp;</div><div class=row><tabset><tab heading=FrontEnd><div class=container ng-include="\'app/modules/pages/about/templates/frontend.html\'"></div></tab><tab heading="FrontEnd Test\'s"><div class=container ng-include="\'app/modules/pages/about/templates/tests_unit.html\'"></div><div class=container ng-include="\'app/modules/pages/about/templates/tests_e2e.html\'"></div></tab><tab heading=BackEnd><div class=container ng-include="\'app/modules/pages/about/templates/backend.html\'"></div></tab></tabset></div></div>'),t.put("app/modules/pages/about/templates/tests_e2e.html",'<ul><li>Test\'s E2E ( End-to-End )<ul><li>Syntax: <a href="https://jasmine.github.io/" target=_blank>Jasmine BDD</a></li><li>Runner: <a href="https://angular.github.io/protractor/" target=_blank>Protractor</a> is an end-to-end test framework for AngularJS applications. Protractor runs tests against your application running in a real browser, interacting with it as a user would.<ul><li><a href=https://angular.github.io/protractor/#/tutorial target=_blank>Protractor Tutorial</a></li><li><a href=https://angular.github.io/protractor/#/api target=_blank>Protractor API Doc</a></li><li><a href="http://angularjs4u.com/protractor/protractor-e2e-testing-resources/" target=_blank>Protractor E2E Testing Resources | AngularJS 4U</a></li><li>Slides:<ul><li><a href="http://ramonvictor.github.io/protractor/slides/" target=_blank>Protractor for AngularJS: writing end-to-end test has never been so fun</a> - A step-by-step presentaion on Protractor End-to-End Testing for AngularJS</li><li><a href="https://pascalprecht.github.io/slides/e2e-testing-with-protractor/" target=_blank>E2E Testing with Protractor</a> - A framework for easily creating beautiful presentations using HTML</li><li><a href=http://slides.com/andrewschmadel/e2e-testing-with-angular-js-and-protractor target=_blank>E2E Testing with angular.js and protractor</a></li></ul></li></ul></li><li>Selenium:<ul><li><a href="http://www.seleniumhq.org/" target=_blank>SeleniumHQ - Browser Automation</a></li><li><a href="https://code.google.com/p/selenium/" target=_blank>Selenium | Google Code</a></li><li><a href=https://code.google.com/p/selenium/wiki/WebDriverJs target=_blank>WebDriverJS | Selenium Wiki - Google Code</a></li></ul></li></ul></li></ul>'),t.put("app/modules/pages/about/templates/tests_unit.html",'<ul><li>Test\'s Unit<ul><li>Syntax: <a href="https://jasmine.github.io/" target=_blank>Jasmine BDD</a></li><li>Runner: <a href="https://karma-runner.github.io/" target=_blank>Karma Runner</a></li><li>Coverate Report: <a href="https://gotwarlost.github.io/istanbul/" target=_blank>istanbul-js: A Javascript code coverage tool written in JS</a></li><li>References:<ul><li><a href=http://slides.com/eitanpeer/angularjs-testing target=_blank>[Slid.es] AngularJS testing using Jasmine</a></li><li><a href=https://github.com/daniellmb/angular-test-patterns target=_blank>[GitHub] daniellmb / angular-test-patterns</a> - High Quality Guide for Testing AngularJS</li><li><a href=http://tech.pro/tutorial/1473/getting-started-with-angularjs-unit-testing target=_blank>Getting started with AngularJS Unit Testing | Tech Pro</a></li><li><a href=http://andyshora.com/unit-testing-best-practices-angularjs.html target=_blank>Unit Testing Best Practices in AngularJS | Andy Shora</a></li><li><a href=http://www.yearofmoo.com/2013/01/full-spectrum-testing-with-angularjs-and-karma.html target=_blank>Full-Spectrum Testing with AngularJS and Karma | Year of moo</a></li><li><a href=http://www.yearofmoo.com/2013/09/advanced-testing-and-debugging-in-angularjs.html target=_blank>Advanced Testing and Debugging in AngularJS | Year of moo</a></li></ul></li></ul></li></ul>')}var e=t("./module");e.run(a),a.$inject=["$templateCache"]}),define("app/modules/pages/about/package",["require","./module","./controller","./states","./templatesCache"],function(t){var a=t("./module");return t("./controller"),t("./states"),t("./templatesCache"),a})}();
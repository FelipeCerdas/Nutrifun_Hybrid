angular.module('app.routes', [])
.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  .state('login', {
        url: '/pageLogin',
        cache: false,
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl',
        data: {
	        authenticate: false
	    }
  })
  .state('register', {
        url: '/register',
        cache: false,
        templateUrl: 'templates/register.html',
        controller: 'RegisterCtrl',
        data: {
	        authenticate: false
	    }
  })
  .state('addRecipe', {
        url: '/addRecipe',
        cache: false,
        templateUrl: 'templates/addRecipe.html',
        controller: 'AddRecipeCtrl',
        data: {
	        authenticate: false
	    }
  })
  .state('account', {
        url: '/account',
        cache: false,
        templateUrl: 'templates/account.html',
        controller: 'AccountCtrl',
        data: {
	        authenticate: false
	    }
  })
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.home', {
    url: '/home',
    cache: false,
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })

  .state('tab.search', {
      url: '/search',
      cache: false,
      views: {
        'tab-search': {
          templateUrl: 'templates/tab-search.html',
          controller: 'SearchCtrl'
        }
      }
  })

  .state('tab.recipes', {
    url: '/recipes',
    cache: false,
    views: {
      'tab-recipes': {
        templateUrl: 'templates/tab-recipes.html',
        controller: 'RecipesCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/pageLogin');

});

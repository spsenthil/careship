var app = angular.module('app', ['ngRoute', 'ngAnimate', 'route-segment', 'view-segment']);

app.config(function($routeSegmentProvider, $routeProvider) {
    
    // Configuring provider options
    
    $routeSegmentProvider.options.autoLoadTemplates = true;
    
    // Setting routes. This consists of two parts:
    // 1. `when` is similar to vanilla $route `when` but takes segment name instead of params hash
    // 2. traversing through segment tree to set it up
  
    $routeSegmentProvider
    
        .when('/home',          'home')
		.when('/whatwedo', 'whatwedo')
            .when('/whatwedo/tulsi', 'whatwedo.tulsi')
            .when('/whatwedo/vidya', 'whatwedo.vidya')
            .when('/whatwedo/jivanadhara', 'whatwedo.jivanadhara')
            .when('/whatwedo/zindagi', 'whatwedo.zindagi')
            .when('/whatwedo/saathi', 'whatwedo.saathi')
		.when('/aboutus', 'aboutus')
        .when('/advisoryboard', 'advisoryboard')
        .when('/beneficiaries', 'beneficiaries')
		.when('/getinvoled',      'getinvoled')
		.when('/give',      'give')
		.when('/contact',      'contact')
        .when('/partners',      'partners')
        .segment('home', {
            templateUrl: 'pages/home.html',
            controller: 'MainCtrl'
        })
		.segment('beneficiaries', {
		    templateUrl: 'pages/beneficiaries.html'
		})
        .segment('whatwedo', {
            templateUrl: 'pages/whatwedo.html'
        })
         .within()//Traverse any sub menu
            .segment('tulsi', {
                'default': true,
                templateUrl: 'pages/whatwedo/tulsi.html'
            })
            .segment('vidya', {
                templateUrl: 'pages/whatwedo/vidya.html'
            })
            .segment('jivanadhara', {
                templateUrl: 'pages/whatwedo/jivanadhara.html'
            })
            .segment('zindagi', {
                templateUrl: 'pages/whatwedo/zindagi.html'
            })
            .segment('saathi', {
                templateUrl: 'pages/whatwedo/saathi.html'
            })
         .up()//Move to next root menu.
		.segment('aboutus', {
		    templateUrl: 'pages/about.html'
		})
        .segment('advisoryboard', {
                templateUrl: 'pages/about/advisoryboard.html'
            })
		.segment('getinvoled', {
            templateUrl: 'pages/getinvoled.html'})
		.segment('give', {
            templateUrl: 'pages/give.html'})
		.segment('contact', {
		    templateUrl: 'pages/contact.html'})
        .segment('partners', {
            templateUrl: 'pages/partners.html'
        })
			
    $routeProvider.otherwise({redirectTo: '/home'}); 
}) ;

app.value('loader', {show: false});

app.controller('MainCtrl', function($scope, $routeSegment, loader) {

    $scope.$routeSegment = $routeSegment;
    $scope.loader = loader;

    $scope.$on('routeSegmentChange', function() {
        loader.show = false;
    })
});

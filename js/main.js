
    var config = {
        labels : {
            'de-de': {
                TITLE : "Sempre Esperto - Just briliant",
                NAME: "Sempre Esperto",
                JUST_HERE: "Gerade hier",
                JUST_NOW: "Gerade jetzt",
                JUST_BRILLIANT: "Gerade Brillante",
                FIND_OUT: "Finden Sie heraus bisschen mehr",
                OWN_NAME: "Stefan Abramiuk",
                OWN_ABOUT: "Inhaber und Gründer von Sempre Esperto",
                OWN_DESC1: "Person mit fast 6 Jahre Erfahrung in der Salesforce Plattform.",
                OWN_DESC2: "Eine Person, die die Rolle der End-to-End-Berater verkörpern",
                SERV_TITLE: "Services bieten wir",
                BUSIN_ANALYST: "Businessanalysten",
                TECH_ARCH: "Technischer Architekt",
                DEV : "Programmierer",
                QA: "Prüfer",
                PERSONALIZED : "Each design is specially personalized according to customer requirements",
                OUR_WORK: "Unsere Arbeit",
                FULL_NAME : "Sempre Esperto Stefan Abramiuk",
                ADDR1: "Al. Komisji Edukacji Narodowej 36/112B",
                ADDR2: "02-797 Warszawa",
                COPYRIGHT: "Copyright \u00A9 Sempre Esperto 2016",
                ABOUT: "Über",
                CONTACT: "Kontakt",
                HOME: "Zuhause",
                DISCOVER: "Entdecken",
                COOKIE_CONSENT: "Diese Website verwendet Cookies für statistische, Werbung und funktionale wir Tracking-Daten auf Anwendungen von Drittanbietern wie Google Analytics anonymisierter bieten. Dank ihnen können wir die Website an Ihre Bedürfnisse anpassen. Jeder kann Cookies akzeptieren, oder hat die Fähigkeit, sie in Ihrem Browser zu deaktivieren, so dass Sie keine Informationen gesammelt werden.",
                SEE_MORE: 'Weitere',
                CONFIRM: "OK",
                MORE_SOON: "Mehr in Kürze..."
            }
        },
        links : {
            EMAIL: "sempre.esperto.it@gmail.com",
            FB_LINK : "https://pl-pl.facebook.com/people/Stefan-Abramiuk/100010261149125",
            LINKED_LINK: "https://www.linkedin.com/in/stefan-abramiuk-95827b43?trk=hp-identity-name",
            SKYPE_LINK: "skype:abramiuk.stefan?chat",
            GPLUS_LINK: "https://plus.google.com/u/3/108473935326169165534"
        },
        version : "ver 1.4.1"
    };

    var myApp = angular.module('homepage',['ngCookies', 'ngAnimate']);
    
    myApp.config( ['$compileProvider',function( $compileProvider ){
          $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|mailto|skype):/);
    }]);

    myApp.controller('HomePageController', ['$scope', '$cookies', '$window', function($scope, $cookies, $window) {
            var expiryDate = new Date();
            expiryDate.setFullYear(2030);
            $scope.cookieConsent = $cookies.get('consent');
            $scope.cookieConsConfirmed = false;

            $scope.labels = labels;
            $scope.links = config.links;
            $scope.version = config.version;

            $scope.confirmCookie = function(){
                $scope.cookieConsConfirmed = true;
                $cookies.put('consent', true, { expires: expiryDate });
            }
    }]);

    myApp.directive("showOnceBackgroundLoaded", [function () {
      return {
        restrict: "A",
        scope: false,
        link: function (scope, element, attributes) {
          element.addClass("ng-hide");
          var image = new Image();
          image.onload = function () {
            // the image must have been cached by the browser, so it should load quickly
            scope.$apply(function () {
              //element.css({ background: 'url("' + attributes.showOnceBackgroundLoaded + '") no-repeat center center scroll' });
              element.addClass('headerBackgroud');
              element.removeClass("ng-hide");
              scope.loaded = true;
            });
          };
          image.src = attributes.showOnceBackgroundLoaded;
        }
      };
    }]);
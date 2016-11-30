
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
            EMAIL: "info@sempreesperto.com",
            FB_LINK : "https://www.facebook.com/sempreesperto",
            LINKED_LINK: "https://www.linkedin.com/company/sempre-esperto",
            SKYPE_LINK: "skype:abramiuk.stefan?chat",
            GPLUS_LINK: "https://plus.google.com/u/3/108473935326169165534",
            ENGLISH_VER: "http://en.sempreesperto.com",
            POLISH_VER: "http://pl.sempreesperto.com"
        },
        settings : {
            ORG_ID : "00D58000000KqWU",
            RET_URL: "http://www.sempreesperto.com?requestSent=1"
        },
        version : "ver 1.5.1"
    };

    var myApp = angular.module('homepage',['ngCookies', 'ngAnimate', 'angular-parallax', 'angular-inview']);
    
    myApp.config( ['$compileProvider',function( $compileProvider ){
          $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|mailto|skype):/);
    }]);

    myApp.controller('HomePageController', ['$scope', '$cookies', '$window', function($scope, $cookies, $window) {
            var expiryDate = new Date();
            expiryDate.setFullYear(2030);
            $scope.cookieConsent = $cookies.get('consent');
            $scope.cookieConsConfirmed = false;

            $scope.visibleWhatWeDo = false;
            $scope.visibleServices = false;
            $scope.visibleProducts = false;

            $scope.labels = labels;
            $scope.links = config.links;
            $scope.settings = config.settings;
            $scope.version = config.version;

            $scope.confirmCookie = function(){
                $scope.cookieConsConfirmed = true;
                $cookies.put('consent', true, { expires: expiryDate });
            };

            $scope.visibleWhatWeDoVisible = function(){
                $scope.visibleWhatWeDo = true;
            };
            $scope.servicesVisible = function(){
                $scope.visibleServices = true;
            };
            $scope.productsVisible = function(){
                $scope.visibleProducts = true;
            };
    }]);

    myApp.directive("showOnceBackgroundLoaded", [function () {
      return {
        restrict: "A",
        scope: false,
        link: function (scope, element, attributes) {
          element.addClass("ng-hide");

          if(attributes.showOnceBackgroundLoadedLowres){
              var image1 = new Image();
              image1.onload = function () {
                // the image must have been cached by the browser, so it should load quickly
                scope.$apply(function () {
                    //element.css({ background: 'url("' + attributes.showOnceBackgroundLoaded + '") no-repeat center center scroll' });
                    element.addClass('headerBackgroudLowRes');
                    element.removeClass("ng-hide");
                    scope.loaded = true;

                    var image2 = new Image();
                    image2.onload = function () {
                        // the image must have been cached by the browser, so it should load quickly
                        scope.$apply(function () {
                            //element.css({ background: 'url("' + attributes.showOnceBackgroundLoaded + '") no-repeat center center scroll' });
                            element.removeClass('headerBackgroudLowRes');
                            element.addClass('headerBackgroud');
                        });
                    };
                    image2.src = attributes.showOnceBackgroundLoaded;
                });
              };
              image1.src = attributes.showOnceBackgroundLoadedLowres;
          } else {
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
        }
      };
    }]);

    myApp.directive('zoom', function($document, $timeout) {
        return {
            restrict: 'C',
            link: function(scope, element, attrs) {
                var body = $document.find('body')[0],
                    overlay = angular.element('<div class="overlay animate"></div>'),
                    clone = element.clone(true).attr('src', attrs.large);

                scope.match = function(el, target) {
                    var rect = target[0].getBoundingClientRect();
                    el.css('height', rect.height + 'px');
                    el.css('left', rect.left + 'px');
                    el.css('top', rect.top + 'px');
                    el.css('width', rect.width + 'px');
                };

                scope.scaleDown = function(el) {
                    el.css('transform', 'scale(1) translateX(0px) translateY(0px)');
                };

                scope.scaleUp = function(el) {
                    var rect = el[0].getBoundingClientRect(),
                        scaleW = (window.innerWidth / rect.width),
                        scaleH = (window.innerHeight / rect.height),
                        scale = scaleW < scaleH ? scaleW : scaleH,
                        x = -(rect.left / scale),
                        y = -(rect.top / scale);
                    el.css('transform', 'scale(' + scale + ') translateX(' + x + 'px) translateY(' + y + 'px)');
                };

                overlay.append(clone);
                overlay.bind('click', function() {
                    scope.match(clone, element);
                    overlay.removeClass('show');
                    scope.scaleDown(clone);
                    $timeout(function() {
                        body.removeChild(overlay[0]);
                    }, 500);
                });
                
                element.bind('click', function() {
                    scope.match(clone, element);
                    body.appendChild(overlay[0]);
                    $timeout(function() {
                        overlay.addClass('show');
                        scope.scaleUp(clone);
                    }, 10);
                });
            }
        };
    });

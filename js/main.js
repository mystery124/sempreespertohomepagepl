
    var config = {
        labels : {
            'en-US': {
                TITLE : "Sempre Esperto - Just briliant",
                NAME: "Sempre Esperto",
                JUST_HERE: "Just Here",
                JUST_NOW: "Just Now",
                JUST_BRILIANT: "Just Briliant",
                FIND_OUT: "Find Out Little More",
                OWN_NAME: "Stefan Abramiuk",
                OWN_ABOUT: "Owner and Founder of Sempre Esperto",
                OWN_DESC1: "Person with almost 6 years of experiece in Salesforce platform.",
                OWN_DESC2: "One person who embody the role of End-to-end consultant",
                SERV_TITLE: "Services we provide",
                BUSIN_ANALYST: "Business Analyst",
                TECH_ARCH: "Technical Architect",
                DEV : "Developer",
                QA: "QA",
                PERSONALIZED : "Each design is specially personalized according to customer requirements",
                OUR_WORK: "Our Work",
                FULL_NAME : "Sempre Esperto Stefan Abramiuk",
                ADDR1: "Al. Komisji Edukacji Narodowej 36/112B",
                ADDR2: "02-797 Warszawa",
                COPYRIGHT: "Copyright \u00A9 Sempre Esperto 2016",
                ABOUT: "About",
                CONTACT: "Contact",
                HOME: "Home",
                DISCOVER: "Discover",
                COOKIE_CONSENT: "This website uses cookies only to ensure you get the best experience on our website",
                CONFIRM: "Confirm"
            },
            'pl': {
                TITLE : "Sempre Esperto - Just briliant",
                NAME: "Sempre Esperto",
                JUST_HERE: "Po prostu tutaj",
                JUST_NOW: "Po prostu teraz",
                JUST_BRILIANT: "Po prostu genialne",
                FIND_OUT: "Dowiedz się trochę więcej",
                OWN_NAME: "Stefan Abramiuk",
                OWN_ABOUT: "Właściciel i założyciel Sempre Esperto",
                OWN_DESC1: "Posiada prawie 6 lat doświadczenia przy pracy na platfromie Salesforce",
                OWN_DESC2: "Jedna osoba która dostarczy kompleksowe usługi w zakresie CRM",
                SERV_TITLE: "Usługi które mogę zaoferować",
                BUSIN_ANALYST: "Analityk Biznesowy",
                TECH_ARCH: "Architekt Techniczny",
                DEV : "Programista",
                QA: "QA",
                PERSONALIZED : "Każdy projekt jest personalizowany zgodnie z wymaganiami klienta",
                OUR_WORK: "Nasza praca",
                FULL_NAME : "Sempre Esperto Stefan Abramiuk",
                ADDR1: "Al. Komisji Edukacji Narodowej 36/112B",
                ADDR2: "02-797 Warszawa",
                COPYRIGHT: "Copyright \u00A9 Sempre Esperto 2016",
                ABOUT: "O mnie",
                CONTACT: "Kontakt",
                HOME: "Na górę",
                DISCOVER: "Odkrywaj",
                COOKIE_CONSENT: 'Ta strona używa plików "cookie" wyłącznie w celu poprawy jakości doznań użytkownika',
                CONFIRM: "Zgadzam się"

            },
        },
        links : {
            EMAIL: "sempre.esperto.it@gmail.com",
            FB_LINK : "https://pl-pl.facebook.com/people/Stefan-Abramiuk/100010261149125",
            LINKED_LINK: "https://www.linkedin.com/in/stefan-abramiuk-95827b43?trk=hp-identity-name",
            SKYPE_LINK: "skype:abramiuk.stefan?chat",
            GPLUS_LINK: "https://plus.google.com/u/3/108473935326169165534"
        },
        version : "ver 1.3"
    };

    var myApp = angular.module('homepage',['ngCookies']);

    myApp.controller('HomePageController', ['$scope', '$cookies', '$window', function($scope, $cookies, $window) {
            $scope.cookieConsent = $cookies.get('consent');
            $scope.userConfig = $cookies.getObject('sEspertoConfig');
            $scope.cookieConsConfirmed = false;
            if(!$scope.userConfig){
                var lang = $window.navigator.language || $window.navigator.userLanguage;
                $scope.userConfig = {'lang': lang};
                $cookies.putObject('sEspertoConfig', $scope.userConfig);
            }

            $scope.labels = config.labels[$scope.userConfig.lang] ? config.labels[$scope.userConfig.lang] : config.labels['en-US'];
            $scope.links = config.links;
            $scope.version = config.version;

            $scope.setLang = function(selectedLang){
                $scope.userConfig.lang = selectedLang;
                $cookies.putObject('sEspertoConfig', $scope.userConfig);
                $scope.labels = config.labels[$scope.userConfig.lang] ? config.labels[$scope.userConfig.lang] : config.labels['en-US'];
            };
            $scope.loaded = true;

            $scope.confirmCookie = function(){
                $scope.cookieConsConfirmed = true;
                $cookies.put('consent', true);
            }
    }]);
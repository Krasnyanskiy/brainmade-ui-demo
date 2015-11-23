(function () {

    //
    // Components
    //
    var GreetingComponent = ng.Component({
        selector: 'greeting'
    }).View({
        templateUrl: 'templates/hello.html'
    }).Class({
        constructor: function () {
        }
    });

    var AdieuComponent = ng.Component({
        selector: 'adieu'
    }).View({
        templateUrl: 'templates/bye.html'
    }).Class({
        constructor: function () {
        },
        login: function () {
            alert('Logged in')
        },
        logout: function () {
            alert('Logged out')
        }
    });

    //
    // Registration
    //
    document.addEventListener('DOMContentLoaded', function () {
        ng.bootstrap(GreetingComponent);
        ng.bootstrap(AdieuComponent);
    });

})();
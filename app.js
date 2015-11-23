
//
// Component `Greeting`
//
function Greeting() {}
Greeting.annotations = [
    new angular.ComponentAnnotation({
        selector: 'greeting'
    }),
    new angular.ViewAnnotation({
        templateUrl: 'templates/hello.html'
    })
];

//
// Component `Adieu`
//
function Adieu() {}
Adieu.annotations = [
    new angular.ComponentAnnotation({
        selector: 'adieu'
    }),
    new angular.ViewAnnotation({
        templateUrl: 'templates/bye.html'
    })
];

//
// Bootstrap the App
//
document.addEventListener('DOMContentLoaded', function () {
    angular.bootstrap(Adieu);
    angular.bootstrap(Greeting);
});


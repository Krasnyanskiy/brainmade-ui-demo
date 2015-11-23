function Greeting() {}
Greeting.annotations = [
    new angular.ComponentAnnotation({
        selector: 'greeting'
    }),
    new angular.ViewAnnotation({
        directives: [Adieu],
        template: '<h1>Hello!</h1><hr><adieu></adieu>'
        //template: '/templates/hello.html'
    })
];

function Adieu() {}
Adieu.annotations = [
    new angular.ComponentAnnotation({
        selector: 'adieu'
    }),
    new angular.ViewAnnotation({
        template: '<h1>Good bye!</h1>'
    })
];

document.addEventListener('DOMContentLoaded', function () {
    angular.bootstrap(Adieu);
    angular.bootstrap(Greeting);
});


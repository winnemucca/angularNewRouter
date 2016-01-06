angular.module('photoreview', 
  ['ngNewRouter', 'ngAnimate', 'ngAria', 'ngMaterial'])
.controller('AppController', ['$router', AppController]);
 
function AppController($router) {
   $router.config([
     { path: '/', redirectTo: '/galleries' },
     { path: '/galleries', component: 'galleries' },
     { path: '/gallery/:id', component: 'gallery' }
   ]);
}

angular.module('photoreview.galleries', [])
.controller('GalleriesController', 
  function(galleryRepositoryService) {
    var vm = this;
 
    // establish reference
    vm.galleries = galleryRepositoryService.galleries;
 
  })

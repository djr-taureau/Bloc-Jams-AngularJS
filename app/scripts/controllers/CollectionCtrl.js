(function(){
    CollectionCtrl.$inject = ['$log', 'Fixtures'];
    function CollectionCtrl($log, Fixtures){
     this.albums = Fixtures.getCollection(12);
     $log.debug(this.albums);
    }

    angular
        .module('blocJams')
        .controller('CollectionCtrl', CollectionCtrl);

})();

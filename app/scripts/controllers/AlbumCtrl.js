(function(){
    AlbumCtrl.$inject = ['$log','Fixtures','SongPlayer'];
    function AlbumCtrl($log, Fixtures, SongPlayer){
        $log.debug(this.albumData = Fixtures.getAlbum());
        
    }

    angular
        .module('blocJams')
        .controller('AlbumCtrl', AlbumCtrl)

})();
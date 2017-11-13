(function(){
    //AlbumCtrl.$inject = ['$log','Fixtures','SongPlayer'];
    function AlbumCtrl($log, Fixtures, SongPlayer){
        this.albumData = Fixtures.getAlbum();
        this.songPlayer = SongPlayer;
        
    }

    angular
        .module('blocJams')
        .controller('AlbumCtrl', ['$log', 'Fixtures', 'SongPlayer',  AlbumCtrl])

})();
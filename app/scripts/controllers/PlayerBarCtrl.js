(function() {
    PlayerBarCtrl.$inject = ['Fixtures','SongPlayer'];
    function PlayerBarCtrl(Fixtures, SongPlayer) {
        this.albumData = Fixtures.getAlbum();
        this.SongPlayer = SongPlayer;
    }

    angular
        .module("blocJams")
        .controller('PlayerBarCtrl', PlayerBarCtrl)
})();
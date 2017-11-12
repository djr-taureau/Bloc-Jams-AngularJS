(function() {
    function SongPlayer(Fixtures) {
         var SongPlayer = {};
        /**
        * @desc Private: current album properties
        * @type {Object}
        */
         var currentAlbum = Fixtures.getAlbum();

        /**
        * @desc Buzz Audio file
        * @type {Object}
        */
        var currentBuzzObject = null;

        /**
        * @function 
        * @desc Stops playing current song; loads new audio file as currentBuzzObject
        * @param {Object} song
        */

        var setSong = function(song){
            if (currentBuzzObject) {
                currentBuzzObject.stop();
                SongPlayer.playing = null;
            }
        
            currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
            });

            SongPlayer.currentSong = song;
        };

        /**
        * @function playSong
        * @desc Plays current song; sets song.playing = true
        * @param {Object} song
        */
        var playSong = function(song) {
            currentBuzzObject.play();
            song.playing = true;
        };

    
         /**
         * @function stopSong
        * @desc private function stops song play using the buzz library stop method
        * @param {object} song
        */
    
        var stopSong = function(song) {
         if(currentBuzzObject){
            currentBuzzObject.stop();
            song.playing = null;
            }
        }

         /**
        * @function getSongIndex
        * @desc public method function that tracks index of current song
        * @param {object} song
        */
          var getSongIndex = function(song) {
            return currentAlbum.songs.indexOf(song);
        };

        /**
        * @desc Current Song
        * @type {Number}
        */
        SongPlayer.currentSong = null;

        /**
        * @function SongPlayer.play
        * @desc Plays current song if paused otherwise the selected song
        * @param {Object} song
        */
        SongPlayer.play = function(song) {
            song = song || SongPlayer.currentSong;
            if (SongPlayer.currentSong !== song) {
                setSong(song);
                playSong(song);
            } else if (SongPlayer.currentSong === song) {
                if (currentBuzzObject.isPaused()) {
                    playSong(song);
                }
            }
        };

        /**
        * @function SongPlayer.pause
        * @desc Pause current song
        * @param {Object} song
        */
        SongPlayer.pause = function(song) {
            song = song || SongPlayer.currentSong;
            currentBuzzObject.pause();
            song.playing = false;
        };

         /**
        * @function SongPlayer.previous
        * @desc Play the previous song
        * @param {Object} song
        */
        SongPlayer.previous = function () {
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex--;
        };

        if (currentSongIndex < 0 ) {
            currentBuzzObject.stop();
            SongPlayer.currentSong.playing = null;
        } else {
            var song = currentAlbum.songs[currentSongIndex];
            setSong(song);
            playSong(song);
        }

        return SongPlayer;
    }    
    angular
        .module('blocJams')
        .factory('SongPlayer', ['Fixtures', SongPlayer]);

})();
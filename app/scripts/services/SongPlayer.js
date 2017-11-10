(function() {
    function SongPlayer() {
         var SongPlayer = {};
         
        /**
        * @desc Current Song
        * @type {Number}
        */
        var currentSong = null;
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
                currentSong.playing = null;
            }
        
            currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
            });

            currentSong = song;
        };

        /**
        * @function playSong
        * @desc Plays current song; sets song.playing = true
        * @param {Object} song
        */
        var playSong = function(song) {
            currentBuzzObject.play();
            song.playing = truel
        };

        /**
        * @function SongPlayer.play
        * @desc Plays current song if paused otherwise the selected song
        * @param {Object} song
        */
        SongPlayer.play = function(song) {
            if (currentSong !== song) {
                setSong(song);
                playSong(song);
            } else if (currentSong === song) {
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
            currentBuzzObject.pause();
            song.playing = false;
        };

        return SongPlayer;
    }    
    angular
        .module('blocJams')
        .factory('SongPlayer', SongPlayer);
})();
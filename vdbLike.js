/* requires JQuery */
/* Functions that can be used for liking a Vocadb Song using CORS
  Bind checkVdbLike to a button, and visual cue/tooltip messages
  to results */
  
function TryVdbLike(songId) {
    //Send GET request to URL to check whether the song is already liked/favorited
    // to avoid overwriting user preference. If there is no rating, it will like the song.
    var userVdbSongPreference = $.ajax({
        type: "GET",
        url: "http://vocadb.net/api/users/current/ratedSongs/" + songId,
        xhrFields: {
            withCredentials: true
        },
        dataType: "json"
    });

    userVdbSongPreference.fail(function (jqXHR, textStatus) {
        console.log("Request failed: " + textStatus);
        // "You're probably not logged in!"
    });

    userVdbSongPreference.done(function (res) {
        processVdbLike(res, songId);
    });
}

function processVdbLike(pref, songId) { //'Like', 'Favorite', 'Nothing'
    console.log(pref);
    if (pref === "Nothing") {
        console.log(songId + " No rating; let's like!");
        likeVdbSong(songId);
    } else if (pref == "Like") {
        console.log("already liked!");
    } else if (pref == "Favorite") {
        console.log("This is favorited!");
    }
};

// Don't use this directly because it can overwrite a favorite
function likeVdbSong(songId) {
    console.log("Liking song " + songId);
    $.ajax({
        type: "POST",
        url: "http://vocadb.net/api/users/current/ratedSongs/' + songId + '?rating=Like",
        xhrFields: {
            withCredentials: true
        },
        success: function () {
            console.log('likeVdbSong:ok');
        },
        error: function () {
            console.log('likeVdbSong:error');
        }
    });
}

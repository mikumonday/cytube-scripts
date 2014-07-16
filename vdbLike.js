/* requires JQuery */
/* Functions that can be used for liking a Vocadb Song using CORS
  Bind checkVdbLike to a button, and add callbacks (visual cue/tooltip messages)
  to results */
  
function checkVdbLike(songId) {
    //Send GET request to URL to check whether the song is already liked/favorited
    // to avoid overwriting user preference
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

function processVdbLike(likeness, songId) { //'Like', 'Favorite', 'Nothing'
    // Process results of checkVdbLike. Only send a like if the rating is 'Nothing'
    console.log(likeness);
    if (likeness === "Nothing") {
        console.log(songId + " No rating; let's like!");
        likeVdbSong(songId);
    } else if (likeness == "Like") {
        console.log("already liked!");
    } else if (likeness == "Favorite") {
        console.log("This is favorited!");
    }
};

function likeVdbSong(songId) {
    console.log("Liking song " + songId);
    $.ajax({
        url: 'http://vocadb.net/api/users/current/ratedSongs/' + songId + '?rating=Like',
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

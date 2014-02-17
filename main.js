/*global $, jQuery, socket*/
/*jslint maxlen: 120 */

////Set Bot color
//Rank 3 or higher
$("span.userlist_owner:contains('Teto')").css("cssText", "color: Pink !important;");
$("span.userlist_owner:contains('Yukari')").css("cssText", "color: #b600f9 !important;");
//Rank 2
//$("span.userlist_op:contains('Teto')").css("cssText", "color: Pink !important;");

////Set favicon
//Sets favicon

//Miku
//$("<link id='favicon' type='image/x-icon' rel='shortcut icon' href='http://i.imgur.com/OzAC4l0.png' />")
//.appendTo("head");
//Luka
//$("<link id='favicon' type='image/x-icon' rel='shortcut icon' href='http://i.imgur.com/D5a7WTY.png' />")
//.appendTo("head");
//Teto(bread)
$("<link id='favicon' type='image/x-icon' rel='shortcut icon' href='http://i.imgur.com/5yaKt1u.png' />")
    .appendTo("head");

//re-apply Yukari color every chat message

function colorbot() {
    "use strict";
    $("span.userlist_owner:contains('Teto')")
        .css("cssText", "color: Pink !important;");
    $("span.userlist_owner:contains('Yukari')")
        .css("cssText", "color: #b600f9 !important;");
}

socket.on("chatMsg", colorbot);


// $("#showvdb, #vdbcontrol").remove();

// $("#plcontrol").append('<button id="showvdb" title="Show Song Information" data-toggle="collapse"\
     // data-target="#vdbcontrol" class="btn btn-sm btn-success">\
   // <span class="glyphicon glyphicon-music"></span></button>');

// $("#rightpane-inner").prepend('<div id="vdbcontrol" class="plcontrol-collapse col-lg-12 col-md-12 collapse"\
    // style="height: auto;"><div class="vertical-spacer"></div><div class="input-group">\
  // <div id="vdbslot"></div></div></div>');

var randPic = function() {
  var numb = Math.floor(Math.random() * pictures.length);
  return numb;
};
var pictures = [
  {'link': 'url goes here'}
]; 

$('#leftpane').append("<img id='pictureShow' width=100% src=" + pictures[randPic()].link + ">");

$('#pictureShow').click(function() {
  $(this).attr("src", (pictures[randPic()].link));
});


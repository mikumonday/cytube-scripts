/*global $, jQuery, socket*/
/*jslint maxlen: 120 */

////Set Bot color
$("span.userlist_owner:contains('Teto')").css("cssText", "color: Pink !important;");
$("span.userlist_owner:contains('Yukari')").css("cssText", "color: #b600f9 !important;");

//Sets favicon
//Miku
//$("<link id='favicon' type='image/x-icon' rel='shortcut icon' href='http://i.imgur.com/OzAC4l0.png' />")
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

//random picture show
var randPic = function () {
  var numb = Math.floor(Math.random() * pictures.length);
  return numb;
}
var pictures = [
  {'link': 'https://dl.dropboxusercontent.com/u/65223300/mmPictureSHow/gumi1.jpg'},
  {'link': 'https://dl.dropboxusercontent.com/u/65223300/mmPictureSHow/gumiIA.jpg'},
  {'link': 'https://dl.dropboxusercontent.com/u/65223300/mmPictureSHow/miku1.jpg'},
  {'link': 'https://dl.dropboxusercontent.com/u/65223300/mmPictureSHow/dayo1.jpg'}
]; 

$('#leftpane-inner').append("<div id='pictureShow' class='viewport'><div id='holder' " + 
                            "class='aa'><span id='pictureText' class='dark-background'>" + 
                            "Click for something different!</span><img id='picture' src='" + pictures[randPic()].link + "'></div></div>");
$('#pictureShow').mouseenter(function () {
  $('#picture').animate({height: '420', left: '0', top: '0', width: '458'}, 100);
  $('#pictureText').fadeIn(200);
});
$('#pictureShow').mouseleave(function () {
  $('#picture').animate({height: '440', left: '-20', top: '-20', width: '478'}, 100);
  $('#pictureText').fadeOut(200);
});
$('#pictureShow').click(function () {
  $('#picture').attr('src', pictures[randPic()].link);
});

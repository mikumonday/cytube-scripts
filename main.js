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
  {'link': 'https://dl.dropboxusercontent.com/u/65223300/1390864356116.jpg'},
  {'link': 'https://dl.dropboxusercontent.com/u/65223300/amx-109.jpg'},
  {'link': 'https://dl.dropboxusercontent.com/u/65223300/hamburger.png'},
  {'link': 'https://dl.dropboxusercontent.com/u/65223300/nyanpasu.JPG'}
]; 

$('#leftpane').append("<div id='pictureShow' class='viewport'><div id='holder' class='aa'>" + 
                      "<span id='pictureText' class='dark-background'>Click for something different!" + 
                      "</span><img id='picture' src='" + pictures[randPic()].link + "'></div></div>");
$('#pictureShow').mouseenter(function () {
  $('#picture').animate({height: '299', left: '0', top: '0', width: '450'}, 100);
  $('#pictureText').fadeIn(200);
});
$('#pictureShow').mouseleave(function () {
  $('#picture').animate({height: '332', left: '-20', top: '-20', width: '500'}, 100);
  $('#pictureText').fadeOut(200);
});
$('#pictureShow').click(function () {
  $('#picture').attr('src', pictures[randPic()].link);
});

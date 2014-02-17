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


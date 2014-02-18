/*global $, jQuery, socket*/
/*jslint maxlen: 120 */

var pictures = [
  {'link': 'http://twirlie.net/dd/cytube/v3/pictures/gumiku.jpg'},
  {'link': 'http://twirlie.net/dd/cytube/v3/pictures/gumi2.jpg'},
  {'link': 'http://twirlie.net/dd/cytube/v3/pictures/powapowa.jpg'},
  {'link': 'http://twirlie.net/dd/cytube/v3/pictures/rin1.jpg'}
]; 

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
 function randPic() {
  var numb = Math.floor(Math.random() * pictures.length);
  return numb;
}

$('#leftpane-inner').append("<div id='pictureShow' class='viewport'><div id='holder' " + 
                            "class='aa'><span id='pictureText' class='dark-background'>" + 
                            "Click for something different!</span><img id='picture' src='" + pictures[randPic()].link + "'></div></div>");
$('#pictureShow').mouseenter(function () {
  $('#picture').animate({height: '438', left: '-10', top: '-9', width: '478'}, 100);
  $('#pictureText').fadeIn(200);
});
$('#pictureShow').mouseleave(function () {
  $('#picture').animate({height: '418', left: '0', top: '0', width: '458'}, 100);
  $('#pictureText').fadeOut(200);
});
$('#pictureShow').click(function () {
  $('#picture').attr('src', pictures[randPic()].link);
});

/*global $, jQuery, socket*/
/*jslint maxlen: 120 */

var pictures = [
  {'link': 'http://twirlie.net/dd/cytube/v3/pictures/gumi%201.jpg', 'info': 'Gumi 1'},
  {'link': 'http://twirlie.net/dd/cytube/v3/pictures/gumi2.jpg', 'info': 'Gumi 2'},
  {'link': 'http://twirlie.net/dd/cytube/v3/pictures/gumiku.jpg', 'info': 'Gumiku'},
  {'link': 'http://twirlie.net/dd/cytube/v3/pictures/rin1.jpg', 'info': 'Rin 1'},
  {'link': 'http://twirlie.net/dd/cytube/v3/pictures/lapis.jpg', 'info': 'Lapis'},
  {'link': 'http://twirlie.net/dd/cytube/v3/pictures/gumiIA.jpg', 'info': 'GumiIA'},
  {'link': 'http://twirlie.net/dd/cytube/v3/pictures/yufu.jpg', 'info': 'Yufu'}
];
//probably don't need this
var lastPic = randPic();

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

//make a well for the playlist controls

$('.plcontrol-collapse').addClass('well');

//random picture show

//also probably don't need these
 function randPic() {
  var numb = Math.floor(Math.random() * pictures.length);
  return numb;
}
function checkPic(a) {
  var newPic = randPic();
  if(newPic !== a) {
    $('#picture').attr('src', pictures[newPic].link);
    lastPic = newPic;
  } else {
    checkPic(a);
  }
}
$('#leftpane-inner').append("<div id='pictureShow' class='viewport'><div id='holder' " + 
                            "class='aa'><span id='pictureText' class='dark-background'>" + 
                            "Click for something different!</span><img id='picture' src='" + pictures[randPic()].link + "'></div></div>");
$('#pictureShow').mouseenter(function () {
  $('#picture').animate({height: '543', left: '-10', top: '-9', width: '478'}, 100);
  $('#pictureText').fadeIn(100);
});
$('#pictureShow').mouseleave(function () {
  $('#picture').animate({height: '523', left: '0', top: '0', width: '458'}, 100);
  $('#pictureText').fadeOut(100);
});
$('#pictureShow').click(function () {
  //probably don't need this. see below
  checkPic(lastPic);
  // ***this didn't work but I'll leave it it here just in case***
  // var num = Math.floor(Math.random() * pictures.length);
  // while ($('#picture').attr('src') === pictures[num].link) {
  //   num = Math.floor(Math.random() * pictures.length);
  // }
  // $('#picture').attr('src', pictures[num].link);
});

//adds a button to change the pictureShow

$('#leftcontrols').append(
  "<div class='dropdown' id='pictureChange'><a class='btn btn-sm btn-default'" + 
  " data-toggle='dropdown' href='javascript:void(0)'>Choose Picture</a></div>"
);

$("#pictureChange").append("<ul class='dropdown-menu right' id='pictureDropdown'></ul>");
$.each(pictures, function (i) {
    "use strict";
    $("#pictureChange ul").append("<li><a href='javascript:void(0)'>" + pictures[i].info + "</a></li>");
});

$("#pictureDropdown li").click(function () {
    "use strict";
    var picIndex = ($(this).index());
    $('#picture').attr('src', pictures[picIndex].link);
});

//add a bottom info field
$('#resizewrap').append(
"<div id='bottom-info' class='col-lg-12 col-md-12'><div class='well'>" + 
"<span class='links_main'> - <a href='https://kiwiirc.com/client/irc." + 
"rizon.net/#mmonday' target='_blank'>irc(#mmonday)</a> ★ <a href='ht" + 
"tp://mikumonday.com' target='_blank'>mikumonday.com</a> ★ <a href='" + 
"http://synchtu.be/r/mikumonday' target='_blank'>backup room</a> - </" + 
"span></br><span class='large'> - <a href='https://www.dropbox" + 
".com/sh/v8993jax7eksiz1/z28DaYgicB' target='_blank'>Adams lists</a> " + 
"- <a href='https://plus.google.com/communities/107630350215753976745" + 
"' target='_blank'>Google+ Community</a> - <a href='https://twitter.c" + 
"om/MikuMonday' target='_blank'>@MikuMonday</a> - </span></br><span c" + 
"lass='large'>You can find our channel scripts on <a href='https://gi" + 
"thub.com/mikumonday/cytube-scripts' target='_blank'>github</a></span></div></div>"
//lel huge string xdxdxdxdxd
);

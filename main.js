/*global $, jQuery, socket*/
/*jslint maxlen: 120 */

var themes = [
  {'link': 'https://dl.dropbox.com/s/brhim8b5bw1hokn/mikumonday.css', 'name': 'Miku Monday'},
  {'link': 'https://dl.dropbox.com/s/brhim8b5bw1hokn/mikumonday.css', 'name': 'Miku Monday2'},
  {'link': 'https://dl.dropbox.com/s/brhim8b5bw1hokn/mikumonday.css', 'name': 'Miku Monday3'},
  {'link': 'https://dl.dropbox.com/s/brhim8b5bw1hokn/mikumonday.css', 'name': 'Miku Monday4'}
];


//non temp
$(".add-temp").attr('checked', false);

////Set Bot color
$("span.userlist_owner:contains('Teto')").css("cssText", "color: Pink !important;");
$("span.userlist_owner:contains('Yukari')").css("cssText", "color: #b600f9 !important;");

//Sets favicon
//Miku
$("<link id='favicon' type='image/x-icon' rel='shortcut icon' href='http://i.imgur.com/OzAC4l0.png' />")
.appendTo("head");
//Teto(bread)
// $("<link id='favicon' type='image/x-icon' rel='shortcut icon' href='http://i.imgur.com/5yaKt1u.png' />")
//     .appendTo("head");

//re-apply Yukari color every chat message
function colorbot() {
    "use strict";
    $("span.userlist_owner:contains('Teto')")
        .css("cssText", "color: Pink !important;");
    $("span.userlist_owner:contains('Yukari')")
        .css("cssText", "color: #b600f9 !important;");
}
socket.on("chatMsg", colorbot);

// custom themeing

for(i=0; i<themes.length; i++) {
  $('#us-theme').append('<option value="' + themes[i].link + '">' + themes[i].name + '</option>');
}

//make a well for the playlist controls

$('.plcontrol-collapse').addClass('well');

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

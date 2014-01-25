/*global $, jQuery, socket*/
//Prevent multiple prepends/appends from appearing on script reload
$(".banner1,#btnChangeBg,#btnBgCaret,#divClicky").remove();

//hides built in MOTD toggle button
$("#togglemotd").hide();

//array of banners and backgrounds
var banners = [
        {link: "", info: ""}
    ],
    backgrounds = [
        {link: "", title: ""}
    ];

//Sets ApiMiku, Yukari color
$("span.userlist_op:contains('Rin')").css("cssText", "color: Goldenrod !important;");
$("span.userlist_owner:contains('Yukari')").css("cssText", "color: #b600f9 !important;");

//Sets favicon
$("<link id='favicon' type='image/x-icon' rel='shortcut icon' href='http://i.imgur.com/OzAC4l0.png' />").appendTo("head");
//Rin anniversary
//$("<link id='favicon' type='image/x-icon' rel='shortcut icon' href='http://i.imgur.com/oJhN7M5.png' />").appendTo("head");

//$("span.userlist_owner:contains('Rin')").append("<img src='http://i.imgur.com/mpONT5H.png'>");

//Adds banner
var randomBanner = Math.floor(Math.random() * banners.length);
$("#toprow").prepend("<div class='banner1 center span12'><img src= '" + (banners[randomBanner].link) + "' id = 'mmbanner'" + "></div>");
$(".mmbanner").attr("title", banners[randomBanner].info); //apply after to avoid quotation mark conflict

//Sets random background
$("body").css({"background-image": "url(" + backgrounds[Math.floor(Math.random() * backgrounds.length)].link + ")"});

//Adds Miku sprites
$(".banner1.span12").append("<div id='divClicky'></br></div>"); //make div under banner
var spriteIds = ["amikum", "amikui", "amikuk", "amikuu", "amikusan", "amikukyuu"];
$.each(spriteIds, function (i) {
    "use strict";
    $("#divClicky").append("<img id='" + spriteIds[i] + "' class='mikusprite' src='http://i.imgur.com/SqwUy2n.png'>");
});

//Adds button to change background
$("#qualitywrap").append("<button class='btn btn-small' id = 'btnChangeBg'>Change background</button>");

//Adds caret button
$("#qualitywrap").append("<div class='btn-group' id='btnBgCaret'><a class='btn btn-small' data-toggle='dropdown' href='javascript:void(0)'><b class='caret'></b></a></div>");

//Creates dropdown list
$("#btnBgCaret").append("<ul class='dropdown-menu right' id='caretDropdown'></ul>");
$.each(backgrounds, function (i) {
    "use strict";
    $("#btnBgCaret ul").append("<li><a href='javascript:void(0)'>" + backgrounds[i].info + "</a></li>");
});

//Check if darkstrap/altdark is used, if so load fordark.css/foraltdark.css
if ($("#usertheme").attr("href") === "assets/css/darkstrap.css") {
    $("<link/>", {rel: "stylesheet", href: "http://twirlie.net/dd/cytube/fordark.css"}).appendTo($("head"));
} else if ($("#usertheme").attr("href") === "assets/css/altdark.css") {
    $("<link/>", {rel: "stylesheet", href: "http://twirlie.net/dd/cytube/foraltdark.css"}).appendTo($("head"));
}

//Function Miku sprites on click
$(".mikusprite").click(function () {
    "use strict";
    var currentPosition = $(this).css("background-position").split(" "), currentId = $(this).attr("id");
    if ((parseInt(currentPosition[1], 10)) < -32) {
        if (currentId === "amikum") {
            $(this).css("background-position", "0px 0px");
        } else if (currentId === "amikui") {
            $(this).css("background-position", "-16px 0px");
        } else if (currentId === "amikuk") {
            $(this).css("background-position", "-32px 0px");
        } else if (currentId === "amikuu") {
            $(this).css("background-position", "-48px 0px");
        } else if (currentId === "amikusan") {
            $(this).css("background-position", "-64px 0px");
        } else if (currentId === "amikukyuu") {
            $(this).css("background-position", "-80px 0px");
        }
    } else {
        $(this).css("background-position", currentPosition[0] + " " + (parseInt(currentPosition[1], 10) - 16) + "px");
    }
});

//Function random banner on click
$("#mmbanner").click(function () {
    "use strict";
    randomBanner = Math.floor(Math.random() * banners.length);
    //prevent same banner from loading
    while (($(this).attr("src")) === (banners[randomBanner].link)) {
        randomBanner = Math.floor(Math.random() * banners.length);
    }
    $(this).addClass("mmbanner_gray");
    $(this).attr("src", (banners[randomBanner].link));
    $(this).load(function () {//waits until image is done loading
        $(this).removeClass("mmbanner_gray");//toggleClass didn't work all the time
        $(this).addClass("mmbanner_normal");
        $(this).attr("title", banners[randomBanner].info);
    });
});

//Function random background on #btnChangeBg click
$("#btnChangeBg").click(function () {
    "use strict";
    var randomBackground = Math.floor(Math.random() * backgrounds.length), currentBackgroundUrl = $("body").css("background-image");
    currentBackgroundUrl = currentBackgroundUrl.replace("url(", "").replace(")", ""); //extracts url
    while (currentBackgroundUrl === (backgrounds[randomBackground].link)) {// prevent same banner from loading
        randomBackground = Math.floor(Math.random() * backgrounds.length);
    }
    $("body").css({"background-image": "url(" + backgrounds[randomBackground].link + ")"});
});

//Function caret (bg change) button functions
$("#caretDropdown li").click(function () {
    "use strict";
    var bgIndex = ($(this).index());
    $("body").css({"background-image": "url(" + backgrounds[bgIndex].link + ")"});
});

//Show/Hide MOTD by nuclearace
var hidden = false;
var showHide = $("<li/>").click(function () {
    "use strict";
    if (hidden === false) {
        $("#motdwrap").slideUp();
        hidden = true;
        $("#hideMOTD").text("Show MOTD");
    } else if (hidden === true) {
        $("#motdwrap").slideDown();
        $("#hideMOTD").text("Hide MOTD");
        hidden = false;
    }
}).html("<a id='hideMOTD' href='javascript:void(0)'>Hide MOTD</a>").appendTo(".nav");

function keepHidden() {
    "use strict";
    if (hidden === true) {
        $("#motdwrap").hide();
        hidden = true;
        $("#hideMOTD").text("Show MOTD (update)");
    }
}

socket.on("setMotd", keepHidden);

//re-apply Yukari color every chat message
function colorbot() {
    "use strict";
    $("span.userlist_owner:contains('Yukari')").css("cssText", "color: #b600f9 !important;");
    $("span.userlist_owner:contains('Rin')").css("cssText", "color: Goldenrod !important;");
}

socket.on("chatMsg", colorbot);

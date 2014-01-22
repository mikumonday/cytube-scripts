/*global $, jQuery, socket*/
//Prevent multiple prepends/appends from appearing on script reload
$(".banner1,#btnChangeBg,#btnBgCaret,#divClicky").remove();

//hides built in MOTD toggle button
$("#togglemotd").hide();

var banners = [
        ["http://i.imgur.com/wDwp8tL.jpg", "田村ヒロ - 鏡音リン-Project DIVA- (4950314)"],
        ["http://i.imgur.com/7oQKMGF.jpg", "のん - -Project DIVA-f (30736870)"],
        ["http://i.imgur.com/et3QX7R.jpg", "雨 - 森の音楽 (26233578)"],
        ["http://i.imgur.com/lB62R6l.jpg", "\"sakia - 雨後☀ (22437200)"],
        ["http://i.imgur.com/D9Cxj7e.jpg", ""],
        ["http://i.imgur.com/XQ2scKV.jpg", ""],
        ["http://i.imgur.com/RtsLrFU.jpg", "いちち - VOCALOID ALL (22389822)"],
        ["http://i.imgur.com/ZbfOQ1m.jpg", ""],
        ["http://i.imgur.com/k50el1w.jpg", ""],
        ["http://i.imgur.com/gmWl1gF.jpg", ""],
        ["http://i.imgur.com/TDxhCaC.jpg", "夜宵 - present for you (25549526)"],
        ["http://i.imgur.com/gjo9Qu0.png", "✿HARUMARU - We are too sexy (17783465)"],
        ["http://i.imgur.com/XsOzh7n.jpg", "青星 - 3DS (26101665)"],
        ["http://i.imgur.com/N4KFgQa.gif", ""],
        ["http://i.imgur.com/Yd8Se2w.jpg", "TNSK - 夏 (12389701)"],
        ["http://i.imgur.com/m9s6xU2.jpg", ""],
        ["http://i.imgur.com/P9oENtt.jpg", "百円ライター - GUNNERS (9016879)"],
        ["http://i.imgur.com/RgnFIDU.png", "R.I.P."],
        ["http://i.imgur.com/GVcDgqi.png", "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"],
        ["http://i.imgur.com/ToGRPfY.png", "IA A      "],
        ["http://i.imgur.com/5jZGodp.jpg", "けかん - ペンタブのペン見つかりました (24318811)"],
        ["http://i.imgur.com/2WBIm1o.jpg", "ガガ - 今日の私はかわいいのよ！！ (15965804)"],
        ["http://i.imgur.com/8YJwXYK.jpg", "猫魚 - 七色虹ミク（完成ver） (2556437)"],
        ["http://i.imgur.com/zxlsMFo.gif", "いくら。 - We are POP☆CANDY!　～どんなときも (1883640)"],
        ["http://i.imgur.com/gXxWDIx.png", "mizuki - VOCALOIDS (11128950)"],
        ["http://i.imgur.com/xxLqFBR.jpg", "いろは - ボカロスイーツ (35938373)"],
        ["http://i.imgur.com/EREBFhx.jpg", "Aちき - 進撃の (36329191)"],
        ["http://i.imgur.com/JgSCpbW.jpg", "竜宮ツカサ（マンボウの姉） - キッチンでカッパがタニシ茹でてる (18252873)"],
        ["http://i.imgur.com/fMaxzgA.jpg", "ぶらんか。 - 「はい、よくできましたね♥」 (36497649)"],
        ["http://i.imgur.com/YUaZdan.png", "景 - gumi (35037295)"],
        ["http://i.imgur.com/BOfcLLO.png", "MACCO - ＧＵＭＩ誕+α (36441477)"],
        ["http://i.imgur.com/ss4yDGh.jpg", "ぶるぼんさちりか - もじゅパフェ (33976561)"],
        ["http://i.imgur.com/qgiFJ0U.jpg", "Rella - １６＋３ (12943548)"],
        ["http://i.imgur.com/It02NJr.jpg", "さをう銀河 - ☆laminate card☆ (37009930)"],
        ["http://i.imgur.com/iRsa0bd.png", "くれを - つままれっ子 (37680595)"],
        ["http://i.imgur.com/Xen3Rf7.jpg", "えこいくしま - 桜ノ雨　僕らが巡り逢えた奇跡 (38090394)"],
        ["http://i.imgur.com/RinKvSq.jpg", "wogura - VOCALOID QUEST (12389872)"],
        ["http://i.imgur.com/SN2nyAj.jpg", "IKU♥1539 - ┇M A Y U┇ (32007420)"],
        ["http://i.imgur.com/QhPletE.jpg", "零花 - Delights! (29101060)"],
        ["http://i.imgur.com/cujgE1f.jpg", "Rella - 君と会えた、そんな夢 (36224612)"],
        ["http://i.imgur.com/Kj5D5sS.jpg", "じゅんじ - 終焉世界の彼女 (10563911)"],
        ["http://i.imgur.com/iBbZkfu.png", "sweeter - sweeter (17852940)"],
        ["http://i.imgur.com/h59ZFcN.jpg", "由杞 - ちび (31579148)"],
        ["http://i.imgur.com/j9DVw9S.png", "saberiii - Miku In aerospace museum (36856676)"],
        ["http://i.imgur.com/lFGsAYa.png", "8’108 - 人人人人人人人人 (34949980)"],
        ["http://i.imgur.com/vf0DEnY.jpg", "eruri - さかな (35850654)"],
        ["http://i.imgur.com/I4JPtYl.png", "ソウノ - お誕生日おめでとう！ (38182653)"],
        ["http://i.imgur.com/pIN73cF.png", "驫麤 - 見つけた!!! (36778151)"],
        ["http://i.imgur.com/KvPUOSB.jpg", "garakuta666 - おめでとう！"],
        ["http://i.imgur.com/CVIy4qM.gif", "CHRIS - ()"],
        ["http://i.imgur.com/RYeo9Lx.jpg", "零花 - RealitY (32258884)"]
    ];

var backgrounds = [
        ["http://i.imgur.com/s9o7nU8.png", "Miku"],
        ["http://i.imgur.com/rYEGbVr.png", "Meltdown Rin"],
        ["http://i.imgur.com/C6KKCHh.png", "Rin/Len"],
        ["http://i.imgur.com/0RNYHxV.png", "Lapis"],
        ["http://i.imgur.com/iWadiwG.png", "Yukari"],
        ["http://i.imgur.com/nAAnd8x.png", "IA"],
        ["http://i.imgur.com/mdU9DIV.png", "GUMI"],
        ["http://i.imgur.com/otiLstO.png", "GUMI 2"],
        ["http://i.imgur.com/M1b9nYo.png", "Miku 2"],
        ["http://i.imgur.com/POp4n89.png", "CUL"],
        ["http://i.imgur.com/9ShHSGe.png", "Rin 2"],
        ["http://i.imgur.com/i1fMmOv.png", "Miku Rin"],
        ["http://i.imgur.com/vot01eX.png", "Rin IA"],
	["http://i.imgur.com/zSgUfzC.png", "Miku Rin"],
	["http://i.imgur.com/1hnTPZg.png", "Yan He"],
	["http://i.imgur.com/pItaVIr.png", "Tianyi"]
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
$("#toprow").prepend("<div class='banner1 center span12'><img src= '" + (banners[randomBanner][0]) + "' id = 'mmbanner'" + "></div>");
$(".mmbanner").attr("title", banners[randomBanner][1]); //apply after to avoid quotation mark conflict

//Sets random background
$("body").css({"background-image": "url(" + backgrounds[Math.floor(Math.random() * backgrounds.length)][0] + ")"});

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
$("#qualitywrap").append("<div class='btn-group' id='btnBgCaret'><a class='btn btn-small dropdown-toggle' data-toggle='dropdown' href='javascript:void(0)'><b class='caret'></b></a></div>");

//Creates dropdown list
$("#btnBgCaret").append("<ul class='dropdown-menu right' id='caretDropdown'></ul>");
$.each(backgrounds, function (i) {
    "use strict";
    $("#btnBgCaret ul").append("<li><a href='javascript:void(0)'>" + backgrounds[i][1] + "</a></li");
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
    while (($(this).attr("src")) === (banners[randomBanner][0])) {
        randomBanner = Math.floor(Math.random() * banners.length);
    }
    $(this).addClass("mmbanner_gray");
    $(this).attr("src", (banners[randomBanner][0]));
    $(this).load(function () {//waits until image is done loading
        $(this).removeClass("mmbanner_gray");//toggleClass didn't work all the time
        $(this).addClass("mmbanner_normal");
        $(this).attr("title", banners[randomBanner][1]);
    });
});

//Function random background on #btnChangeBg click
$("#btnChangeBg").click(function () {
    "use strict";
    var randomBackground = Math.floor(Math.random() * backgrounds.length), currentBackgroundUrl = $("body").css("background-image");
    currentBackgroundUrl = currentBackgroundUrl.replace("url(", "").replace(")", ""); //extracts url
    while (currentBackgroundUrl === (backgrounds[randomBackground][0])) {// prevent same banner from loading
        randomBackground = Math.floor(Math.random() * backgrounds.length);
    }
    $("body").css({"background-image": "url(" + backgrounds[randomBackground][0] + ")"});
});

//Function caret (bg change) button functions
$("#caretDropdown li").click(function () {
    "use strict";
    var bgIndex = ($(this).index());
    $("body").css({"background-image": "url(" + backgrounds[bgIndex][0] + ")"});
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

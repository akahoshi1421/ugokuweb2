var elemTop = [];

function POsitionCheck()
{
    var headerH = $("#header").outerHeight(true);
    $(".scroll-point").each(function(i){
        elemTop[i] = Math.round(parseInt($(this).offset().top - headerH));
    });

}

function ScrollAnime()
{
    let scroll = Math.round($(window).scrollTop());
    let NavElem = $("#g-nav li");
    $("#g-nav li").removeClass("current");
    if(scroll >= 0 && scroll < elemTop[1]){
        $(NavElem[0]).addClass("current");
    }
    else if(scroll >= elemTop[1] && scroll < elemTop[2]){
        $(NavElem[1]).addClass("current");
    }
    else if(scroll >= elemTop[2] && scroll < elemTop[3]){
        $(NavElem[2]).addClass("current");
    }
    else if(scroll >= elemTop[3]){
        $(NavElem[3]).addClass("current");
    }
}

$("#g-nav a").click(function(){
    let elemHash = $(this).attr("href");
    let headerH = $("#header").outerHeight(true);
    let pos = Math.round($(elemHash).offset().top - headerH);
    $("body, html").animate({scrollTop: pos}, 500);
    return false;
});

$(window).scroll(function(){
    POsitionCheck();
    ScrollAnime();
});

$(window).on("load", function(){
    POsitionCheck();
    ScrollAnime();
})

$(window).resize(function(){
    POsitionCheck();
});
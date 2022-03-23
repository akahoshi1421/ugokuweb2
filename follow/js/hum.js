function FixedAnime()
{
    let headerH = $("#header").outerHeight(true);
    let scroll = $(window).scrollTop();
    if(scroll >= headerH){
        $(".openbtn").addClass("fadeDown");
        $("#header").addClass("dnone");
    }
    else{
        $(".openbtn").removeClass("fadeDown");
        $("#header").removeClass("dnone")
    }
}

$(window).scroll(function(){
    FixedAnime();
});

$(window).on("load", function(){
    FixedAnime();
});

$(".openbtn").click(function(){
    $(this).toggleClass("active");
    $("#header").toggleClass("panelactive");
});

$("#g-navi li a").click(function(){
    let elmHash = $(this).attr("href");
    let pos = $(elmHash).offset().top;
    $("body,html").animate({scrollTop: pos}, 1000);
    return false;
});
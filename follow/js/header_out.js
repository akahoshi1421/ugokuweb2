var beforePos = 0;

function ScrollAnime()
{
    let elemTop = $("#area-2").offset().top;
    let scroll = $(window).scrollTop();
    if(scroll == beforePos){
        ;
    }
    else if(elemTop > scroll || 0 > scroll - beforePos){
        $("#header").removeClass("UpMove");
        $("#header").addClass("DownMove");
    }
    else{
        $("#header").removeClass("DownMove");
        $("#header").addClass("UpMove");
    }
    beforePos = scroll;
}

$(window).scroll(function(){
    ScrollAnime();
})

$(window).on("load", function(){
    ScrollAnime();
});

var headerH = $("#header").outerHeight(true);
$("#g-navi li a").click(function(){
    let elemHash = $(this).attr("href");
    let pos = $(elemHash).offset().top - headerH;
    $("body, html").animate({scrollTop: pos}, 100)
    return false;
});
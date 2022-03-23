function FixedAnime()
{
    let headerH = $("#header").outerHeight(true);
    let scroll = $(window).scrollTop();
    if(scroll >= headerH){
        $("#header").addClass("fixed");
    }
    else{
        $("#header").remove("fixed");
    }
}

$(window).scroll(function(){
    FixedAnime();
});

$(window).on("load", function(){
    FixedAnime();
});
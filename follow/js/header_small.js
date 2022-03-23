var headerH = $("#header").outerHeight(true);

function FixedAnime()
{
    let scroll = $(window).scrollTop();
    if(scroll >= headerH){
        $("#header").addClass("HeightMin");
    }
    else{
        $("#header").removeClass("HeightMin");
    }
}

$(window).scroll(function(){
    FixedAnime();
})

$(window).on("load", function(){
    FixedAnime();
});

$("#g-navi li a").click(function(){
    let headerVal = $("#header").outerHeight(true);

    let scroll = $(window).scrollTop();
    let ajust = 0;
    if(scroll <= headerVal){
        ajust = 70;
    }

    let elemHash = $(this).attr("href");
    let pos = $(elemHash).offset().top - headerVal - headerH - ajust;
    $("body, html").animate({scrollTop: pos}, 1000);
    return false;
})
function FixedAnime()
{
    let elemTop = $("#area-3").offset().top;
    let scroll = $(window).scrollTop();
    if(scroll <= 20){
        $("#header").addClass("DownMove");
    }
    else if(scroll >= elemTop){
        
        $("#header").removeClass("UpMove");
        $("#header").removeClass("DownMove");
    }
    else{
        if($("#header").hasClass("DownMove")){
            $("#header").removeClass("DownMove");
            $("#header").addClass("UpMove");
        }
    }
}

$(window).scroll(function(){
    FixedAnime();
});

$(window).on("load", function(){
    FixedAnime();
})
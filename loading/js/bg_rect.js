$(window).on("load", function(){
    
    $("#splash").delay(100).fadeOut("slow", function(){
        $("body").addClass("appear");
        let h = $(window).height();
        $(".splashbg").css({
            "border-width": h,
            "animation-name": "backBoxAnime"
        });
    });
    $("#splash-logo").delay(1500).fadeOut("slow");
});
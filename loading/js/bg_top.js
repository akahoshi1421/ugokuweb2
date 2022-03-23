$(window).on("load", function(){
    $("#splash-logo").delay(1200).fadeOut("slow");
    $("#splash").delay(100).fadeOut("slow", function(){
        $("body").addClass("appear");
    });
    $(".splashbg").on("animationend", function(){

    });
});
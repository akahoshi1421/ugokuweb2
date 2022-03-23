var stroke;

stroke = new Vivus("mask", {
    start: "manual",
    type: "scenario-sync",  
    duration: 50,
    forceRender: false,
    animTimingFunction: Vivus.EASE,
});

$(window).on("load", function(){
    $("#splash").delay(1500).fadeOut("slow");
    $("#splash_logo").delay(1500).fadeOut("slow");
    stroke.play();
})
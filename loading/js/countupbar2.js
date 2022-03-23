var bar = new ProgressBar.Line(splash_text,{
    easing: "easeInOut",
    strokeWidth: 0.8,
    duration: 1000,
    trailWidth: 0.8,
    color: "#555",
    trailColor: "#bbb",
    text:{
        style:{
            position: "absolute",
            left: "50%",
            top: "50%",
            padding: "0",
            margin: "-30px 0 0 0",
            transform: "translate(-50%, -50%)",
            "font-size": "1rem",
            color: "#fff",
        },
        autoStyleContainer: false
    },
    step: function(state, bar){
        bar.setText(Math.round(bar.value() * 100) + " %");
    }
});

bar.animate(1.0, function(){
    $("#splash_text").fadeOut(10);
    $(".loader_cover-up").addClass("coveranime");
    $(".loader_cover-down").addClass("coveranime");
    $("#splash").fadeOut();
})
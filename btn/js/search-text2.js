$(".open-btn").click(function(){
    $("#search-wrap").addClass("panelactive");
    $("#search-text").focus();
});

$(".close-btn").click(function(){
    $("#search-wrap").removeClass("panelactive");
});
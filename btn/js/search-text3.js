$(".open-btn").click(function(){
    $(this).toggleClass("btnactive");
    $("#search-wrap").toggleClass("panelactive");
    $("#search-text").focus();
});
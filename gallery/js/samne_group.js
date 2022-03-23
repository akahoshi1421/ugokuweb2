$(".gallery-list").modaal({
    fullscreen: "true",
    before_open: function(){
        $("html").css("overflow-y", "hidden");
    },
    after_close: function(){
        $("html").css("overflow-y", "scroll");
    }
});
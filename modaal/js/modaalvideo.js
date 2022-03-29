var access = $.cookie("access")
if(!access){
    flag = true;
    $.cookie("access", false);
}else{
    flag = false;
}

$(".video-open").modaal({
    start_open: flag,
    overlay_close: true,
    type: "video",
    background: "#28BFE7",
    overlay_opacity: 0.8,
    before_open: function(){
        $("html").css("overflow-y", "hidden");
    },
    after_close: function(){
        $("html").css("overflow-y", "scroll");
    }
});
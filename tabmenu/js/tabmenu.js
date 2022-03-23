function GethashID(hashIDName){
    if(hashIDName){
        $(".tab li").find("a").each(function(){
            let idName = $(this).attr("href");
            if(idName == hashIDName){
                let parentElm = $(this).parent();
                $(".tab li").removeClass("active");
                $(parentElm).addClass("active");
                $(".area").removeClass("is-active");
                $(hashIDName).addClass("is-active");
            }
        });
    }
}

$(".tab a").on("click", function(){
    let idName = $(this).attr("href");
    GethashID(idName);
    return false;
});

$(window).on("load", function(){
    $(".tab li:first-of-type").addClass("active");
    $(".area:first-of-type").addClass("is-active");
    let hashName = location.hash;
    GethashID(hashName);
});
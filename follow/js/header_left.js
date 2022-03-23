$("#g-navi li a").click(function(){
    let elemHash = $(this).attr("href");
    let pos = $(elemHash).offset().top;
    $("body, html").animate({scrollTop: pos}, 100)
    return false;
});
$('#page-link a[href^="#"]').click(function(){
    let elemHash = $(this).attr("href");
    let pos = $(elemHash).offset().top - 70;
    $("body,html").animate({scrollTop: pos}, 500);
    return false;
});
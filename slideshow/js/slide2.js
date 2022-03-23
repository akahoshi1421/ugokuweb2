$(".slider").slick({
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    dots: true,
    variableWidth: true,
    centerMode: true
});

$(".slider").on("touchmove", function(event, slick, currentSlide, nextSlide){
    $("slider").slick("slickPlay");
})


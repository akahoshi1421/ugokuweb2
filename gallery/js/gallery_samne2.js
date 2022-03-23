$(".gallery").slick({
    infinite: true,
    fade: true,
    arrows: true,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    asNavFor: ".choice-btn"
});

$(".choice-btn").slick({
    infinite: true,
    slidesToShow: 8,
    focusOnSelect: true,
    asNavFor: ".gallery"
});

$(".gallery").on("beforeChange", function(event, slick, currentSlide, nextSlide){
    var index = nextSlide;
    $(".choice-btn .slick-slide").removeClass("slick-current").eq(index).addClass("slick-current")
});
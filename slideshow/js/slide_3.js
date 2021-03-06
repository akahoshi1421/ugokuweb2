$(".slider").slick({
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    dots: true,
    responsive:[
        {
            breakpoint: 769,
            settings:{
                slidesToShow: 2,
                slidesToScroll: 2.
            }
        },
        {
            breakpoint: 426,
            settings:{
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});

$(".slider").on("touchmove", function(event, slick, currentSlide, nextSlide){
    $("slider").slick("slickPlay");
})


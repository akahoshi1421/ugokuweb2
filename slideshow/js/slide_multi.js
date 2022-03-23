$(".slider").slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 6900,
    infinite: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive:[
        {
            breakpoint: 769,
            settings:{
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 426,
            settings:{
                slidesToShow: 1.5,
            }
        }
    ]
});


var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
if(windowwidth > 768){
    var responsiveImage = [
        { src: './img/img_01.jpg'},
        { src: './img/img_02.jpg'},
        { src: './img/img_03.jpg'}
    ]; 
}
else{
    var responsiveImage = [
        { src: './img/img_sp_01.jpg' },
        { src: './img/img_sp_02.jpg' },
        { src: './img/img_sp_03.jpg' }
    ];
}

$("#slider").vegas({
    overlay: true,
    transition: "fade2",
    transitionDuration: 2000,
    delay: 5000,
    animationDuration: 20000,
    animation: "random",
    slides: responsiveImage,
})
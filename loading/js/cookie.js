var splash_text = $.cookie("accessdate");
var myD = new Date();
var myYear = String(myD.getFullYear());
var myMonth = String(myD.getMonth() + 1);
var myDate = String(myD.getDate());

if(splash_text != myYear + myMonth + myDate){
    $("#splash").css("display", "block");
    setTimeout(function(){
        $("#splash_logo").fadeIn(1000, function(){
            setTimeout(function(){
                $("#splash_logo").fadeOut(1000);
            }, 1000);
            setTimeout(function(){
                $("#splash").fadeOut(1000, function(){
                    myD = new Date();
                    myYear = String(myD.getFullYear());
                    myMonth = String(myD.getMonth() + 1);
                    myDate = String(myD.getDate());
                    $.cookie("accessdate", myYear + myMonth + myDate);
                });
            }, 1700);
        })
    }, 1000);
}
else{
    $("#splash").css("display", "none");
}
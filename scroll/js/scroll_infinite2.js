$(".article-list").infinitescroll({
    navSelector: ".navigation",
    nextSelector: ".navigation a",
    itemSelector: ".article-list li",
    maxPage: 3,
    animate: true,
    loading: {
        finishedMsg: "全ての記事が読み込まれました",
        msgText: "読み込み中",
        img: "svg/loading.svg",
    },
},
function(newArticle){
    $(newArticle).hide().delay(100).fadeIn(900);
    $(".navigation").appendTo(".wrapper").css("display", "black");
});

$(".article-list").infinitescroll("unbind");

$(".navigation a").click(function(){
    $(".article-list").infinitescroll("retrieve");
    return false;
});
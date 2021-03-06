//Toggle TitleBar's Classes and "Scroll To the Top" Bottom's Classes
var whetherChange = 0;
var now_color = $("meta[name='theme-color']").attr('content');
var ticking = false;
window.onscroll=function(){
    if(!ticking) {
        requestAnimationFrame(scrollDiff);
        ticking = true;
    }
    //scrollDiff();
}
function scrollDiff(){
    var howFar = document.documentElement.scrollTop || document.body.scrollTop;
    var barHight = $(".theFirstPage").height() - $(".titleBarGobal").height() - 1;
    var totalHight = $(".theFirstPage").height()*.37 - 20;
    if(howFar > barHight & whetherChange == 0){
        $(".mdui-toolbar-self").toggleClass("mdui-color-theme");
        //$("#titleBar").toggleClass("mdui-text-color-white-text");
        $("#titleBar").toggleClass("mdui-shadow-2");
        $(".scrollToTop").toggleClass("mdui-fab-hide");
        whetherChange = 1;
    }
    if(howFar <= barHight & whetherChange == 1){
        $(".mdui-toolbar-self").toggleClass("mdui-color-theme");
        $("#titleBar").toggleClass("mdui-shadow-2");
        $(".scrollToTop").toggleClass("mdui-fab-hide");
        whetherChange = 0;
    }
    if(howFar <= barHight){
        opacityHeight = (barHight - howFar)/totalHight;
        if(opacityHeight > 1){
            opacityHeight = 1;
        }
    }else if(howFar > barHight){
        opacityHeight = 0;
    }else{
        opacityHeight = 1;
    }
    $(".theFirstPage").css('opacity',opacityHeight);
    ticking = false;
};

//Scroll To the Top
$(".scrollToTop").click(function(){
    $("body,html").animate({scrollTop:0},500);
});

//Night Styles
$("#tgns").click(function(){
    $("body").toggleClass("mdui-theme-layout-dark");
    if(!sessionStorage.getItem('ns_night-styles') || sessionStorage.getItem('ns_night-styles')=='false'){
        sessionStorage.setItem('ns_night-styles', 'true');
        $("meta[name='theme-color']").attr('content',"#212121");
    }else{
        sessionStorage.setItem('ns_night-styles', 'false');
        $("meta[name='theme-color']").attr('content',now_color);
    }
});
$(function(){
    if(sessionStorage.getItem('ns_night-styles')=='true'){
        $("body").addClass("mdui-theme-layout-dark");
        $("meta[name='theme-color']").attr('content',"#212121");
    }
})

//Search
$(".seai").click(function(){
    $("#SearchBar").show();
    $(".OutOfsearchBox").fadeIn(300);
    $("#SearchBar").addClass("mdui-color-theme");
    $(".fullScreen").fadeIn(300);
    $("#SearchBar > *").animate({opacity:'1'},200);
    $(".outOfSearch").css('width','75%');
    $(".seainput").focus();
    $('body').toggleClass('mdx-search-lock');
});
$(".sea-close").click(function(){
    $(".seainput").blur();
    $("#SearchBar > *").animate({opacity:'0'},200);
    $(".fullScreen").fadeOut(300);
    $(".OutOfsearchBox").fadeOut(300);
    $(".outOfSearch").css('width','30%');
    window.setTimeout("hideBar()",300);
    $("#SearchBar").removeClass("mdui-color-theme");
    $('body').toggleClass('mdx-search-lock');
});

function hideBar(){
    $("#SearchBar").hide();
}

//LazyLoad.init
$(function() {
    $("div.LazyLoad").lazyload({
        effect : "fadeIn",
        threshold : 500,
      });
      $(".LazyLoadListImg").lazyload({
        threshold : 100,
      });

      scrollDiff();
 });
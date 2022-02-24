$(document).ready(function () {
    $(window).scroll(function(){
    //gnb
    var scTop = $(window).scrollTop();
    var gnb=$('.remember_gnb');
        if(scTop>0){							
        gnb.addClass('fix_on');						
        }else{
        gnb.removeClass('fix_on');
        }
    });
});
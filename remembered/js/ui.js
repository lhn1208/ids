
$(document).ready(function () {
    var gnb=$('.remember_gnb');
    $(window).scroll(function(){
        //gnb
        var scTop = $(window).scrollTop();
        if(scTop>0){							
            gnb.addClass('fix_on');						
        }else{
            gnb.removeClass('fix_on');
        }           
    });
    //mobile menu
    gnb.find('.menu').click(function(){
        $('body').addClass('fixed');
        $('.mobile_menu').addClass('on');
    })
    $('.mobile_menu .close').click(function(){
        $('body').removeClass('fixed');
        $('.mobile_menu').removeClass('on');
    })
    //공개여부
    $('.message .switch').on({
        click:function(e){
            $('.message .switch').toggleClass('active');
            // $(this).toggleClass('active');
        }
    });
});
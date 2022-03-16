window.onload = function () {
}

//전체메뉴
var allMenu;
function allmenu_fnc(){
    allMenu = document.getElementById("all_menu_box");
    if(!allMenu.classList.contains('active')){
        allMenu.classList.add('active');
    }else{
        allMenu.classList.remove('active');
    }      
}

function allmenu_close(){
    allMenu.classList.remove('active');
}

// footer
var familySite;
function family_fun(){
    familySite = document.getElementById("family_site");
    if(!familySite.classList.contains('active')){
        familySite.classList.add('active');
    }else{
        familySite.classList.remove('active');
    }   
}
var foo_notice_swiper = new Swiper(".drv_footer .notice_slide", {
    slidesPerView: 1,
    simulateTouch:false,
    navigation: {
        nextEl: ".drv_footer .notice_btn .swiper-button-next",
        prevEl: ".drv_footer .notice_btn .swiper-button-prev",
    },
});

// document.getElementById("allmenu_close").addEventListener('click', allmenu_close);
// function allmenu_close(){
    // allMenu.style.display = 'block'; 

// }


//         //전체메뉴
//          var $all_menu_box= $('.all_menu_box');
//          var $menu_close_btn=$all_menu_box.find('.btn_close');
//          var $menue_btn=$('.all_menu_btn');
//         $($menue_btn).click(function(){
//             if($(this).hasClass('active')){                        
//                 $(this).removeClass('active');
//                 $all_menu_box.removeClass('active');
//             }else{
//                 $(this).addClass('active');
//                 $all_menu_box.addClass('active');
//             }
//         })
//         $($menu_close_btn).click(function(){
//             $menue_btn.removeClass('active');
//             $all_menu_box.removeClass('active');
//         });



//     });
// })(jQuery);
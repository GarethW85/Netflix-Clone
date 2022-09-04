$(document).ready(function() {
    $(window).scroll(function(){
        let scroll = $(window).scrollTop();
        if(scroll > 100){
            $(".netflix-navbar").css ("background", "#0c0c0c")
        }
        else {
            $(".netflix-navbar").css ("background", "transparent")
        }
    })
})
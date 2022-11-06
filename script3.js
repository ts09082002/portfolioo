$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY >20){
           $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    $('.menu-btn').click(function(){
        $('.home .navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
})
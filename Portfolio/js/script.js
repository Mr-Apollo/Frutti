$(document).ready(function(){
    
    $(".navbar-toggler").click(function(){
        $('.navbar_toggle').toggleClass('open');
        $('.navbar-nav').toggleClass('navigation_open');
    });

    $('.counter').countUp();

});
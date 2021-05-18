$(document).ready(function(){

    var nav_height = $(".navigation").height();
    var link_height = $(".nav_link").height();

    function nav_height_links() {
        $(".nav_link").css({"padding-top": nav_height /2 -link_height /2, "padding-bottom": nav_height /2 -link_height /2});
    }
    nav_height_links();
        
    $(".nav_brurger_frame").click(function(){
        $(".navbar_nav").toggleClass("return");
        $(".nav_burger").toggleClass("nav_gurger_move");
    });
    // var nav_link_txt = ('.nav_link').text();
    $('.nav_link').hover(function(){
       var link_txt = $(this).text();
       $('.nav-link-txt').text(link_txt);
    });
});
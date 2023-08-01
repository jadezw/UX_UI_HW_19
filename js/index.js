$(document).ready(function(){

    $(".nav_bar_button").mouseover(function(){
        $(this).css('text-decoration', 'underline');
    });
    $(".nav_bar_button").mouseout(function(){
        $(this).css('text-decoration', 'none');
    });

    $(".linkedin").mouseover(function(){
        $(this).css('color', '#0072B1');
        $(this).css('background-color', '#ffffff');
    });
    $(".linkedin").mouseout(function(){
        $(this).css('color', '#ffffff');
        $(this).css('background-color', '#0072B1');
    });
    
    let pTags = $('p[id^="intro-"]').hide(),
        i = 0;

    (function cycle() { 

        pTags.eq(i).fadeIn(500)
                  .delay(1200)
                  .fadeOut(500, cycle);

        i = ++i % pTags.length;

    })();
});


$(document).ready(function(){

    $(".nav_bar_button").mouseover(function(){
        $(this).css('text-decoration', 'underline');
    });
    $(".nav_bar_button").mouseout(function(){
        $(this).css('text-decoration', 'none');
    });

    $(".Work").mouseover(function(){
        $(this).css('text-decoration', 'underline');
    });
    $(".Work").mouseout(function(){
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

    $("#lightmode-toggle-label").click(function() {

        let navClasses = $("nav")
        let headerClasses = $("header")
        let bodyClasses = $("body")
        let sectionClasses = $("section")
        let emailClasses= $("email")

        let classArr = [
            navClasses,
            headerClasses,
            bodyClasses,
            sectionClasses,
            emailClasses
        ]

        for (element of classArr){
            if (element.hasClass("light")){
                element.removeClass("light");
            } else {
                element.addClass("light");
            }
        };

    });
    

});

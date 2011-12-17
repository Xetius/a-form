/**
 * User: chudson
 * Date: 07/12/2011
 * Time: 13:28
 */
$(function() {
    $("ul.menu a")
        .css({backgroundPosition: '0px -180px'})

        .mouseover(function() {
            console.log('mouse over :' + $(this));
            $(this).stop().animate({
                    backgroundPosition: '0px 0px'
                }, 200)
        })
        .mouseout(function() {
            $(this).stop().animate({
                    backgroundPosition: '0px -180px'
                }, 200)
        })
});
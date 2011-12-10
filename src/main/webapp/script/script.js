/**
 * User: chudson
 * Date: 07/12/2011
 * Time: 13:28
 */
var AFORM = function() {
    function initialiseForm() {
        $("li.menu a")
            .css( {backgroundPosition: "0 -150px"} )
            .mouseover(function() {
                console.log('Mouse Over');
                $(this).stop().animate(
                    {backgroundPosition: "0 0"},
                    {duration: 500}
                )
            })
            .mouseout(function() {
                console.log('Mouse Out');
                $(this).stop().animate(
                    {backgroundPosition: "0 -150px"},
                    {duration: 500}
                )
            });

    };

    return {
        init:initialiseForm
    }
}();

$(document).ready(function() {
    console.log("Starting jQuery Configuration");
    AFORM.init();
});


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

function addGalleries(number) {
    for(i=1; i<=number; i++) {
        addGalleryItem(i);
    }
}

function addGalleryItem(itemNumber) {
    var li = document.createElement("li");
    var a = document.createElement("a").addClass("thumb").name("image" + itemNumber).href("gallery/" + itemNumber + ".jpg").title("image " + itemNumber);
    var img = document.createElement("img").src("thumbs/" + itemNumber + ".jpg").alt("image " + itemNumber);
    var div = document.createElement("div").innerText("Image " + itemNumber);

    img.append(div);
    a.append(img);
    li.append(a);

    $("ul.menu").append(li);
}
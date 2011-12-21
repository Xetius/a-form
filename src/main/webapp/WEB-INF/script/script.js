/**
 * User: chudson
 * Date: 07/12/2011
 * Time: 13:28
 */
var AFORM = (function ($) {
    var addGalleries = function (number) {
        for (i = 1; i <= number; i++) {
            addGalleryItem(i);
        }
    };

    var addGalleryItem = function (itemNumber) {
        var item = jQuery("<li><a><img/></a><div></div></li>");
        item.find('a').addClass('thumb').attr('name', 'image'+itemNumber).attr('href', 'gallery/'+itemNumber+'.jpg').attr('title', 'Image '+itemNumber);
        item.find('img').attr('src', 'thumbs/'+itemNumber+'.jpg').attr('alt', 'Image '+itemNumber);
        item.find('div').addClass('caption').html('Image ' + itemNumber);
        item.appendTo('div#thumbs>ul.thumbs.noscript');
    };

    return {
        setupMenu:function () {
            $("ul.menu a")
                .css({backgroundPosition:'0px -180px'})

                .mouseover(function () {
                    console.log('mouse over :' + $(this));
                    $(this).stop().animate({
                        backgroundPosition:'0px 0px'
                    }, 200)
                })
                .mouseout(function () {
                    $(this).stop().animate({
                        backgroundPosition:'0px -180px'
                    }, 200)
                })
        },

        initGallery : function () {
            addGalleries(36);
            var gallery = $('#thumbs').galleriffic({
                delay:3000, // in milliseconds
                numThumbs:20, // The number of thumbnails to show page
                preloadAhead:40, // Set to -1 to preload all images
                enableTopPager:false,
                enableBottomPager:true,
                maxPagesToShow:7, // The maximum number of pages to display in either the top or bottom pager
                imageContainerSel:'', // The CSS selector for the element within which the main slideshow image should be rendered
                controlsContainerSel:'', // The CSS selector for the element within which the slideshow controls should be rendered
                captionContainerSel:'', // The CSS selector for the element within which the captions should be rendered
                loadingContainerSel:'', // The CSS selector for the element within which should be shown when an image is loading
                renderSSControls:true, // Specifies whether the slideshow's Play and Pause links should be rendered
                renderNavControls:true, // Specifies whether the slideshow's Next and Previous links should be rendered
                playLinkText:'Play',
                pauseLinkText:'Pause',
                prevLinkText:'Previous',
                nextLinkText:'Next',
                nextPageLinkText:'Next &rsaquo;',
                prevPageLinkText:'&lsaquo; Prev',
                enableHistory:false, // Specifies whether the url's hash and the browser's history cache should update when the current slideshow image changes
                enableKeyboardNavigation:true, // Specifies whether keyboard navigation is enabled
                autoStart:false, // Specifies whether the slideshow should be playing or paused when the page first loads
                syncTransitions:false, // Specifies whether the out and in transitions occur simultaneously or distinctly
                defaultTransitionDuration:1000, // If using the default transitions, specifies the duration of the transitions
                onSlideChange:undefined, // accepts a delegate like such: function(prevIndex, nextIndex) { ... }
                onTransitionOut:undefined, // accepts a delegate like such: function(slide, caption, isSync, callback) { ... }
                onTransitionIn:undefined, // accepts a delegate like such: function(slide, caption, isSync) { ... }
                onPageTransitionOut:undefined, // accepts a delegate like such: function(callback) { ... }
                onPageTransitionIn:undefined, // accepts a delegate like such: function() { ... }
                onImageAdded:undefined, // accepts a delegate like such: function(imageData, $li) { ... }
                onImageRemoved:undefined  // accepts a delegate like such: function(imageData, $li) { ... }
            });
        }
    }
}(jQuery));
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
            // We only want these styles applied when javascript is enabled
            $('div.navigation').css({'width' : '300px', 'float' : 'left'});
            $('div.gallery-content').css('display', 'block');

            // Initially set opacity on thumbs and add
            // additional styling for hover effect on thumbs
            var onMouseOutOpacity = 0.67;
            $('#thumbs ul.thumbs li').opacityrollover({
                mouseOutOpacity:   onMouseOutOpacity,
                mouseOverOpacity:  1.0,
                fadeSpeed:         'fast',
                exemptionSelector: '.selected'
            });

            // Initialize Advanced Galleriffic Gallery
            var gallery = $('#thumbs').galleriffic({
                delay:                     2500,
                numThumbs:                 15,
                preloadAhead:              10,
                enableTopPager:            true,
                enableBottomPager:         true,
                maxPagesToShow:            7,
                imageContainerSel:         '#slideshow',
                controlsContainerSel:      '#controls',
                captionContainerSel:       '#caption',
                loadingContainerSel:       '#loading',
                renderSSControls:          true,
                renderNavControls:         true,
                playLinkText:              'Play Slideshow',
                pauseLinkText:             'Pause Slideshow',
                prevLinkText:              '&lsaquo; Previous Photo',
                nextLinkText:              'Next Photo &rsaquo;',
                nextPageLinkText:          'Next &rsaquo;',
                prevPageLinkText:          '&lsaquo; Prev',
                enableHistory:             false,
                autoStart:                 false,
                syncTransitions:           true,
                defaultTransitionDuration: 900,
                onSlideChange:             function(prevIndex, nextIndex) {
                    // 'this' refers to the gallery, which is an extension of $('#thumbs')
                    this.find('ul.thumbs').children()
                        .eq(prevIndex).fadeTo('fast', onMouseOutOpacity).end()
                        .eq(nextIndex).fadeTo('fast', 1.0);
                },
                onPageTransitionOut:       function(callback) {
                    this.fadeTo('fast', 0.0, callback);
                },
                onPageTransitionIn:        function() {
                    this.fadeTo('fast', 1.0);
                }
            });
        }
    }
}(jQuery));
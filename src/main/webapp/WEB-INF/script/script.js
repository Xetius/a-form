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

    var greyscaleImage = function (src) {
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        var imgObj = new Image();
        imgObj.src = src;
        canvas.width = imgObj.width;
        canvas.height = imgObj.height;
        ctx.drawImage(imgObj, 0, 0);
        var imgPixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
        for(var y = 0; y < imgPixels.height; y++){
            for(var x = 0; x < imgPixels.width; x++){
                var i = (y * 4) * imgPixels.width + x * 4;
                var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
                imgPixels.data[i] = avg;
                imgPixels.data[i + 1] = avg;
                imgPixels.data[i + 2] = avg;
            }
        }
        ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
        return canvas.toDataURL();
    };

    return {
        setupMenu : function () {
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
            addGalleries(35);
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
            $('#thumbs').galleriffic({
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
        },

        greyscaleButtonImages : function() {
            // Fade in images so there isn't a color "pop" document load and then on window load
            $(".buttons img").fadeIn(500);

            // clone image
            $('.buttons img').each(function(){
                var el = $(this);
                el.css({"position":"absolute"}).wrap("<div class='img_wrapper' style='display: inline-block'>").clone().addClass('img_grayscale').css({"position":"absolute","z-index":"998","opacity":"0"}).insertBefore(el).queue(function(){
                    var el = $(this);
                    el.parent().css({"width":this.width,"height":this.height});
                    el.parent().addClass("image_style");
                    el.dequeue();
                });
                this.src = greyscaleImage(this.src);
            });

            // Fade image
            $('.buttons img').mouseover(function(){
                $(this).parent().find('img:first').stop().animate({opacity:1}, 500);
            });

            $('.img_grayscale').mouseout(function(){
                $(this).stop().animate({opacity:0}, 500);
            });
        },

        setupSlideshow : function() {
            $('.home_slideshow').cycle({
                fx: 'fade'
            });
        }

    }


}(jQuery));
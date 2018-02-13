var $ = jQuery;

jQuery(document).ready(function($) {  

    $(window).load(function(){
        $('#preloader').fadeOut('slow',function(){$(this).remove();});
    });

});

// Setting up Video

var $ = jQuery;
var vidWidth = $(window).width(), vidHeight = $(window).height();

$("#video-wrap").css({
    
    'height': vidHeight
});

$('#video').videoBG({
    mp4:'assets/bg.mp4',
    ogv:'assets/bg.ogv',
    webm:'assets/bg.webm',
    poster:'assets/poster.jpg',
    scale:true,
    zIndex:0,
    height: vidHeight
});

// Navbar fixing

$("#nav-menu").stick_in_parent()


// Calling Wow

new WOW().init();


// rotating text

(function() {

    var quotes = $(".quotes");
    var quoteIndex = -1;
    
    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(1000)
            .delay(1000)
            .fadeOut(1000, showNextQuote);
    }
    
    showNextQuote();
    
})();

// smooth mouse wheel
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

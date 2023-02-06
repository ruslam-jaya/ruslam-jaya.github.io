jQuery(document).ready(function($) {

	'use strict';

    var top_header = $('.parallax-content');
    top_header.css({'background-position':'center center'}); // better use CSS

    $(window).scroll(function () {
    var st = $(this).scrollTop();
    top_header.css({'background-position':'center calc(50% + '+(st*.5)+'px)'});
    });


    $('body').scrollspy({ 
        target: '.fixed-side-navbar',
        offset: 200
    });
      
      // smoothscroll on sidenav click

    $('.tabgroup > div').hide();
        $('.tabgroup > div:first-of-type').show();
        $('.tabs a').click(function(e){
          e.preventDefault();
            var $this = $(this),
            tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
            others = $this.closest('li').siblings().children('a'),
            target = $this.attr('href');
        others.removeClass('active');
        $this.addClass('active');
        $(tabgroup).children('div').hide();
        $(target).show();
      
    })

    var owl = $("#owl-testimonials");

      owl.owlCarousel({
        
        pagination : true,
        paginationNumbers: false,
        autoPlay: 6000, //Set AutoPlay to 3 seconds
        items : 3, //10 items above 1000px browser width
        itemsDesktop : [1000,3], //5 items between 1000px and 901px
        itemsDesktopSmall : [900,2], // betweem 900px and 601px
        itemsTablet: [600,1], //2 items between 600 and 0
        itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
        
    });
});

$(document).ready(function(){
$(".fixed-side-navbar a, .primary-button a").on('click', function(event) {
if (this.hash !== "") {
event.preventDefault();
var hash = this.hash;
$('html, body').animate({
scrollTop: $(hash).offset().top
}, 800, function(){
window.location.hash = hash;
});
};
});
});

$(document).ready(function(){
  // Add smooth scrolling to all links
  $(".nav-link span").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1100, function(){
        window.location.hash = hash;
      });
    } // End if
  });
});

function socialWindow(url) {
  var left = (screen.width - 570) / 2;
  var top = (screen.height - 570) / 2;
  var params = "menubar=no,toolbar=no,status=no,width=570,height=570,top=" + top + ",left=" + left;
  // Setting 'params' to an empty string will launch
  // content in a new tab or window rather than a pop-up.
  // params = "";
  window.open(url,"NewWindow",params);
}

function setShareLinks() {
strReplace();	
  var pageUrl = encodeURIComponent(document.URL);
  var tweet = encodeURIComponent($("meta[property='og:description']").attr("content"));

  $(".social-share-facebook").on("click", function() {
    url = "https://www.facebook.com/sharer.php?u=" + pageUrl;
    socialWindow(url);
  });

  $(".social-share-twitter").on("click", function() {
    url = "https://twitter.com/share?url=" + pageUrl;
    socialWindow(url);
  });
  
  $(".social-share-ig").on("click", function() {
    url = "https://www.instagram.com/?url=" + pageUrl;
    socialWindow(url);
  });
  
  $(".social-share-wa").on("click", function() {
    url = "https://api.whatsapp.com/send?text=" + pageUrl + "%0a" + tweet;
    socialWindow(url);
  });	
}

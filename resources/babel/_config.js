'use strict';

(function () {
  
  $('[data-toggle="tooltip"]').tooltip({
    container: 'body'
  });
  $('#popup').modal('show')
 


  for (var e = window.location.pathname, t = window.location.href, s = document.querySelectorAll(".main-navbar ul li a"), a = 0; a < s.length; a++) {
    e == "/" + s[a].getAttribute("href") ? s[a].parentElement.classList.add("active") : "http://127.0.0.1:3000/" != t && "http://127.0.0.1:3000/" != e || s[0].parentElement.classList.add("active")
  }

  $('.logos-carousel').owlCarousel({
    loop: false,
    margin: 25,
    items: 5,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: false,

  })
  $('.main-carousel').owlCarousel({
    loop: true,
    margin: 15,
    nav: false,
    items: 1,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })

  var owl = $('.main-carousel');
  owl.owlCarousel();
  // Go to the next item
  $('.main-carousel-next').click(function () {
    owl.trigger('next.owl.carousel');
  })
  // Go to the previous item
  $('.main-carousel-prev').click(function () {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
  })

  //fancy box 3 start
  $('[data-fancybox="gallery"]').fancybox({
    hash: false,
    // Open/close animation type 
    // Possible values:
    //   false            - disable
    //   "zoom"           - zoom images from/to thumbnail
    //   "fade"
    //   "zoom-in-out"
    //
    animationEffect: "zoom-in-out",
    // Transition effect between slides
    //
    // Possible values:
    //   false            - disable
    //   "fade'
    //   "slide'
    //   "circular'
    //   "tube'
    //   "zoom-in-out'
    //   "rotate'
    //
    fullScreen: {
      autoStart: false
    },
    transitionEffect: "zoom-in-out",
    // Enable infinite gallery navigation
    loop: false,

    // Horizontal space between slides
    gutter: 50,

    // Enable keyboard navigation
    keyboard: true,

    // Should display navigation arrows at the screen edges
    arrows: true,

    // Should display counter at the top left corner
    infobar: true,

    // Should display close button (using `btnTpl.smallBtn` template) over the content
    // Can be true, false, "auto"
    // If "auto" - will be automatically enabled for "html", "inline" or "ajax" items
    smallBtn: "auto",

    // Should display toolbar (buttons at the top)
    // Can be true, false, "auto"
    // If "auto" - will be automatically hidden if "smallBtn" is enabled
    toolbar: "auto",

    // What buttons should appear in the top right corner.
    // Buttons will be created using templates from `btnTpl` option
    // and they will be placed into toolbar (class="fancybox-toolbar"` element)
    buttons: [
      "zoom",
      "share",
      "slideShow",
      "fullScreen",
      "download",
      "thumbs",
      "close"
    ],

    // Detect "idle" time in seconds
    idleTime: 3,

    // Disable right-click and use simple image protection for images
    protect: false,

    // Shortcut to make content "modal" - disable keyboard navigtion, hide buttons, etc
    modal: false,

    image: {
      // Wait for images to load before displaying
      //   true  - wait for image to load and then display;
      //   false - display thumbnail and load the full-sized image over top,
      //           requires predefined image dimensions (`data-width` and `data-height` attributes)
      preload: true,
    },

  });


  var myFullpage = new fullpage('#fullpage', {
    //Navigation
    menu: '#menu',
    lockAnchors: false,
    //anchors:['merhaba', 'ben-kimim', 'neler-yapiyorum', 'referanslarim', 'bana-ulasin'],
    navigation: false,
    navigationPosition: 'right',
    navigationTooltips: ['firstSlide', 'secondSlide'],
    showActiveTooltip: false,
    slidesNavigation: false,
    slidesNavPosition: 'bottom',
  
    //Scrolling
    css3: true,
    scrollingSpeed: 400,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 1000,
    scrollBar: false,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    continuousVertical: false,
    continuousHorizontal: false,
    scrollHorizontally: false,
    interlockedSlides: false,
    dragAndMove: false,
    offsetSections: false,
    resetSliders: false,
    fadingEffect: false,
    normalScrollElements: '#element1, .element2',
    scrollOverflow: true,
    scrollOverflowReset: false,
    scrollOverflowOptions: null,
    touchSensitivity: 15,
    bigSectionsDestination: null,
  
    //Accessibility
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,
  
    //Design
    controlArrows: true,
    verticalCentered: true,
    sectionsColor : ['#fff', '#fff'],
    paddingTop: '3em',
    paddingBottom: '10px',
    fixedElements: '#header, .footer',
    responsiveWidth: 0,
    responsiveHeight: 0,
    responsiveSlides: false,
    parallax: false,
    parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
    cards: false,
    cardsOptions: {perspective: 100, fadeContent: true, fadeBackground: true},
  
    //Custom selectors
    sectionSelector: '.section',
    slideSelector: '.slide',
  
    lazyLoading: true,
  
    //events
    onLeave: function(origin, destination, direction){},
    afterLoad: function(origin, destination, direction){},
    afterRender: function(){},
    afterResize: function(width, height){},
    afterReBuild: function(){},
    afterResponsive: function(isResponsive){},
    afterSlideLoad: function(section, origin, destination, direction){},
    onSlideLeave: function(section, origin, destination, direction){}
  });
	//methods
	$.fn.fullpage.setAllowScrolling(false);
  //methods
  fullpage_api.setAllowScrolling(false);

  window.addEventListener('DOMContentLoaded', (event) => {
    $('.loader').remove();
  });


})();
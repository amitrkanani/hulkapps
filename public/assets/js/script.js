$(document).ready(function () {
      $('.mobile-nav-button').on('click', function() {
      $( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(1)" ).toggleClass( "mobile-nav-button__line--1");
      $( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(2)" ).toggleClass( "mobile-nav-button__line--2");  
      $( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(3)" ).toggleClass( "mobile-nav-button__line--3");  
      
      $('.mobile-menu').toggleClass('mobile-menu--open');
      return false;
    }); 

            $('#fullpage').fullpage({
                menu: '#menu',
                anchors: ['firstPage', 'secondPage', '3rdPage'],
                sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
                autoScrolling: false,
                fitToSection: false,
                responsiveHeight: 600,
        afterResponsive: function(isResponsive){  
         }
      });
 

        $("button").click(function() {
          $('html,body').animate({
              scrollTop: $(".second").offset().top},
              'slow');
      });

      $('.parallax-section-1, .parallax-section-2').parallax({
      speed : 0.15
      });

         $("button").click(function() {
          $('html,body').animate({
              scrollTop: $(".second").offset().top},
              'slow');
      });

      $('.parallax-section-1, .parallax-section-2').parallax({
      speed : 0.15
      });


       $('.mobile-nav-button').on('click', function() {
      $( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(1)" ).toggleClass( "mobile-nav-button__line--1");
      $( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(2)" ).toggleClass( "mobile-nav-button__line--2");  
      $( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(3)" ).toggleClass( "mobile-nav-button__line--3");  
      
      $('.mobile-menu').toggleClass('mobile-menu--open');
      return false;
    }); 

  });

$('#owlone').owlCarousel({
            loop:true,
            nav:true,
            autoplay: true,
            margin: 10,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:3
                }
            }
        });
     $('#owltwo').owlCarousel({
            loop:true,
            nav:true,
            autoplay: true,
            margin: 10,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        });
     $('#owlone-four').owlCarousel({
            loop:true,
            nav:true,
            autoplay: true,
            margin: 10,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        });
var myVar;
function myFunction() {
  myVar = setTimeout(showPage, 3000);
}
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
} 
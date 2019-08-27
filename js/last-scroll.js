/*
  |-----------------------   |
  | First, Scroll Top Button |
  |-----------------------   |

*/

$(document).ready(function() {


    'use strict';
   
    //Start of the Scroll To: navbar links

    //Calculate where to stop when you scroll to this sections
    var headerHeight = $('.navbar').outerHeight();
    $('.slide-section').click(function(e) {

        var linkHref = $(this).attr("href");
        // console.log(linkHref); this will show the number of the height in the console
        $('html, body').delay(500).animate({
            scrollTop: $(linkHref).offset().top - headerHeight + 1
        }, 1000);

        e.preventDefault();

    }); //End of the Scroll To: navbar links

//Disable the right click and drag images
//document.addEventListener('contextmenu', event => event.preventDefault());
  

     $('*').on('dragstart', function () {
            return false;
        });


//Shrink navbar  -- 
$('.top-nav').remove();
// $(window).scroll(function() {
//   if ($(document).scrollTop() > 50) {
//     $('nav').addClass('shrink');
//     $('.top-nav').slideDown();
//   } else {
//     $('nav').removeClass('shrink');
//     $('.top-nav').slideUp();
//   }
// });






    //Start of show nav bar background color
    $(window).scroll(function() {
        if ($(window).scrollTop() > 10) {
    $('nav').removeClass('nav-bar-static').addClass('navbar-inverse');

           //$('nav').addClass('navbar-inverse').removeClass('nav-bar-static');

            $('nav ul li a').css("color", "#fff");

        } else {
        $('nav').addClass('nav-bar-static').removeClass('navbar-inverse');
           // $('nav').removeClass('navbar-inverse').addClass('nav-bar-static');
            //$('nav ul li a').css("color", "#fff");
            $('.nav li').removeClass('active-background');


        }


    });
    //End of show nav bar background color



 
    //On click down-arrow scroll to marketing

    $(".fa-angle-down").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".marketing-intro").offset().top
        }, 750);
    });




//Display today's day
var day;

switch (new Date().getDay()){
  
   
case 0:
      day = "Sunday";   
    break;
  case 1:
     day = "Monday";
       break;
  case 2:
      day = "Tuesday";
      break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case  6:
        day = "Saturday";
   break;
   
    default:
        day ="to see you again";
}
document.getElementById("display-day").innerHTML ="Happy " + day + "!";


//Start of Input form text fields

$('[placeholder]').focus(function() {
    $(this).attr('data-text', $(this).attr('placeholder'));
    $(this).attr('placeholder', '');
}).blur(function() {

    $(this).attr('placeholder', $(this).attr('data-text'));
});



});

//End of the Input form text fields




//Start loading-overlay function
$(window).on('load', function() {
    $('body').css("overflow", "hidden");
    $(".loading-overlay .spinner").fadeOut(2000, function() {
        /*Remove navbar-inverse after load and add this class*/
            $('nav').removeClass('navbar-inverse').addClass('nav-bar-static');
        $(this).parent().fadeOut(2000, function() {
            $('.navbar-brand span').fadeOut(1000).fadeIn(2000);
            $('body').css("overflow", "auto");
            $(this).remove();
        });

    }); // End of the loading-overlay function



    //Start of the scroll to top array section
    $(window).scroll(function() {

        if ($(window).scrollTop() > 700) {

            $('#scroll-top').show();

        } else {
            $('#scroll-top').hide();
        }


    });


    //You must put this outside of the window scroll function
    $('#scroll-top').click(function(e) {
        e.preventDefault();

        $('html, body').delay(800).animate({ scrollTop: 0 }, 1500, function(){
            $('.nav li').removeClass('active-background');
        });

    });
    //End of the scroll to top array section


    //Start of Active Class for the Menu Links
    $('.nav li').click(function(e) {
        $('.nav li').removeClass('active-background');
        $(this).addClass('active-background');
        e.preventDefault();
    });

    //End of Active Class for the Menu Links


    //Start of Media icons
    $('.social-icons a').hover(function() {

        $(this).next().slideDown(150).css("margin-top", "5px");
    });
    $('.social-icons a').mouseleave(function() {

        $(this).next().delay(800).fadeOut(100).css({ "margin-top": "8px", "display": "block" });
    });



    //End of Media icons






//About Get Qoute buttons
$('.about').remove();





    //Start of Download pfd function
    $('.hide-download').click(function(e) {
        e.preventDefault();
        $('.design-approach .download-alert').fadeIn(100, function() {
            $('.download-alert').fadeOut(8000).css("marging-top", "0px");
        });

    });

    //End of Download pfd function









    //Education Section

    $('.education-header').click(function() {
        $('.education').addClass('.show-education');
        $('.education .education-info').slideToggle(300);
    });




    //Start of fa fa-angle-double-down - scroll to my skills
    $('.down-arrow-section .fa-angle-down').click(function() {
        $('html, body').animate({ height: 'auto' }, "slow");
        window.scrollBy(0, 2500);

    });


    // Start of the contact form focus
    $('.contact-us input, textarea').focusin(function() {
        $(this).css({
            "background-color": "#FFFFCC",
            "border": "2px solid #f00",
            "color": "#999"


        });
    });

    $('.contact-us input, textarea').focusout(function() {
        $(this).css({
            "background-color": "#524e4ecc",
            "border": "2px solid #524e4ecc",
            "color": "#999"


        });
    });

    // End of the contact form focus






//Start of Digitial marketing section


 $(".get-started").click(function (e){
    e.preventDefault();
                $('html, body').animate({
                    scrollTop: $(".start-now").offset().top
                }, 2000);
            

            });

//End of Digitial marketing section









//Start of footer Media
$('.media, .disable-click a').click(function(e){
    e.preventDefault();
});
//End of footer Media








}); //end of document.ready braket

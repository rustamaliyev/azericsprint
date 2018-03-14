$(function() {

	"use strict";

	var wind = $(window);

	var main_height = $(".main-height").outerHeight();

    $(".sub-height").outerHeight(main_height);



    // scrollIt
    $.scrollIt({
      upKey: 38,                // key code to navigate to the next section
      downKey: 40,              // key code to navigate to the previous section
      easing: 'swing',         // the easing function for animation
      scrollTime: 600,          // how long (in ms) the animation takes
      activeClass: 'active',    // class given to the active nav element
      onPageChange: null,       // function(pageIndex) that is called when page is changed
      topOffset: -60            // offste (in px) for fixed top navigation
    });

    // navbar scrolling background
    wind.on("scroll",function () {

        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar-default"),
            logo = $(".navbar .logo> img");

        if(bodyScroll > 300){

            navbar.addClass("nav-scroll");
            //logo.attr('src', 'img/logo-dark.png');

        }else{

            navbar.removeClass("nav-scroll");
            //logo.attr('src', 'img/logo-light.png');
        }
    });

    wind.on("scroll",function () {

        var bodyScroll = wind.scrollTop(),
            navbarLight = $(".navbar-light"),
            logoLight = $(".navbar-light .logo> img");

        if(bodyScroll > 300){

            navbarLight.addClass("nav-scroll");
            logoLight.attr('src', 'img/logo-dark.png');

        }else{

            navbarLight.removeClass("nav-scroll");
            logoLight.attr('src', 'img/logo-dark.png');
        }
    });



    // button scroll to top
    wind.on("scroll",function () {

        var bodyScroll = wind.scrollTop(),
            button_top = $(".button-top");

        if(bodyScroll > 700){

            button_top.addClass("button-show");

        }else{

            button_top.removeClass("button-show");
        }
    });


	// owlCarousel
	$('.slider .owl-carousel').owlCarousel({
		items: 1,
		loop:true,
        mouseDrag:false,
        autoplay:true,
        smartSpeed:500,
        dots: true,
        nav: true,
        navText: ['<span>Prev <i class="fa fa-long-arrow-down" aria-hidden="true"></i></span>',
        '<span>Next <i class="fa fa-long-arrow-up" aria-hidden="true"></i></span>'],
        animateOut: 'fadeOut'
	});

    // owlCarousel
    $('.carousel .owl-carousel').owlCarousel({
        items: 1,
        loop:true,
        mouseDrag:false,
        autoplay:true,
        smartSpeed:500,
        dots: true,
        nav: true,
        navText: ['<span>Prev <i class="fa fa-long-arrow-down" aria-hidden="true"></i></span>',
        '<span>Next <i class="fa fa-long-arrow-up" aria-hidden="true"></i></span>']
    });


    // owlCarousel
    $('.team .owl-carousel').owlCarousel({
        margin: 30,
        loop:true,
        mouseDrag:false,
        autoplay:true,
        loop: true,
        smartSpeed:500,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });

    // owlCarousel
    $('.clients .owl-carousel').owlCarousel({
        items:1,
        loop:true,
        margin: 15,
        mouseDrag:false,
        autoplay:true,
        smartSpeed:500
    });


    // owlCarousel
    $('.brands .owl-carousel').owlCarousel({
        loop:true,
        margin: 50,
        dots: false,
        mouseDrag:true,
        autoplay:true,
        smartSpeed:500,
        responsiveClass:true,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:4
            },
            1000:{
                items:6
            }
        }
    });


    // counterUp
    $('.numbers .numb').counterUp({
        delay: 10,
        time: 1500
    });
    

    // YouTubePopUp
    $("a.vid").YouTubePopUp();



    // stellar
    wind.stellar();


    // progress bar
    wind.on('scroll', function () {
        $(".skills-progress span").each(function () {
            var bottom_of_object = 
            $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = 
            $(window).scrollTop() + $(window).height();
            var myVal = $(this).attr('data-value');
            if(bottom_of_window > bottom_of_object) {
                $(this).css({
                  width : myVal
                });
            }
        });
    });


    // magnificPopup
    $('.gallery .link').magnificPopup({
      delegate: 'a',
      type: 'image'
    });


    // typejs
    $('.header .caption h1 span').typed({
        strings: ["Themes", "Template", "Websites"],
        loop: true,
        startDelay: 1000,
        backDelay: 1000,
        typeSpeed: 60,
        showCursor: false,
        autoInsertCss: true
    });

});

$(window).on("load",function (){

    // Preloader
    $(".loading").fadeOut(500);

    // isotope
    $('.masonary').isotope({
      // options
      itemSelector: '.maso'
    });

    var $masonary = $('.masonary').isotope({
      // options
    });


    // isotope
    $('.gallery').isotope({
      // options
      itemSelector: '.items'
    });

    var $gallery = $('.gallery').isotope({
      // options
    });

    // filter items on button click
    $('.filtering').on( 'click', 'span', function() {

        var filterValue = $(this).attr('data-filter');

        $gallery.isotope({ filter: filterValue });

    });

    $('.filtering').on( 'click', 'span', function() {

        $(this).addClass('active').siblings().removeClass('active');

    });


    // contact form
    $('#contact-form').validator();

    $('#contact-form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form').find('.messages').html(alertBox);
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    });

});


$(document).ready(function() {

    var owl = $('.header .owl-carousel');

    owl.owlCarousel({
        items: 1,
        loop:true,
        autoplay:true,
        smartSpeed:500,
        dots: true,
        nav: true,
        autoplayTimeout: 3500
    });

    owl.on('changed.owl.carousel', function(event) {
        var item = event.item.index - 2;     // Position of the current item
        $('h4').removeClass('animated fadeInDown');
        $('h1').removeClass('animated fadeInUp');
        $('p').removeClass('animated fadeInUp');
        $('.butn').removeClass('animated zoomIn');
        $('.owl-item').not('.cloned').eq(item).find('h4').addClass('animated fadeInDown');
        $('.owl-item').not('.cloned').eq(item).find('h1').addClass('animated fadeInUp');
        $('.owl-item').not('.cloned').eq(item).find('p').addClass('animated fadeInUp');
        $('.owl-item').not('.cloned').eq(item).find('.butn').addClass('animated zoomIn');
    });


    // bg video
    $('#video').YTPlayer({
        fitToBackground: true,
        videoId: 'Lo2Vl_5Hjz0',
        mute: false
    });

});


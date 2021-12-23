
/*global $, alert, console*/

$(function(){
    'use strict';
    
    
    // Trigger nice Scroll
    $('html').niceScroll({
        cursorcolor:'#F35F0F',
        cursorborder: 0,
    });

    $('.header').height($(window).height());
    // Trigger Arrow 

    $('.header .arrow i').click(function(){
        $('html, body').animate({
            scrollTop: $('.feature').offset().top
        }, 800);
    });
    //show hidden item
    $('.show-more').click(function(){
        $('.our-work .hidden').fadeIn(2000);
    });

    // Check Testim
    var leftArrow= $('.testim .fa-chevron-left'),
        rightArrow= $('.testim .fa-chevron-right');

    function checkClients(){

        if($('.client:first').hasClass('active')){
            leftArrow.fadeOut();
        } else{
            leftArrow.fadeIn();
        }

        if($('.client:last').hasClass('active')){
            rightArrow.fadeOut();
        } else{
            rightArrow.fadeIn();
        }

    }
    checkClients();

    $('.testim i').click(function(){
        if ($(this).hasClass('fa-chevron-right')) {
           $('.testim .active').fadeOut(100, function (){
              $(this).removeClass('active').next('.client').addClass('active').fadeIn();
              checkClients();
          }) ; 
        } else{
            $('.testim .active').fadeOut(100, function (){
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                checkClients();
            }) ;  
        }
    });

 });
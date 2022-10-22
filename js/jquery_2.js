$(function(){
    'use strict'
    $('html').niceScroll({
        cursorcolor:'#f7600e',
        cursorwidth:10,
        cursorborderradius:0,
        cursorborder:'1px solid #f7600e'
    });
    $('.header').height(($(window).height()));
    $(window).resize(function(){
        $('.header').height(($(window).height()));
    })

    // scroll to features 
    $('.header .container>span').click(function(){
        $('body , html').animate({
            scrollTop:$('.features').offset().top
        },500);
    })
    var btnleft =$('.testimo .fa-chevron-left'),
        btnright =$('.testimo .fa-chevron-right');
    function chickclients(){
        if( $('.client:last').hasClass('active') ){
            btnright.fadeOut();
        }
        else{
            btnright.fadeIn();
        }
        if( $('.client:first').hasClass('active') ){
            btnleft.fadeOut();
        }
        else{
            btnleft.fadeIn();
        }
        
    }
    chickclients();
    $('.testimo i').click(function(){
        if($(this).hasClass('fa-chevron-right')){
            $('.testimo .active').fadeOut(100,function(){
                $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                chickclients();
            });
        }
        else{
            $('.testimo .active').fadeOut(100,function(){
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                chickclients();
            });
        }
    })
})
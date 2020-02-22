$(document).ready(function() {
    $('.works-slide').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        asNavFor: '.works-slide-phone'
    });
    $('.works-slide-phone').slick({
        dots: false,
        arrows: false
    });

    $('#main-nav-btn').click(function(){
        $('.navigation_block').slideToggle(700);
        if($(this).hasClass('not-active')) {
            $(this).addClass('active').removeClass('not-active');
        }else{
            setTimeout(function(){
                $('.active').addClass('not-active').removeClass('active');
            },600)
        }
    });

    $(window).bind("resize load", checkPosition);

    function checkPosition()
    {
        if($(window).innerWidth() > 948)
        {
            $('.navigation_block').css('display','block');
        }
        else{
            $('.navigation_block').css('display','none');
            setTimeout(function(){
                $('.active').addClass('not-active').removeClass('active');
            },600);
        }
    }

});
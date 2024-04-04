// Menu show

$(document).ready(function(){
    $(".navIcon").click(function(){
        $(this).siblings(".navVertical").addClass('navVerticalShow');
        $(this).siblings(".navVertical").removeClass('animate__backOutRight');
        $(this).siblings(".navVertical").addClass('animate__backInRight');
    });

    $("li.close").click(function(){
        $(this).parent().parent(".navVertical").removeClass('animate__backInRight');
        $(this).parent().parent(".navVertical").addClass('animate__backOutRight');
    });
});

$(document).ready(function(){
    var widthp = $('.thumbnail').width();
    var heightp = ((widthp * 55.5 ) / 100 );
    $('.thumbnail').height(heightp);
});
$(window).resize(function(){
    var widthp = $('.thumbnail').width();
    var heightp = ((widthp * 55.5 ) / 100 );
    $('.thumbnail').height(heightp);
});
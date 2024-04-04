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
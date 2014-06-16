$(function(){
    var fadeBegin = 10, 
    fadeFinish = 400, 
    fadingElement = $('div.scroll-down');

$(window).on('scroll', function(){
    var offset = $(document).scrollTop(), opacity = 0; 
    console.log(offset);
    if( offset <= fadeBegin ){
        opacity = 1; 
    } else if( offset <= fadeFinish ){
        opacity = 1 - offset / fadeFinish;

    }
    fadingElement.css('opacity',opacity);
});
    
    });
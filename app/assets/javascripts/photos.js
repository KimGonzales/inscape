$(function(){  
  $('.photos').masonry({
    itemSelector: '.box',
    columnWidth: 200,
    isAnimated: !Modernizr.csstransitions,
    isFitWidth: true
  });

});

$(function(){
  $('#profile-photos').masonry({
    itemSelector: '.box',
    columnWidth: 100,
    isAnimated: !Modernizr.csstransitions,
    isRTL: true
  });

});
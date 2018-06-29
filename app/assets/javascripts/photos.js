$(function(){  
  $('#photos').masonry({
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

$(function(){
  $("input.toggle").on("change", function(){
    $(this).parents("form").trigger("submit")
  })
});
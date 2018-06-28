# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
$ ->
  $('#photos').imagesLoaded ->
    $('#photos').masonry
      itemSelector: '.box'
      isFitWidth: true


$ ->
  $('#profile-photos').imagesLoaded ->
    $('#profile-photos').masonry
      itemSelector: '.box'
      isAnimated: !Modernizr.csstransitions,
      isRTL: true
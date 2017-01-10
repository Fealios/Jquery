$(document).ready(function() {
  $('.clickable').click(function(){
    // $('img').show();
    $('#walrus-showing').slideDown();
    $('#walrus-hidden').slideUp();
  });
  $('.clickable').click(function(){
    // $('img').show();
    $('#walrus-showing').slideUp();
    $('#walrus-hidden').slideDown();
  });
});

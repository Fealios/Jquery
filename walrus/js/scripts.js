$(document).ready(function() {
  $('#down').click(function(){
    // $('img').show();
    $('#walrus-showing').slideDown();
    $('#walrus-hidden').slideUp();
  });
  $('#up').click(function(){
    // $('img').show();
    $('#walrus-showing').slideUp();
    $('#walrus-hidden').slideDown();
  });
});

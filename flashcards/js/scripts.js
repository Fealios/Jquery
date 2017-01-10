$(document).ready(function(){
  $('h2').click(function(){
    $(this).next("p").toggleClass("hidden");
    $(this).parent("div").toggleClass('flashcard-front');
  });
});

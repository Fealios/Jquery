$(document).ready(function(){
  $('#meow').click(function(){
    $('#thecatsays').append('<li>Meow!</li>');
    $('#thedogsays').append('<li>Bark! </li>');
  });
  $('#bark').click(function(){
    $('#thecatsays').append('<li>Meow!</li>');
    $('#thedogsays').append('<li>Bark! </li>');
  });

  $("#cat").click(function(){
    $("body").removeClass();
    $("body").addClass("cat-background");
  })

  $("#dog").click(function(){
    $("body").removeClass();
    $("body").addClass("dog-background");
  })

})

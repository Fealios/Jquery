$(document).ready(function(){
  $('#meow').click(function(){
    $('#thecatsays').append('<li>Meow!</li>');
    $('#thedogsays').append('<li>Bark! </li>');
  });
  $('#bark').click(function(){
    $('#thecatsays').append('<li>Meow!</li>');
    $('#thedogsays').append('<li>Bark! </li>');
  });
})

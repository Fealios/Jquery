// $(document).ready(function(){
//   $('#1').click(function(){
//     $('#1p').toggleClass("hidden")
//   });
//   $('#2').click(function(){
//     $('#2p').toggleClass("hidden")
//   });
//   $('#3').click(function(){
//     $('#3p').toggleClass("hidden")
//   });
//   $('#4').click(function(){
//     $('#4p').toggleClass("hidden")
//   });
//   $('#5').click(function(){
//     $('#5p').toggleClass("hidden")
//   });
//   $('#6').click(function(){
//     $('#6p').toggleClass("hidden")
//   });
//   $('#7').click(function(){
//     $('#7p').toggleClass("hidden")
//   });
//   $('#8').click(function(){
//     $('#8p').toggleClass("hidden")
//   });
//   $('#9').click(function(){
//     $('#9p').toggleClass("hidden")
//   });
// })

$(document).ready(function(){
  $(this).click(function(){
    $(this).next("p").toggleClass("hidden");
  });
});

//Business logic

var numChecks = 0;


$(document).ready(function(){
  $('.result').hide();

  $('form#stress').submit(function(event){
    $('.result').hide();
    event.preventDefault();

    numChecks = 0;

    $('input:checkbox:checked').each(function(){
      numChecks ++;
    });

    console.log(numChecks)

    if (numChecks === 0){
      $("#fine").show();
    } else if (numChecks <= 3){
      $("#meditate").show();
    } else if (numChecks < 7){
      $("#puppy-cuddles").show();
    } else if (numChecks <= 8){
      $("#retreat").show();
    }
  });
});

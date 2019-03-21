//Business logic

var numChecks = 0;


$(document).ready(function(){
  $('.result').hide();

  $('form#stress').submit(function(event){
    event.preventDefault();

    numChecks = 0;

    $('input:checkbox:checked').each(function(){
      numChecks ++;
    });


    console.log(numChecks);
  });
});

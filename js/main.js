$('.close-advertise').click(function () {
  $('.advertise').toggle("slow");
});

var audio = document.getElementById("audio");
audio.volume = 0.2;


$('.volume-control').click(function(){
  if( $("audio").prop('muted')){
    $("audio").prop('muted',false);
    $('.volume-control').removeClass('fa-volume-off').addClass('fa-volume-up')
  }
  else{
    $("audio").prop('muted',true);
    $('.volume-control').removeClass('fa-volume-up').addClass('fa-volume-off');
  }
})


$(document).on('click', '.menu .col[href^="#"]', function (event) {
  event.preventDefault();
  var offset = 70;
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top - offset
  }, 500);
});
$(document).on('click', '.menu .col[href^="body"]', function (event) {

  event.preventDefault();
  $('html, body').animate({
    scrollTop: $('html').offset().top
  }, 500);
});

$('.contacts .col').click(function(e){
  //not checking for the right click will prevent the context-menu from showing, you may or may not want to do that
  if (e.which != 3) {
    var win = window.open($(this).attr('href'), '_blank');
    if (win) {
      //Browser has allowed it to be opened
      win.focus();
    } else {
      //Browser has blocked it
      alert('Please allow popups for this website');
    }
  }
});




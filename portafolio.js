$('.navbar-collapse ul li a').click(function() {
    $(".navbar-collapse").collapse('hide');});
  
  $('body').scrollspy({target: '.navbar-fixed-top'});
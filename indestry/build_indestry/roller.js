$(document).ready(function(){
        $('html, body').animate({
           scrollTop: $(".section4").offset().top
         }, 1000);
         $('.count').each(function () {
         $(this).prop('Counter',0).animate({
         Counter: $(this).text()
         }, {
         duration: 4000,
         easing: 'swing',
         step: function (now) {
             $(this).text(Math.ceil(now));
         }
        });
      });
    });

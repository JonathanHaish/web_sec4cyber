 $(document).ready(function() {
      $(document).scroll(function(){
        var scrol = parseInt($(document).scrollTop());
        if(scrol >= 100)
        {
          $("#nav_bar").show();
        };
        if(scrol < 100)
        {
          $("#nav_bar").hide();
          $("#div_dropdwon_P1").hide();
          $("#title_div_p").hide();
          $(".div_dropdwon_BN").hide();
          $("#title_div_BN").hide();
          $(".div_dropdwon_M").hide();
          $("#title_div_M").hide();
        };
      });
      $(".div_jump").mouseenter(function(){
        $("#btn_more").show();
      });
    });
 
    $(document).ready(function(){
      $("#HOME").click(function() {
    $('html, body').animate({
        scrollTop: $(".section1").offset().top
      }, 1000);
     });
     $("#Home").click(function() {
     $('html, body').animate({
        scrollTop: $(".section1").offset().top
      }, 1000);
     });
     $("#ABOUT").click(function() {
   $('html, body').animate({
       scrollTop: $(".section2").offset().top
     }, 1000);
    });
    $("#About").click(function() {
    $('html, body').animate({
       scrollTop: $(".section2").offset().top
     }, 1000);
    });
    $("#PRODUCTS").click(function() {
  $('html, body').animate({
      scrollTop: $(".section3").offset().top
    }, 1000);
   });
   $("#Prodact").click(function() {
   $('html, body').animate({
      scrollTop: $(".section3").offset().top
    }, 1000);
   });
   $("#Contact").click(function() {
   $('html, body').animate({
      scrollTop: $(".contact").offset().top
    }, 1000);
   });
   $("#CONTACT").click(function() {
   $('html, body').animate({
      scrollTop: $(".contact").offset().top
    }, 1000);
   });
    });
  
    $(document).ready(function(){
      $("#MARKET").click(function() {
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
     $("#Market").click(function() {
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

    });
  
     $(document).ready(function(){
       $("#card_pick1").mouseenter(function(){
          $("#pick_info_motive1").show();
          $(".display1").hide();
       });
       $("#card_pick1").mouseleave(function(){
         $("#pick_info_motive1").hide();
         $(".display1").show();
       });
       $("#card_pick2").mouseenter(function(){
          $("#pick_info_motive2").show();
          $(".display2").hide();
       });
       $("#card_pick2").mouseleave(function(){
         $("#pick_info_motive2").hide();
         $(".display2").show();
       });

       $("#card_pick3").mouseenter(function(){
          $("#pick_info_motive3").show();
          $(".display3").hide();
       });
       $("#card_pick3").mouseleave(function(){
         $("#pick_info_motive3").hide();
         $(".display3").show();
       });
       $("#card_pick4").mouseenter(function(){
          $("#pick_info_motive4").show();
          $(".display4").hide();
       });
       $("#card_pick4").mouseleave(function(){
         $("#pick_info_motive4").hide();
         $(".display4").show();
       });
       $("#PRODUCTS").mouseenter(function(){
         $("#menu_prodacts").show();
       });
       $(".menu_prodacts_hover").mouseleave(function(){
         $("#menu_prodacts").hide();
       });
     });
  
     $(document).ready(function(){
       $("#Prodact").mouseenter(function() {
         $(".div_dropdwon_P").show();
         $("#title_div_p").show();
         $(".div_dropdwon_BN").hide();
         $("#title_div_BN").hide();
         $(".div_dropdwon_M").hide();
         $("#title_div_M").hide();
       });
       $("#div_space_P").mouseleave(function() {
         $("#div_dropdwon_P1").hide();
         $("#title_div_p").hide();
       });
       $("#blogAN").mouseenter(function() {
        $(".div_dropdwon_BN").show();
        $("#title_div_BN").show();
        $("#div_dropdwon_P1").hide();
        $("#title_div_p").hide();
        $(".div_dropdwon_M").hide();
        $("#title_div_M").hide();
       });
       $(".div_dropdwon_BN").mouseleave(function(){
         $(".div_dropdwon_BN").hide();
         $("#title_div_BN").hide();
       });
       $("#Market").mouseenter(function() {
        $(".div_dropdwon_M").show();
        $("#title_div_M").show();
        $("#div_dropdwon_P1").hide();
        $("#title_div_p").hide();
        $(".div_dropdwon_BN").hide();
        $("#title_div_BN").hide();
       });
       $(".div_dropdwon_M").mouseleave(function(){
         $(".div_dropdwon_M").hide();
         $("#title_div_M").hide();
       });
       $(document).click(function(){
         $("#div_dropdwon_P1").hide();
         $("#title_div_p").hide();
         $(".div_dropdwon_BN").hide();
         $("#title_div_BN").hide();
         $(".div_dropdwon_M").hide();
         $("#title_div_M").hide();
       });
     });

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

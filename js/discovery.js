 $(function () {
     $('.mini-menu').click(function () {
         if ($('nav ul').css('display') == 'none') {
             $('nav ul').slideDown(1000);
         } else {
             $('nav ul').slideUp(1000);
         }
     });
     AOS.init();
 });

$(function() {
  
    var link = $('#navbar a.dot');
    
    // Move to specific section when click on menu link
    link.on('click', function(e) {
      var target = $($(this).attr('href'));
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 5000);
      $(this).addClass('active');
      e.preventDefault();
    });
    
    // Run the scrNav when scroll
    $(window).on('scroll', function(){
      scrNav();
    });
    
    // scrNav function 
    // Change active dot according to the active section in the window
    function scrNav() {
      var sTop = $(window).scrollTop();
      $('section').each(function() {
        var id = $(this).attr('id'),
            offset = $(this).offset().top-1,
            height = $(this).height();
        if(sTop >= offset && sTop < offset + height) {
          link.removeClass('active');
          $('#navbar').find('[data-scroll="' + id + '"]').addClass('active');
        }
      });
    }
    scrNav();
  });
  
  // $(document).ready(function(){
  //   $("img#house").mouseover(function(){
  //     $("#oops").css("display", "block");
  //   });
  //   $("img#house").mouseout(function(){
  //     $("#oops").css("display", "none");
  //   });
    
  // });
  
  
    // $(document).ready(function(){
    //   $("#house").mouseover(function(){
    //     $("this").hide();
    //   });
     
    // });
  
  
    $(document).ready(function(){
         $(".ii").mouseover(function(){
           $(".ii").css({"background-color": "black","color":"pink" ,"letter-spacing":"5px","font-size": "50px","margin-top":"50px"});
   });
         $(".ii").mouseout(function(){
           $(".ii").css({"background-color": "white","color":"black" ,"letter-spacing":"0px","font-size": "20px"});
          }); 
  
         }); 
  
    
  
    // $("p").css({"background-color": "yellow", "font-size": "200%"});
  
  
  
    $(window).scroll(function(){
      if ($(window).scrollTop() >= 300) {
          $('nav').addClass('fixed-header');
          $('nav div').addClass('visible-title');
      }
      else {
          $('nav').removeClass('fixed-header');
          $('nav div').removeClass('visible-title');
      }
  });
  
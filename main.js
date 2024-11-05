$(document).ready(function(){
    $(window).scroll(function(){
      if($(this).scrollTop()){
        $('menu').addClass('sticky');
      }
    })
  })
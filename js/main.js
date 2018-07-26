$( document ).ready(function() {
                
  var imgHeight = $('.banner').height();
  var banHeight = $('.banner_content').height();
  var main = document.querySelector('.mainPart');
  var icon = document.querySelector('#icon');
  var nav_part = document.querySelector('#header');
  var myIndex = 0;

  //console.log(imgHeight);
  $('.banner_content').css("top",imgHeight-banHeight);
  slide_fun();




  function slide_fun() {
    var i;
    var x = document.getElementsByClassName("slider");

    x.onmouseover
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {
      myIndex = 1
    }    
    x[myIndex-1].style.display = "block";  
    setTimeout(slide_fun, 7000);    
  }

  icon.addEventListener('click',function (e){
    document.getElementById("header").style.display = 'block';
    document.getElementById("icon").style.display = 'none';

  });

  main.addEventListener('click',function (e){
    document.getElementById("header").style.display = 'none';
    document.getElementById("icon").style.display = 'block';
  });


  $(window).resize(function(){
    var imgHeight = $('.banner').height();
    var banHeight = $('.banner_content').height();
    console.log(imgHeight);
    $('.banner_content').css("top",imgHeight-banHeight);
    
  });

  // animation for scroll
  $('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            $target.focus(); 
          };
        });
      }
    }
  });

    
});


$(function () {
  
  $('.carousel').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    fade: true,
    speed: 1500,
    pauseOnHover: false
  });


  $('.btn-more,.home').hover(
    function () {
      $(this).animate({ 'opacity': 0.6 }, 300);
    },
    function () {
      $(this).animate({ 'opacity': 1.0 }, 300);
    }
  );
  
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#top').fadeIn();
    } else {
      $('#top').fadeOut();
    }
  });

 
  $('a[href^="#"]').click(function () {
    const speed = 500;
    const href = $(this).attr('href');
    let $target;
    if (href == '#') {
      $target = $('html');
    }
    else {
      $target = $(href);
    }
    const position = $target.offset().top;
    $('html, body').animate({ 'scrollTop': position }, speed, 'swing');
    return false;
  });

  $(window).scroll(function () {
    const scrollAmount = $(window).scrollTop();
    const windowHeight = $(window).height();
    $('section').each(function () {
      const position = $(this).offset().top;
      if (scrollAmount > position - windowHeight + 100) {
        $(this).addClass('fade-in');
      }
    });
  });

 
  $('.works img').click(function () {
    const imgSrc = $(this).attr('src');
    const imgAlt = $(this).attr('alt');
    $('.big-img').attr({
      src: imgSrc,
      alt: imgAlt,
    });
    $('.modal').fadeIn();
  });


  $('.close-btn').click(function () {
    $('.modal').fadeOut();
  });
});
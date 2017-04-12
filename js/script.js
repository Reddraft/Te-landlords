$(document).ready(function() {

  /******************************
  *** ANIMATIONS ON SCROLLING **
  *******************************/

  var $input = $(':input');
  var $btn = $('.btn-submit');

  $input.focus(function() {
    $(this).removeAttr('placeholder');
  })

  $input.blur(function() {
    $(this).val(' ');
    $(this).attr('placeholder', 'Enter Email' );
  })

  $btn.click(function() {
    $input.val(' ');
    $input.attr('placeholder', 'Enter Email' );
  })

  /******************************
  *** ANIMATIONS ON SCROLLING **
  *******************************/

  // header animations
  $('.js-wp-animate-logo').addClass('animated fadeInDown');
  $('.js-wp-animate-heading').addClass('animated fadeInUp');
  $('.js-wp-animate-form').addClass('animated fadeInUp');
  $('.js-wp-animate-subheading').addClass('animated fadeInUp');
  $('.js-wp-animate-scroll').addClass('animated fadeIn');

  // why section animations
  $('.why-section').waypoint(function() {
      $('.js-wp-animate-why-heading').addClass('animated fadeInDown');
  }, {
    offset: '300px;'
  });

  $('.why-section').waypoint(function() {
      $('.js-wp-animate-reason-1').addClass('animated fadeInUp');
      $('.js-wp-animate-reason-2').addClass('animated fadeInUp');
      $('.js-wp-animate-reason-3').addClass('animated fadeInUp');
  }, {
    offset: '250px;'
  });

  // download section animations
  $('.download-section').waypoint(function() {
      $('.js-wp-animate-ipad').addClass('animated slideInLeft');
      $('.js-wp-animate-cta').addClass('animated fadeInDown');
      $('.js-wp-animate-download-btn').addClass('animated fadeInUp');

  }, {
    offset: '400px;'
  });

  // footer section animations

  var inview = new Waypoint.Inview({
  element: $('html, body')[0],

    entered: function(direction) {
      if (direction === 'down') {
        $('.js-wp-animate-secondary-logo').addClass('animated fadeInDown');
        $('.js-wp-animate-social-icons').addClass('animated fadeInUp');
        $('.js-wp-animate-small').addClass('animated fadeInUp');
      }
    }

  });


});

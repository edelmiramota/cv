$(window).on("load", function() {
  $(".loader .inner-loader").fadeOut(2600, function() {
    $(".loader").fadeOut(1000);
  });
});

$(document).ready(function() {
  $("#slides").superslides({
    animation: "fade",
    play: 5000,
    pagination: false
  });

  var typed = new Typed(".typed", {
    strings: ["Full Stack Developer.", "Telematics Engineer."],
    typeSpeed: 70,
    loop: true,
    startDelay: 3800,
    showCursor: false
  });

  $('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: true,
    dotsEach: true,
    item: 4,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      },
      938: {
        items: 4
      }
    }
  });

  const skillsTopOffset = $(".skills-section").offset().top;

  $(window).scroll(function() {
    if (window.pageYOffset > (skillsTopOffset - $(window).height() + 200)) {
      $('.chart').easyPieChart({
        easing: 'easyInOut',
        barColor: '#ff4757',
        trackColor: false,
        scaleColor: false,
        lineWidth: 3,
        size: 152,
        onStep: function(from, to, percent) {
          $(this.el).find('.percent').text(Math.round(percent));
        }
      });
    }
  });

  if ($(window).width() < 992) {
    $(".work-card .collapse").collapse();
  }

  var aboutTop = $("#about").offset().top - 51;
  var skillsTop = $("#skills").offset().top - 51;
  var workTop = $("#work").offset().top - 51;
  var contactTop = $("#contact").offset().top - 51;

  if ($(".navbar-toggler").css("display") == "none") {

    $(".nav-current-section").css({
      "border-top-left-radius": "4px",
      "border-top-right-radius": "4px"
    });
  } else {
    $(".nav-current-section").css({
      "border-top-left-radius": "0",
      "border-top-right-radius": "0"
    });
  }

  $(window).on("scroll", stickyNavigation);
  $(window).on("resize", stickyNavigation);

  function stickyNavigation() {

    if ($(window).width() < 992) {
      $(".work-card .collapse").collapse();
    } else {
      $(".work-card .collapse").collapse("show");
    }

    aboutTop = $("#about").offset().top - 51;
    skillsTop = $("#skills").offset().top - 51;
    workTop = $("#work").offset().top - 51;
    contactTop = $("#contact").offset().top - 51;

    if ($(window).scrollTop() >= contactTop) {
      $("#navigation .nav-current-section").removeClass("nav-current-section");
      $("#navigation .contact-menu-item").addClass("nav-current-section");
      if ($(".navbar-toggler").css("display") == "none") {
        $(".nav-current-section").css({
          "border-bottom-left-radius": "4px",
          "border-bottom-right-radius": "4px"
        });
      } else {
        $(".nav-current-section").css({
          "border-bottom-left-radius": "0",
          "border-bottom-right-radius": "0"
        });
      }
    } else if ($(window).scrollTop() >= workTop) {
      $("#navigation .nav-current-section").removeClass("nav-current-section");
      $("#navigation .work-menu-item").addClass("nav-current-section");
    } else if ($(window).scrollTop() >= skillsTop) {
      $("#navigation .nav-current-section").removeClass("nav-current-section");
      $("#navigation .skills-menu-item").addClass("nav-current-section");
    } else if ($(window).scrollTop() >= aboutTop) {
      $("#navigation .nav-current-section").removeClass("nav-current-section");
      $("#navigation .about-menu-item").addClass("nav-current-section");
      if ($(".navbar-toggler").css("display") == "none") {
        $(".nav-current-section").css({
          "border-top-left-radius": "4px",
          "border-top-right-radius": "4px"
        });
      } else {
        $(".nav-current-section").css({
          "border-top-left-radius": "0",
          "border-top-right-radius": "0"
        });
      }
    }
  }

  $("#navigation li a").click(function(event) {
    event.preventDefault();

    $(".navbar-collapse").collapse("hide");

    var targetElement = $(this).attr("href");
    var targetPosition = $(targetElement).offset().top;
    $("html, body").animate({
      scrollTop: targetPosition - 50
    }, 600);
  });

});

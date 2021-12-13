$(window).ready(function () {
  const screenHeight = $(window).height();
  console.log(screenHeight);
  $(window).scroll(function () {
    const currentHeight = $(this).scrollTop();
    if (currentHeight > 80) {
      $(".site-nav").addClass("sticky");
    } else {
      $(".site-nav").removeClass("sticky");
      $(".nav-link").removeClass("active-nav");
      $('.nav-link[href="#home"]').addClass("active-nav");
    }
  });

  $(".nav-link").click(function () {
    $(".navbar-collapse").removeClass("show");

    $(".menu-icon").removeClass("fa-times");
    $(".menu-icon").addClass("fa-bars");
  });

  $(".navbar-toggler").click(function () {
    const test = $(".menu-icon").hasClass("fa-bars");
    if (test) {
      $(".menu-icon").removeClass("fa-bars");
      $(".menu-icon").addClass("fa-times");
      $(".navbar-collapse").removeClass("show");
    } else {
      $(".menu-icon").removeClass("fa-times");
      $(".menu-icon").addClass("fa-bars");
    }
  });

  /* -------- Active NavLink ----------- */
  $("#home").waypoint(
    function () {
      $(".nav-link").removeClass("active-nav");
      $('.nav-link[href="#home"]').addClass("active-nav");
    },
    { offset: "20%" }
  );
  $("#about").waypoint(
    function () {
      $(".nav-link").removeClass("active-nav");
      $('.nav-link[href="#about"]').addClass("active-nav");
    },
    { offset: "20%" }
  );
  $("#services").waypoint(
    function () {
      $(".nav-link").removeClass("active-nav");
      $('.nav-link[href="#services"]').addClass("active-nav");
    },
    { offset: "20%" }
  );
  $("#pricing").waypoint(
    function () {
      $(".nav-link").removeClass("active-nav");
      $('.nav-link[href="#pricing"]').addClass("active-nav");
    },
    { offset: "20%" }
  );
  $("#contact").waypoint(
    function () {
      $(".nav-link").removeClass("active-nav");
      $('.nav-link[href="#contact"]').addClass("active-nav");
    },
    { offset: "20%" }
  );

  wow = new WOW({
    boxClass: "wow", // default
    animateClass: "animate__animated", // default
    offset: 0, // default
    mobile: true, // default
    live: true, // default
  });
  wow.init();

  $(".slide").slick({
    infinite: true,
    slidesToShow: 3,
    dots: true,
    arrows: false,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  $(window).on("load", function () {
    $(".loader-container").fadeOut(500, function () {
      $(this).remove();
    });
  });
});

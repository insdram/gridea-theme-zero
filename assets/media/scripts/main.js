(function ($) {

  $(function () {

    $('.layout-header').find('.layout-header-trigger').bind('click', function (event) {
      event.stopPropagation();
      $('.layout-collapse').toggleClass('open');

    });
    $('.layout-header-search>i').bind('click', function () {
      $(this).siblings('#search_bar').find('input').toggleClass('layout-search-show');
    });

  });

  $(function () {

    let mainNavLinks = document.querySelectorAll(".markdownIt-TOC a");

    window.addEventListener("scroll", event => {
      let fromTop = window.scrollY;

      mainNavLinks.forEach((link, index) => {
        let section = document.getElementById(decodeURI(link.hash).substring(1));
        let nextSection = null
        if (mainNavLinks[index + 1]) {
          nextSection = document.getElementById(decodeURI(mainNavLinks[index + 1].hash).substring(1));
        }
        if (section.offsetTop <= fromTop) {
          if (nextSection) {
            if (nextSection.offsetTop > fromTop) {
              link.classList.add("current");
            } else {
              link.classList.remove("current");
            }
          } else {
            link.classList.add("current");
          }
        } else {
          link.classList.remove("current");
        }
      });
    });
  });


  $(window).scroll(function () {

    var scroH = $(window).scrollTop();

    if (scroH > 84) {
      $(".markdownIt-TOC").addClass("fixed-top");
      $(".layout-totop").addClass("d-md-block");
    } else {
      $(".markdownIt-TOC").removeClass("fixed-top");
      $(".layout-totop").removeClass("d-md-block");
    }

  });

  $('.layout-totop').bind('click', function () {
    $("html,body").animate({
        scrollTop: 0
      },
      800);
  });

})(jQuery);
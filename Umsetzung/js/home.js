jQuery.noConflict();
jQuery(document).ready(function ($) {
  $(document).ready(function () {
    /*Burger Menue Click Function-Begin*/

    $("#menue").click(function () {
      $(this).toggleClass("act");
      $("#menue_open").toggleClass("act");
      $(".main-wrap").toggleClass("act");
    });

    /*Burger Menue Click Function-End*/

    $(function () {
      $(".footer__logo svg").click(function () {
        $("html,body").animate({ scrollTop: 0 }, "slow");
      });
    });

    // Footer Impressum open usw..

    $(".footer__policy ul li").click(function () {
      $(".policy__info").addClass("open");
    });

    $(".policy__info_close").click(function () {
      $(".policy__info.open").removeClass("open");
    });

    //footer animate to section with delay

    $(function () {
      $(".footer__policy ul li").click(function () {
        setTimeout(function () {
          $("html, body").animate({
            scrollTop: $(window).scrollTop() + 900,
          });
        }, 200);
      });
    });
  });
});

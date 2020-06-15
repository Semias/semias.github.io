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
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    });

    // Footer Impressum open usw..

    $(".footer__policy ul li").click(function () {
      $(".policy__info").addClass("open");
    });

    $(".footer__policy_close").click(function () {
      $(".policy__info").removeClass("open");
    });

    //Animation und hinscrollen

    $(".footer__policy ul li").click(function () {
      $("html,body").animate(
        {
          scrollTop: $(".policy__info.open").offset().top,
        },
        "slow"
      );
    });
    setTimeout(function () {
      $(".footer__policy ul li").click(function () {
        $("html,body").animate(
          {
            scrollTop: $(".policy__info.open").offset().top,
          },
          "medium"
        );
      });
    }, 3000);
  });
});

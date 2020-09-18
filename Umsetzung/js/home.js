window.addEventListener(
  "load",
  function () {
    let resp = document.querySelector(".responsive__menu");

    resp.addEventListener("click", function () {
      resp.classList.toggle("active");
    });

    /*let datenschutz = document.querySelector(".footer__policy ul li");
    let policy = document.querySelector(".policy__info");
    let policyClose = document.querySelector(".policy__info_close");

    datenschutz.addEventListener("click", () => {
      policy.classList.add("open");
    });

    policyClose.addEventListener("click", () => {
      policy.classList.remove("open");
    });*/

    let datenschutz = document.querySelectorAll(".footer__policy ul li");
    let policy = document.querySelector(".policy__info");
    let policyClose = document.querySelectorAll(".policy__info_close");

    datenschutz.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.stopPropagation();
        policy.classList.add("open");
      });
    });

    policyClose.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.stopPropagation();
        policy.classList.remove("open");
      });
    });

  },
  false
);


jQuery.noConflict();
jQuery(document).ready(function ($) {
  $(document).ready(function () {
    /*Burger Menue Click Function-End*/

    $(function () {
      $(".footer__logo svg").click(function () {
        $("html,body").animate(
          {
            scrollTop: 0,
          },
          "slow"
        );
      });
    });

    // Footer Impressum open usw..

    /*$(".footer__policy ul li").click(function () {
      $(".policy__info").addClass("open");
    });

    $(".policy__info_close").click(function () {
      $(".policy__info.open").removeClass("open");
    });*/

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

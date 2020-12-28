window.addEventListener(
  "load",
  function () {

    //Responsive Menu
    let resp = document.querySelector(".responsive__menu");
    let respChilds = document.querySelector(".menu");

    resp.addEventListener("click", function () {
      document.querySelector("body").classList.toggle("resp_active");
    });

    resp.addEventListener("click", function () {
      resp.classList.toggle("active");
    });

    resp.addEventListener("click", function () {
      respChilds.classList.toggle("active");
    });

    //Datenschutzerklärung Open
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

//jQuery Part

jQuery.noConflict();
jQuery(document).ready(function ($) {
  $(document).ready(function () {
    $(function () {
      $(".footer__logo img").click(function () {
        $("html,body").animate(
          {
            scrollTop: 0,
          },
          "slow"
        );
      });
    });

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
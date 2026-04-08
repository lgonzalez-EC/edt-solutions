/* =====================================================
   SMART STICKY NAVBAR & WHATSAPP BUTTON
===================================================== */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM cargado");

    var navbar = document.querySelector(".custom-navbar");
    var whatsappBtn = document.querySelector(".whatsapp-float");
    var footer = document.querySelector("#site-footer");

    var lastScroll = 0;
    var scrollThreshold = 50;

    if (navbar) {
      navbar.classList.add("navbar-sticky");
      navbar.classList.add("navbar-show");
    }

    function handleScroll() {
      var currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;

      if (navbar) {
        if (currentScroll <= scrollThreshold) {
          navbar.classList.remove("navbar-hide");
          navbar.classList.add("navbar-show");
          lastScroll = currentScroll;
        } else if (currentScroll > lastScroll && currentScroll > scrollThreshold) {
          navbar.classList.add("navbar-hide");
          navbar.classList.remove("navbar-show");
        } else if (currentScroll < lastScroll) {
          navbar.classList.remove("navbar-hide");
          navbar.classList.add("navbar-show");
        }

        lastScroll = currentScroll <= 0 ? 0 : currentScroll;
      }

      if (whatsappBtn && footer) {
        var footerRect = footer.getBoundingClientRect();
        var windowHeight = window.innerHeight;

        if (footerRect.top < windowHeight) {
          whatsappBtn.classList.add("hidden");
        } else {
          whatsappBtn.classList.remove("hidden");
        }
      }
    }

    var ticking = false;
    window.addEventListener("scroll", function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    });

    if (whatsappBtn && footer) {
      handleScroll();
    }
  });
})();

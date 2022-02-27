<template>
  <div>
    <button class="scrollToTopBtn"><b-icon icon="arrow-up"></b-icon></button>
    <section-header />
    <Nuxt />
    <section-footer />
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    // Scroll To Top
    var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
    var rootElement = document.documentElement;

    function handleScroll() {
      // Do something on scroll
      var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
      if (rootElement.scrollTop / scrollTotal > 0.2) {
        // Show button
        scrollToTopBtn.classList.add("showBtn");
      } else {
        // Hide button
        scrollToTopBtn.classList.remove("showBtn");
      }
    }

    function scrollToTop() {
      // Scroll to top logic
      rootElement.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    scrollToTopBtn.addEventListener("click", scrollToTop);
    document.addEventListener("scroll", handleScroll);

    /* Scroll Reveal */
    window.sr = ScrollReveal();

    sr.reveal(".animate-top", {
      origin: "top",
      duration: 1000,
      distance: "20rem",
      delay: 300,
    });

    sr.reveal(".animate-bottom", {
      origin: "bottom",
      duration: 2000,
      distance: "25rem",
      delay: 300,
      loop: true
    });

    sr.reveal(".animate-bottom-2", {
      origin: "bottom",
      duration: 2500,
      distance: "25rem",
      delay: 400,
      loop: true
    });

    sr.reveal(".animate-bottom-3", {
      origin: "bottom",
      duration: 3000,
      distance: "25rem",
      delay: 500,
      loop: true
    });

    sr.reveal(".animate-bottom-4", {
      origin: "bottom",
      duration: 3500,
      distance: "25rem",
      delay: 600,
      loop: true
    });

    sr.reveal(".animate-left", {
      origin: "left",
      duration: 2000,
      distance: "25rem",
      delay: 300,
    });

    sr.reveal(".animate-right", {
      origin: "right",
      duration: 2000,
      distance: "25rem",
      delay: 300,
    });
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  font-size: 16px;
  font-family: "Quicksand", sans-serif;
  color: #212529;
  background-color: #fff;
}

::selection {
  color: #ffffff;
  background-color: #b956fe;
}
/* Scroll To Top Button */
.scrollToTopBtn {
  padding: 15px 18px;
  border: 0;
  background: #673ab7;
  border-radius: 100%;
  position: fixed;
  right: 20px;
  bottom: 30px;
  z-index: 99;
  opacity: 0;
  transform: translateY(100px);
  transition: all 0.5s ease;
}

.showBtn {
  opacity: 1;
  transform: translateY(0);
}

.scrollToTopBtn svg {
  color: #fff;
  font-size: 20px;
}
/* End Scroll To Top Button */

@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translateY(5rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeDown {
  0% {
    opacity: 0;
    transform: translateY(-5rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeLeft {
  0% {
    opacity: 0;
    transform: translateX(-10rem);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeRight {
  0% {
    opacity: 0;
    transform: translateX(10rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
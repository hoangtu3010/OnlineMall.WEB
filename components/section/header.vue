<template>
  <header id="header" class="header-section">
    <div class="container">
      <div class="header-wrapper" :class="isShowNav ? 'open' : ''">
        <div class="menu-toggle">
          <b-icon icon="list" @click="isShowNav = !isShowNav"></b-icon>
          <b-icon icon="x" @click="isShowNav = !isShowNav"></b-icon>
        </div>
        <div class="header-logo">
          <nuxt-link to="/">
            <img src="/logo.png" alt="logo" />
          </nuxt-link>
        </div>
        <ul class="menu">
          <li class="menu-item">
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li class="menu-item">
            <nuxt-link to="/shopping">Shopping</nuxt-link>
          </li>
          <li class="menu-item">
            <nuxt-link to="/dinning">Dinning</nuxt-link>
          </li>
          <li class="menu-item">
            <nuxt-link to="/cinema">Cinema</nuxt-link>
          </li>
         
          <li class="menu-item">
            <nuxt-link to="/product">Product</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isShowNav: false,
    };
  },
  mounted() {
    const selectElement = function (element) {
      return document.querySelector(element);
    };

    // On scroll fixed header
    var sticky = header.offsetTop;
    window.onscroll = function () {
      if (window.pageYOffset > sticky) {
        selectElement("#header").classList.add("sticky");
      } else {
        selectElement("#header").classList.remove("sticky");
      }
    };
  },
};
</script>

<style>
/* On Scroll Header */
.sticky {
  background: #fff !important;
  color: #000 !important;
  box-shadow: 0px 1px 36px -16px #673ab7 !important;
}

.sticky a {
  color: #fff !important;
}

.sticky .menu-toggle svg {
  color: #000;
}

.sticky .menu .menu-item a:hover {
  color: #cb3599;
}

/* Header */
.header-section {
  z-index: 999;
  padding: 10px 0;
  width: 100%;
  position: fixed;
  background: transparent;
  box-shadow: none;
  transition: all 0.3s ease;
}

.header-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-wrapper .menu-toggle {
  position: absolute;
  font-size: 2.2rem;
  color: #fff;
  right: 1rem;
  cursor: pointer;
  top: 50%;
  z-index: 1000;
  transform: translateY(-50%);
}

.header-wrapper .menu-toggle .bi-x {
  display: none;
}

.header-wrapper a {
  color: #000;
}

.header-wrapper a:hover {
  text-decoration: none;
}

.header-logo a {
  display: flex;
  align-items: center;
}

.header-logo {
  transition: all 0.3s ease;
}

.header-logo a img {
  width: 70px;
}

.header-logo a span {
  margin-left: 10px;
  font-size: 20px;
  font-weight: 600;
  color: #000;
}

.menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 75%;
  height: 100vh;
  background: #754ec5;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  z-index: 999;
  transform: translateX(-100%);
  transition: 0.5s;

  /* display: flex;
  padding: 16px 8px;
  transition: all 0.3s ease;
  align-items: center;
  margin-bottom: 0; */
}

.menu::before {
  content: "";
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0;
  transform: scale(0);
  transition: opacity 0.5s;
}

.open .bi-x {
  display: block !important;
}

.open .bi-list {
  display: none;
}

.open .menu {
  transform: translateY(0);
}

.open .menu::before {
  opacity: 1;
  transform: scale(1);
}

.menu .menu-item {
  list-style: none;
  text-transform: uppercase;
  position: relative;
  margin: 0 15px;
  font-weight: 600;
  border-bottom: 1px solid #fff;
}

.menu .menu-item a {
  letter-spacing: 2px;
  color: #fff;
  transition: 0.3s;
}

.menu .menu-item a:hover {
  color: #cb3599;
}

.menu .menu-item a.nuxt-link-exact-active {
  color: #cb3599 !important;
}

.menu .menu-item:last-child {
  margin-right: 0;
  border-bottom: none;
}

@media (min-width: 900px) {
  .menu-toggle {
    display: none;
  }

  .sticky a {
    color: #000 !important;
  }

  .sticky .menu .menu-item a.nuxt-link-exact-active {
    color: #000 !important;
  }

  .menu {
    position: initial;
    width: initial;
    height: initial;
    background-color: transparent;
    justify-content: initial;
    flex-direction: row;
    transition: all 0.3s ease;
    padding: 0;
    align-items: center;
    margin-bottom: 0;
    transform: translateX(0);
  }
  .menu .menu-item {
    border-bottom: none;
  }

  .menu .menu-item a:hover {
    color: #fff;
  }

  .menu .menu-item:hover a::after {
    transform: scale(1);
    background: #b956fe;
  }

  .menu .menu-item a.nuxt-link-exact-active {
    color: #fff !important;
  }

  .menu .menu-item a::after {
    width: 7px;
    height: 7px;
    margin: 0 auto;
    content: "";
    display: block;
    transform: scale(0);
    transition: all 0.2s cubic-bezier(0.42, 0.16, 0.21, 0.93);
    border-radius: 8px;
    margin-bottom: -5px;
    transform-origin: center center;
  }

  .menu .menu-item a.nuxt-link-exact-active::after {
    transform: scale(1);
    background: #b956fe;
  }
}
</style>
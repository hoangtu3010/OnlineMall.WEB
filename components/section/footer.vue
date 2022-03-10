<template>
  <footer>
    <div class="container">
      <div class="subscribe">
        <div class="subscribe-title text-center">
          <h2>Subscribe to Our Newsletter</h2>
          <p>
            A Private Limited is the most popular type of partnership Malta. The
            limited liability <br />
            is, in fact, the only type of company allowed by Companies.
          </p>
        </div>
        <div class="subscribe-form">
          <form action="#" method="post">
            <div class="left-content clearfix">
              <b-icon icon="envelope"></b-icon>
              <span class="form-control-wrap"
                ><input
                  type="email"
                  value=""
                  size="40"
                  class="form-control form-control-custom"
                  placeholder="example@mail.com"
              /></span>
            </div>
            <div class="right-content">
              <button type="submit">
                <b-icon icon="reply"></b-icon> <span>Subscribe Now</span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="widget">
        <div class="row">
          <div class="col-sm-6 col-md-5 col-lg-4">
            <div class="about-widget">
              <nuxt-link to="/"><img src="/logo.png" alt="logo" /></nuxt-link>
              <p>
                Online Mall is the most exclusive shopping mall and entertainment center. Located in an area that is best known for its high-end stores and restaurants.
              </p>
              <ul class="social">
                <li class="social-item">
                  <nuxt-link to="/">
                    <b-icon icon="facebook"></b-icon>
                  </nuxt-link>
                </li>
                <li class="social-item">
                  <nuxt-link to="/">
                    <b-icon icon="twitter"></b-icon>
                  </nuxt-link>
                </li>
                <li class="social-item">
                  <nuxt-link to="/">
                    <b-icon icon="google"></b-icon>
                  </nuxt-link>
                </li>
                <li class="social-item">
                  <nuxt-link to="/">
                    <b-icon icon="instagram"></b-icon>
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-6 col-md-3 col-lg-2">
            <div class="menu-widget">
              <div class="title">
                <h3>Navigate</h3>
              </div>
              <ul>
                <li>
                  <nuxt-link to="/shopping">Shopping</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/dinning">Dinning</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/cinema">Cinema</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/floor-info">Floor Info</nuxt-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-6 col-md-3 col-lg-2">
            <div class="menu-widget">
              <div class="title">
                <h3>Quick Links</h3>
              </div>
              <ul>
                <li>
                  <nuxt-link to="/">Home</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/about-us">About Us</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/privacy-policy">Privacy Policy</nuxt-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-3">
            <div class="contact-widget">
              <div class="title">
                <h3>Contact</h3>
              </div>
              <div class="contact-detail">
                <p><span>Phone:</span> +84 999-999-999</p>
                <p><span>Email:</span> nhom3@mail.com</p>
                <p>
                  <span>Address:</span> 8 Tôn Thất Thuyết, Hà Nội
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="float-left left-content">
          <p>© 2022 by Team 3</p>
        </div>
        <div class="float-right right-content">
          <p>All Right Reserved</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style>
footer {
  background: url("~/assets/images/footer-bg.webp") 50% 0 no-repeat;
  background-size: cover;
}

/* Subscribe */
.subscribe {
  padding-top: 100px;
  padding-bottom: 80px;
}

.subscribe-title {
  margin-bottom: 50px;
}

.subscribe-title h2 {
  font-weight: 700;
  line-height: 48px;
}

.subscribe-title p {
  font-size: 16px;
  line-height: 26px;
  color: #656565;
  margin-top: 20px;
}

.subscribe-form {
  background: linear-gradient(to right, #6541c1 0%, #d43396 98%, #d43396 100%);
  border-radius: 60px;
  padding: 34px 35px;
  padding-left: 37px;
  box-shadow: 0 23px 42px rgb(0 0 0 / 20%);
}

.subscribe-form form {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.subscribe svg {
  font-size: 24px;
  color: #eae9ec;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
}

.form-control-wrap {
  position: relative;
}

.subscribe-form .left-content {
  position: relative;
}

.subscribe-form .right-content button {
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  background: #ff00d6;
  transition: all 0.3s ease;
  border: 1px solid #ff00d6;
  border-radius: 28px;
  padding: 15px 29px;
  position: relative;
}

.subscribe-form .right-content button svg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
}

.subscribe-form .right-content button:hover {
  background-color: #009cff;
  border: 1px solid #009cff;
}

.form-control-custom {
  background-color: initial;
  border: 0;
  outline: 0;
  color: #fff !important;
  font-size: 14px;
  font-weight: 600;
  display: inline-block;
  border-bottom: 1px solid #eae9ec;
  width: 100%;
  max-width: 220px;
  margin-left: 46px;
}

.form-control-custom:focus {
  background: transparent;
  box-shadow: none;
  outline: none;
}

.form-control-custom::placeholder {
  color: #fff;
}
/* End Subscribe */

/* Widget */
.widget {
  padding-bottom: 80px;
  font-size: 14px;
  line-height: 24px;
  margin: 0;
  font-weight: 600;
  color: #656565;
}

/* About Widget */
.widget .about-widget img {
  width: 70px;
}

.widget .about-widget a span {
  font-size: 18px;
  margin-left: 10px;
  color: #1a0a37;
}

.widget .about-widget a:hover{
  text-decoration: none;
}

.widget .about-widget p {
  padding: 20px 0;
  font-weight: 700;
  margin-bottom: 0;
  color: #1a0a37;
  font-size: 16px;
}

.widget .social {
  display: flex;
}

.widget .social .social-item {
  list-style: none;
  margin-right: 20px;
}

.widget .social .social-item a {
  color: #8b8b8b;
  transition: 0.3s;
  font-size: 20px;
}

.widget .social .social-item a:hover {
  color: #c7359c;
}
/* End About Widget */

/* Contact Widget */
.widget .title {
  margin-bottom: 45px;
}

.widget .title h3 {
  margin: 0;
  color: #1a0a37;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
}

.widget .contact-widget .contact-detail p span {
  color: #170b35;
  font-weight: 600;
  padding-right: 10px;
  font-size: 16px;
}
/* End Contact Widget */

/* Menu Widget */
.menu-widget ul li {
  list-style: none;
  margin-bottom: 15px;
}

.menu-widget ul li a {
  color: #8b8b8b;
  transition: 0.3s;
}

.menu-widget ul li a:hover {
  text-decoration: none;
  color: #d43396;
}
/* End Menu Widget */

/* End Widget */

/* Footer Copyright */
.footer-copyright {
  width: 100%;
  display: table;
  padding: 20px 0;
  border-top: 1px solid #d2d1d2;
}

.footer-copyright .left-content p {
  margin-bottom: 0;
}

.footer-copyright .right-content p {
  margin-bottom: 0;
}
/* End Footer Copyright */

@media (max-width: 768px) {
  .subscribe-title h2 {
    font-size: 1.8rem;
  }

  .subscribe-form .right-content button {
    padding: 10px 20px;
    font-size: 14px;
  }

  .widget .title {
    margin-bottom: 25px;
  }

  .widget .about-widget img {
    width: 50px;
  }

  .widget .about-widget p {
    padding: 10px 0;
  }

  .contact-widget {
    margin: 20px 0;
  }

  .widget {
    padding-bottom: 50px;
  }
  .subscribe {
    padding-top: 70px;
    padding-bottom: 60px;
  }

  .menu-widget {
    margin: 20px 0;
  }

  .widget .social {
    justify-content: center;
  }
}

@media (max-width: 520px) {
  .form-control-custom {
    max-width: 180px;
  }

  .about-widget{
    text-align: center;
  }

  .subscribe-form .right-content button {
    padding: 20px 30px;
    font-size: 14px;
  }

  .subscribe-form .right-content button svg {
    display: block;
  }

  .subscribe-form .right-content button span {
    display: none;
  }
}

@media (max-width: 378px) {
  .form-control-custom {
    margin-left: 32px;
  }

  .subscribe-form .right-content button {
    padding: 18px 22px;
    font-size: 14px;
  }
}
</style>
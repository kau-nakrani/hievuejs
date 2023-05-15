<script setup>
import IconEmail from '../../components/icons/IconEmail.vue'
import IconPassword from '../../components/icons/IconPassword.vue'
</script>
<template>
  <section className="auth-section bg-style0 d-flex align-items-center justify-content-center">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="auth-box mx-auto">
            <h2 className="fw-600 mb-2 text-center">Welcome Back</h2>
            <span className="d-block fw-400 text-center">Welcome back, Please enter your details</span>
            <form>
              <div className="form-group position-relative input-icon-style">
                <input
                  type="email"
                  name=""
                  className="form-control custom-input"
                  placeholder="Email address"
                />
                <div className="icon">
                  <IconEmail />
                </div>
              </div>
              <div className="form-group position-relative input-icon-style">
                <input
                  type="password"
                  name=""
                  className="form-control custom-input"
                  placeholder="Password"
                />
                <div className="icon">
                  <IconPassword />
                </div>
              </div>
              <RouterLink to="/verify-account" className="primary-btn big-btn d-flex"
                >Sign In</RouterLink
              >
              <RouterLink
                to="/create-account"
                className="forgot-pass-text fw-500 d-block text-center mt-3"
                >Forgot Password?</RouterLink
              >
              <span
                className="sign-up-text fw-400 d-flex align-items-center justify-content-center gap-2"
                >Don't have an account?
                <RouterLink to="/create-account" className="hover-txt-black text-underline"
                  >Sign Up here</RouterLink
                ></span
              >
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
.auth-section {
  background-image: url(./../../assets/images/banner/banner-bg.png);
  width: 100%;
  height: calc(100vh - var(--header-less-spacing));
}
.auth-box {
  max-width: 740px;
  max-height: calc(100vh - var(--header-less-spacing) - 50px);
  overflow-y: auto;
  background: var(--white-color);
  box-shadow: 0px 7px 20px rgba(0, 0, 0, 0.02);
  border-radius: 52px;
  padding: 60px 115px;
}
.auth-box h2 {
  font-size: 30px;
  line-height: 40px;
  color: var(--secondary-color);
}
.auth-box span {
  font-size: 16px;
  line-height: 19px;
  color: var(--text-color);
}
.input-icon-style input {
  padding-left: 53px;
}
.input-icon-style .icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 22px;
}
.auth-box form {
  margin-top: 60px;
}
.auth-box .primary-btn {
  margin-top: 33px;
}
.auth-box .sign-up-text {
  margin-top: 60px;
}
.auth-box .forgot-pass-text,
.auth-box .sign-up-text {
  font-size: 16px;
  color: var(--secondary-color);
}
.auth-box .sign-up-text a {
  color: var(--light-blue-color);
}
@media (max-width: 1799px){
  .auth-box{
    padding: 35px 100px;
    border-radius: 32px;
  }
  .auth-box form, .auth-box .sign-up-text{
    margin-top: 30px;
  }
}
</style>

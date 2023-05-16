<script setup></script>
<template>
  <section className="auth-section d-flex align-items-center justify-content-center">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="auth-box verify-acc-field-wrap mx-auto">
            <h2 className="fw-600 mb-2 text-center">Please check your email</h2>
            <span className="d-block fw-400 text-center"
              >We've sent a code to hello@oliviarhye.com</span
            >
            <form>
              <div className="form-group position-relative d-flex justify-content-center mx-auto gap-2 gap-sm-4">
                <input type="text" name="" className="form-control custom-input" placeholder="" />
                <input type="text" name="" className="form-control custom-input" placeholder="" />
                <input type="text" name="" className="form-control custom-input" placeholder="" />
                <input type="text" name="" className="form-control custom-input" placeholder="" />
              </div>
              <span
                className="sign-up-text fw-400 d-flex align-items-center justify-content-center gap-2"
                >Didn't get a code?
                <RouterLink to="/verify-account" className="hover-txt-black text-underline"
                  >Click to resend.</RouterLink
                ></span
              >
              <RouterLink to="/landing-page" className="primary-btn big-btn d-flex">Verify</RouterLink>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
.auth-box.verify-acc-field-wrap input {
  max-width: 60px;
  padding: 5px;
  text-align: center;
  font-weight: 700;
}
.auth-box.verify-acc-field-wrap .sign-up-text {
  margin: 30px 0 50px;
}
</style>

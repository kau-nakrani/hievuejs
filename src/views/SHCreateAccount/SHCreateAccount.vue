<script setup>
import IconEmail from '../../components/icons/IconEmail.vue'
import IconPassword from '../../components/icons/IconPassword.vue'
import IconConfirmPassword from '../../components/icons/IconConfirmPassword.vue'
import IconUser from '../../components/icons/IconUser.vue'
</script>

<template>
  <section className="auth-section d-flex align-items-center justify-content-center">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="auth-box mx-auto">
            <h2 className="fw-600 mb-2 text-center">Getting Started</h2>
            <span className="d-block fw-400 text-center">Create an account to continue</span>
            <form>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group position-relative input-icon-style">
                    <input
                      type="text"
                      name=""
                      className="form-control custom-input"
                      placeholder="First Name"
                    />
                    <div className="icon">
                      <IconUser />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group position-relative">
                    <input
                      type="text"
                      name=""
                      className="form-control custom-input"
                      placeholder="Last name"
                    />
                  </div>
                </div>
              </div>
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
              <div className="form-group position-relative input-icon-style">
                <input
                  type="password"
                  name=""
                  className="form-control custom-input"
                  placeholder="Confirm Password"
                />
                <div className="icon">
                  <IconConfirmPassword />
                </div>
              </div>
              <RouterLink to="/login" className="primary-btn big-btn d-flex">Create Account</RouterLink>
              <span
                className="sign-up-text fw-400 d-flex align-items-center justify-content-center gap-2"
                >Already have an account?
                <RouterLink to="/login" className="hover-txt-black text-underline"
                  >Sign In here</RouterLink
                ></span
              >
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

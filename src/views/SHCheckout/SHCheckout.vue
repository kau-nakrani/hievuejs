<script setup>
import IconCheckmark from '../../components/icons/IconCheckmark.vue';
import IconWrongMark from '../../components/icons/IconWrongMark.vue';
</script>

<template>
  <section className="section-py body-banner bg-style0">
      <div className="container">
          <div className="row">
              <div className="col-12">
                    <h2 className="text-center fw-700 mb-0 heading-title small-heading-title">Checkout</h2>
                    <p className="label-heading-title text-center">Enter your personal details to complete your purchase.</p>
                    <div className="checkout-box-row d-flex">
                      <div class="checkout-box-left-col bg-white checkout-box-radius h-100">
                        <h2 className="fw-700">Order Summary</h2>
                        <div className="12 months">12 months</div>
                        <hr/>
                        <div>
                          <div>
                              <h6>Subtotal</h6>
                              <h6>$10.00</h6>
                          </div>
                          <div>
                              <h6>Tax</h6>
                              <h6>$00.00</h6>
                          </div>
                          <hr/>
                          <div>
                              <h4>Total</h4>
                              <h4>$10.00</h4>
                          </div>
                          <hr/>
                        </div>
                        <div>
                          <h5>Includes Features</h5>
                          <ul>
                              <li class="fw-400 d-flex align-items-center">
                                  <IconCheckmark/>
                                  <span class="ms-2 d-block">
                                    Hide categories in shop page
                                  </span>
                              </li>
                              <li class="fw-400 d-flex align-items-center">
                                  <IconCheckmark/>
                                  <span class="ms-2 d-block">
                                    Hide products in shop page
                                  </span>
                              </li>
                              <li class="fw-400 d-flex align-items-center">
                                  <IconCheckmark/>
                                  <span class="ms-2 d-block">
                                    Hide products and categories in shop page
                                  </span>
                              </li>
                              <li class="fw-400 d-flex align-items-center">
                                  <IconCheckmark/>
                                  <span class="ms-2 d-block">
                                    Hide categories in Widget
                                  </span>
                              </li>
                              <li class="fw-400 d-flex align-items-center">
                                  <IconCheckmark/>
                                  <span class="ms-2 d-block">
                                    Multiple select category
                                  </span>
                              </li>
                              <li class="fw-400 d-flex align-items-center">
                                  <IconCheckmark/>
                                  <span class="ms-2 d-block">
                                    Show 404 page
                                  </span>
                              </li>
                              <li class="fw-400 d-flex align-items-center">
                                  <IconCheckmark/>
                                  <span class="ms-2 d-block">
                                    Menu bar remove
                                  </span>
                              </li>
                              <li class="fw-400 d-flex align-items-center">
                                  <IconCheckmark/>
                                  <span class="ms-2 d-block">
                                    Site map remove
                                  </span>
                              </li>
                          </ul>
                          <hr/>
                          <RouterLink to="">Change Plan</RouterLink>
                        </div>
                      </div>
                      <div class="checkout-box-right-col bg-white checkout-box-radius h-100">
                        <span>Enter your personal details to complete your purchase.</span>
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
                            <RouterLink to="/login" className="primary-btn big-btn d-flex">Purchase Now</RouterLink>
                            <span
                              className="sign-up-text fw-400 text-center mt-3 d-block"
                              >By clicking "Purchase Now", I agree to Specific Hide's Terms of Service and Privacy.</span
                            >
                          </form>
                      </div>
                    </div>
              </div>
          </div>
      </div>
  </section>
</template>
<style>
:root{
  --checkout-box-left-col: 430px;
}
.checkout-box-radius{
  border-radius: 26px;
}
.checkout-box-row{
  grid-gap: 25px;
}
.checkout-box-left-col{
  width: var(--checkout-box-left-col);
  min-height: 500px;
  margin-top: 44px;
  padding: 30px;
}
.checkout-box-right-col{
  width: calc(100% - var(--checkout-box-left-col));
  min-height: 500px;
  margin-top: 44px;
}
.checkout-box-left-col h2{
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  letter-spacing: -0.01em;
  color: var(--secondary-color);
}
</style>

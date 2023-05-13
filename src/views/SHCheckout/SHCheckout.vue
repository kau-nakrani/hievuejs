<script setup>
import IconCheckmark from '../../components/icons/IconCheckmark.vue';
import IconWrongMark from '../../components/icons/IconWrongMark.vue';
// import paypalImg from "../../assets/images/logo/logo.png";
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
                        <h2 className="fw-700 text-start">Order Summary</h2>
                        <div className="label d-flex align-items-center w-max-content">12 months</div>
                        <hr/>
                        <div>
                          <div className="d-flex align-items-center mb-4">
                              <h6 className="fw-400 mb-0">Subtotal</h6>
                              <h6 className="ms-auto fw-400 mb-0">$10.00</h6>
                          </div>
                          <div className="d-flex align-items-center">
                              <h6 className="fw-400 mb-0">Tax</h6>
                              <h6 className="ms-auto fw-400 mb-0">$00.00</h6>
                          </div>
                          <hr/>
                          <div className="d-flex align-items-center">
                              <h4 className="fw-700 mb-0">Total</h4>
                              <h4 className="ms-auto fw-700 mb-0">$10.00</h4>
                          </div>
                          <hr/>
                        </div>
                        <div>
                          <h5 className="fw-500">Includes Features</h5>
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
                          <RouterLink to="" className="text-underline text-primary text-center d-block">Change Plan</RouterLink>
                        </div>
                      </div>
                      <div class="checkout-box-right-col bg-white checkout-box-radius h-100">
                        <span>Enter your personal details to complete your purchase.</span>
                        <form>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group position-relative">
                                  <input
                                    type="text"
                                    name=""
                                    className="form-control custom-input"
                                    placeholder="First Name"
                                  />
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
                              <div className="col-md-6">
                                <div className="form-group position-relative">
                                  <input
                                    type="email"
                                    name=""
                                    className="form-control custom-input"
                                    placeholder="Email address"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group position-relative">
                                  <input
                                    type="nubmer"
                                    name=""
                                    className="form-control custom-input"
                                    placeholder="Phone number"
                                  />
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="form-group position-relative">
                                  <textarea  className="form-control custom-textarea" placeholder="Address">

                                  </textarea>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group position-relative">
                                  <input
                                    type="text"
                                    name=""
                                    className="form-control custom-input"
                                    placeholder="City"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group position-relative">
                                  <input
                                    type="text"
                                    name=""
                                    className="form-control custom-input"
                                    placeholder="State"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group position-relative">
                                  <input
                                    type="number"
                                    name=""
                                    className="form-control custom-input"
                                    placeholder="Zip/postal"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group position-relative">
                                  <input
                                    type="text"
                                    name=""
                                    className="form-control custom-input"
                                    placeholder="Country"
                                  />
                                </div>
                              </div>
                              <div class="d-flex align-items-center mb-3">
                                <h6 className="me-2 mb-0">Payment type</h6>
                                <img src="./../../assets/images/logo/paypal.png" className="img-fluid" alt=""/>
                                <!-- <isHTMLTag src="./../../assets/images/logo/paypal.png"></isHTMLTag> -->
                              </div>
                            </div>
                            <RouterLink to="/login" className="primary-btn big-btn d-flex mt-3">Purchase Now</RouterLink>
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
  padding: 50px;
}
.checkout-box-left-col h2{
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  letter-spacing: -0.01em;
  color: var(--secondary-color);
}
.checkout-box-row .label{
  min-width: 160px;
  min-height: 40px;
  background: #EDFFED;
  border-radius: 5px;
  font-weight: 600;
  font-size: 16px;
  color: #499A49;
  font-family: var(--secondary-font);
  padding: 0 18px;
  margin: 16px 0 28px;
}
.checkout-box-row hr{
  border-color: #F0F0F0;
  opacity: 1;
}
.checkout-box-row h6,.checkout-box-row h4{
  font-size: 16px;
  letter-spacing: -0.01em;
  color: var(--secondary-color);
}
.checkout-box-row h4{
  font-size: 20px;
}
.checkout-box-row h5{
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: var(--light-blue-color);
}
.checkout-box-row ul{
  margin-top: 24px;
}
.checkout-box-row ul li{
  color: var(--text-color);
  font-family: var(--secondary-font);
}
.checkout-box-row ul li:not(:last-child){
  margin-bottom: 20px;
}
.checkout-box-right-col span{
  font-family: var(--secondary-font);
  font-size: 16px;
  color: var(--text-color);
}
form {
  margin-top: 50px;
}
</style>

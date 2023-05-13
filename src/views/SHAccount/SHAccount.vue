<template>
    <section className="section-py body-banner bg-style0 d-flex align-items-center justify-content-center">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="box-wrapper account-section bg-style0 position-relative mt-0">
                        <div class="list-data">
                          <span className="fw-400 mb-4 d-block dark-gray-color">Personal Information</span>
                          <div class="d-flex align-items-end">
                            <div class="d-flex gap-5 flex-wrap">
                              <div>
                                <h6 className="fw-400 mb-2">Name</h6>
                                <p className="fw-500 mb-0">John Wilson</p>
                              </div>
                              <div>
                                <h6 className="fw-400 mb-2">Email Address</h6>
                                <p className="fw-500 mb-0">johnwilsone123@gmail.com</p>
                              </div>
                            </div>
                            <RouterLink to="/" className="ms-auto fw-400 text-primary text-underline">Edit your profile</RouterLink>
                          </div>
                        </div>
                        <div class="list-data d-flex align-items-end">
                          <div>
                            <span className="fw-400 mb-4 d-block dark-gray-color">Current plan</span>
                            <h5 className="fw-500 mb-2">Basic plan</h5>
                            <span className="fw-400 d-block light-gray-color">Next payment $10 on may 12th, 2013</span>
                          </div>
                          <RouterLink to="/" className="ms-auto fw-400 text-primary text-underline">Upgrade your plan</RouterLink>
                        </div>
                        <div class="list-data d-flex align-items-end">
                          <div>
                            <span className="fw-400 mb-4 d-block dark-gray-color">Billing information</span>
                            <h5 className="fw-500 mb-2">John Wilson</h5>
                            <span className="fw-400 d-block light-gray-color">johnwilsone123@gmail.com</span>
                          </div>
                          <RouterLink to="/" className="ms-auto fw-400 text-primary text-underline">Billing history</RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style>
  .account-section{
    padding: 40px 45px;
  }
  .account-section span{
    font-size: 15px;
  }
  .account-section h6{
    font-size: 16px;
    color: #454545;
  }
  .account-section p, .account-section h5{
    font-size: 17px;
    color: var(--secondary-color);
  }
  .account-section h5{
    font-size: 20px;
  }
  .list-data{
    padding: 20px 15px;
  }
  .list-data:not(:last-child){
    border-bottom: 1px solid #E0EAEE;
  }
  .dark-gray-color{
    color: #53606B;
  }
  .light-gray-color{
    color: #838687;
  }
</style>


<script setup>
    import IconDownloadWhite from '../../../components/icons/IconDownloadWhite.vue';
    import IconPro from '../../../components/icons/IconPro.vue';
</script>

<template>
    <section className="hero-section img-cover d-flex align-items-center">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="hero-row d-flex">
                        <div class="hero-left-col">
                            <h1 className="heading-title">
                                Hide category and product from the shop page in
                                <img src="./../../../assets/images/logo/woocommerce-logo.png" class="img-fluid" alt="" />
                            </h1>
                            <p>Hide a specific category and hide the product from the shop page using WooCommerce</p>
                            <div className="d-flex align-items-center gap-3">
                                <button to="/checkout" className="primary-btn gap-2 big-btn d-flex align-items-center">
                                    <IconDownloadWhite/>
                                    Download for free
                                </button>
                                <button to="/checkout" className="primary-btn secondary-btn gap-2 big-btn d-flex align-items-center">
                                    <IconPro/>
                                    Get PRO
                                </button>
                            </div>
                        </div>
                        <div class="hero-right-col">
                            <img src="./../../../assets/images/medium-img/mock.png" class="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
                <div class="col-12 hero-counter-wrap">
                    <div class="hero-counter-row d-flex justify-content-center">
                        <div class="hero-counter-col w-100 d-flex align-items-center">
                            <img src="./../../../assets/images/icons/happy_ic.png" class="img-fluid" alt="" />
                            <div className="content-wrap">
                                <h5 className="fw-600 mb-0">150+</h5>
                                <span className="fw-400 mb-0 d-block">Happy Customers</span>
                            </div>
                        </div>
                        <div class="hero-counter-col w-100 d-flex align-items-center">
                            <img src="./../../../assets/images/icons/star_rating_ic.png" class="img-fluid" alt="" />
                            <div className="content-wrap">
                                <h5 className="fw-600 mb-0">7,000+</h5>
                                <span className="fw-400 mb-0 d-block">Total Download</span>
                            </div>
                        </div>
                        <div class="hero-counter-col w-100 d-flex align-items-center">
                            <img src="./../../../assets/images/icons/download-green.png" class="img-fluid" alt="" />
                            <div className="content-wrap">
                                <h5 className="fw-600 mb-0">15+</h5>
                                <span className="fw-400 mb-0 d-block">Five Star Rating</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> 
</template>
<style>
:root{
    --hero-left-col: 590px;
}
.hero-section{
    background-image: url(./../../../assets/images/banner/hero-main-banner.png);
    width: 100%;
    height: calc(100vh - var(--header-less-spacing));
}
.hero-left-col{
    width: var(--hero-left-col);
}
.hero-right-col{
    width: calc(100% - var(--hero-left-col));
    padding-left: 10px;
}
.hero-left-col p{
    font-size: 22px;
    line-height: 26px;
    color: var(--text-color);
    margin: 13px 0 75px;
}
.hero-counter-wrap{
    margin-top: 90px;
}
.hero-counter-row{
    grid-gap: 36px;
}
.hero-counter-col{
    max-width: 393px;
    min-height: 129px;
    background: var(--white-color);
    box-shadow: 0px 16px 63px rgba(0, 0, 0, 0.09);
    border-radius: 23px;
    padding: 15px 43px;
}
.hero-counter-col .content-wrap{
    margin-left: 30px;
    border-left: 1px solid #F1F1F1;
    padding-left: 27px;
}
.hero-counter-col h5{
    font-size: 28px;
    letter-spacing: -0.01em;
    color: var(--secondary-color);
}
.hero-counter-col span{
    font-size: 20px;
    letter-spacing: -0.01em;
    color: var(--text-color);
}
</style>
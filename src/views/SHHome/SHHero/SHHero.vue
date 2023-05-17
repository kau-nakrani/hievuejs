
<script setup>
    import SHButton from '../../../components/SHButton/SHButton.vue';
    import IconDownloadWhite from '../../../components/icons/IconDownloadWhite.vue';
    import IconPro from '../../../components/icons/IconPro.vue';
</script>

<template>
    <section className="hero-section img-cover d-flex align-items-center">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="hero-row d-xl-flex">
                        <div className="hero-left-col text-center text-xl-start">
                            <h1 className="heading-title">
                                Hide category and product from the shop page in
                                <img src="./../../../assets/images/logo/woocommerce-logo.png" className="img-fluid heding-between-img" alt="" />
                            </h1>
                            <p>Hide a specific category and hide the product from the shop page using WooCommerce</p>
                            <div className="d-sm-flex align-items-center justify-content-center justify-content-xl-start gap-3">
                                <button to="/checkout" className="primary-btn gap-2 big-btn d-flex align-items-center mx-auto mx-sm-0">
                                    <IconDownloadWhite/>
                                    Download for free
                                </button>
                                <SHButton class="primary-btn gap-2 big-btn d-flex align-items-center mx-auto mx-sm-0" type="btn" value="Download for free" text="text"></SHButton>
                                <button to="/checkout" className="primary-btn secondary-btn gap-2 big-btn d-flex align-items-center mt-2 mt-sm-0 mx-auto mx-sm-0">
                                    <IconPro/>
                                    Get PRO
                                </button>
                            </div>
                        </div>
                        <div className="hero-right-col mt-4 mt-sm-5 mt-xl-0">
                            <img src="./../../../assets/images/medium-img/mock.png" className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-12 hero-counter-wrap">
                    <div className="hero-counter-row d-sm-flex justify-content-center">
                        <div className="hero-counter-col w-100 d-flex align-items-center">
                            <img src="./../../../assets/images/icons/happy_ic.png" className="img-fluid" alt="" />
                            <div className="content-wrap">
                                <h5 className="fw-600 mb-0">150+</h5>
                                <span className="fw-400 mb-0 d-block">Happy Customers</span>
                            </div>
                        </div>
                        <div className="hero-counter-col w-100 d-flex align-items-center">
                            <img src="./../../../assets/images/icons/star_rating_ic.png" className="img-fluid" alt="" />
                            <div className="content-wrap">
                                <h5 className="fw-600 mb-0">7,000+</h5>
                                <span className="fw-400 mb-0 d-block">Total Download</span>
                            </div>
                        </div>
                        <div className="hero-counter-col w-100 d-flex align-items-center">
                            <img src="./../../../assets/images/icons/download-green.png" className="img-fluid" alt="" />
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
    min-height: calc(100vh - var(--header-less-spacing));
    /* min-height: 800px; */
    padding: 100px 12px 50px;
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
    border: 1px solid transparent;
}
.hero-counter-col:hover,.excellent-features-col:hover{
    border-color: var(--primary-color);
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
    transition: all 0.3s;
}
.hero-counter-col span{
    font-size: 20px;
    letter-spacing: -0.01em;
    color: var(--text-color);
}
.hero-counter-col:hover span{
    color: var(--accent-color1);
}
@media (max-width: 1799px){
    /* :root {
        --hero-left-col: 550px;
    } */
    .hero-left-col p,.hero-counter-col span{
        font-size: 18px;
    }
    .hero-counter-wrap {
        margin-top: 70px;
    }
}
@media (max-width: 1199px){
    .hero-left-col,.hero-right-col{
        width: 100%;
    }
    .hero-left-col p{
        margin: 13px 0 35px;
    }
    .hero-section{
        padding: 50px 12px;
    }
    .hero-counter-row {
        grid-gap: 16px;
    }
    .hero-counter-col {
        min-height: 100px;
        border-radius: 13px;
        padding: 5px 23px;
    }
    .hero-counter-col h5{
        font-size: 20px;
    }
    .hero-counter-col span{
        font-size: 16px;
    }
}
@media (max-width: 991px){
    .hero-counter-col .content-wrap {
        margin-left: 10px;
        padding-left: 10px;
    }
    .hero-counter-col {
        padding: 5px 13px;
    }
    .hero-counter-col span {
        font-size: 14px;
    }
}
@media (max-width: 767px){
    .hero-counter-col img{
        max-width: 30px;
    }
    .hero-counter-col .content-wrap {
        margin-left: 7px;
        padding-left: 7px;
    }
}
@media (max-width: 575px){
    .hero-counter-col:not(:last-child){
        margin-bottom: 20px;
    }
    .hero-counter-col .content-wrap {
        margin-left: 17px;
        padding-left: 17px;
    }
    .hero-counter-col {
        padding: 5px 30px;
    }
    .hero-counter-col img {
        max-width: 40px;
    }
    .heding-between-img{
        max-width: 150px;
    }
    .hero-left-col p, .hero-counter-col span {
        font-size: 16px;
    }
    .hero-counter-wrap{
        margin-top: 50px;
    }
}
</style>
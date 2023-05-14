
<script setup>
    // import IconDownloadWhite from '../../../components/icons/IconDownloadWhite.vue';
    // import IconPro from '../../../components/icons/IconPro.vue';
</script>

<template>
    <section className="why-choose-section position-relative z-2 section-extra-big-py">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 className="heading-title small-heading-title text-center">Why choose customer our Plugins?</h2>
                    <p className="label-heading-title">We create easy-to-use plugin so you can focus on what you do best.</p>
                    <div class="why-choose-row d-grid">
                        <div class="why-choose-col">
                            <div class="why-choose-img-box d-flex align-items-center justify-content-center mx-auto esty-to-use-bg">
                                <img src="./../../../assets/images/icons/why-choose1.svg" class="img-fluid" alt=""/>
                            </div>
                            <h4 class="text-center mb-2 fw-600">EASY TO USE</h4>
                            <p class="fw-400 mb-0">We design products that deliver unparalleled solutions and require zero effort to operate.</p>
                        </div>
                        <div class="why-choose-col">
                            <div class="why-choose-img-box d-flex align-items-center justify-content-center mx-auto open-source-bg">
                                <img src="./../../../assets/images/icons/why-choose2.svg" class="img-fluid" alt=""/>
                            </div>
                            <h4 class="text-center mb-2 fw-600">OPEN SOURCE</h4>
                            <p class="fw-400 mb-0">we used coding standards and best practices are important. Using our plugins ensures your website is secure whilst providing your site visitors, customers and potential clients with a fast user experience.</p>
                        </div>
                        <div class="why-choose-col">
                            <div class="why-choose-img-box d-flex align-items-center justify-content-center mx-auto loved-by-user-bg">
                                <img src="./../../../assets/images/icons/why-choose3.svg" class="img-fluid" alt=""/>
                            </div>
                            <h4 class="text-center mb-2 fw-600">LOVED BY USERS</h4>
                            <p class="fw-400 mb-0">Our plugins consistently receive high ratings and are featured on over 7k websites. It is our goal that the customer is satisfied with our product.</p>
                        </div>
                        <div class="why-choose-col">
                            <div class="why-choose-img-box d-flex align-items-center justify-content-center mx-auto fast-and-sequre-bg">
                                <img src="./../../../assets/images/icons/why-choose4.svg" class="img-fluid" alt=""/>
                            </div>
                            <h4 class="text-center mb-2 fw-600">FAST AND SECURE</h4>
                            <p class="fw-400 mb-0">Coding standards and best practices are important. Using our plugins ensure your website is secure while providing your site visitors, customers and potential clients with a fast user experience.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> 
</template>
<style>
.why-choose-section{
    background: var(--white-color);
    /* background: url(./../../../assets/images/banner/why-choose-bg.png) linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%);  */
}
.why-choose-section::after{
    content: '';
    background: url(./../../../assets/images/banner/why-choose-bg.png); 
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
}
.why-choose-row{
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    margin-top: 80px;
}
.why-choose-col{
    padding: 30px;
    border-radius: 15px;
}
.why-choose-img-box{
    width: 75px;
    height: 75px;
    background-color: #eee;
    border-radius: 100%;
    margin-bottom: 15px;
}
.why-choose-col h4{
    font-size: 20px;
    line-height: 26px;
    color: var(--secondary-color);
}
.why-choose-col p{
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.01em;
}
.esty-to-use-bg{
    background-color: #FFFAF2;
}
.open-source-bg{
    background-color: #EEF8FF;
}
.loved-by-user-bg{
    background-color: #FFF0F0;
}
.fast-and-sequre-bg{
    background-color: #F5F2FF;
}
</style>
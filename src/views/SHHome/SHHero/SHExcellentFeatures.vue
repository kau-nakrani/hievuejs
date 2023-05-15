
<script setup>
    // import IconDownloadWhite from '../../../components/icons/IconDownloadWhite.vue';
    // import IconPro from '../../../components/icons/IconPro.vue';
</script>

<template>
    <section className="excellent-features-section section-extra-big-py">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 className="heading-title small-heading-title text-center">Here are our excellent Features</h2>
                    <p className="label-heading-title">Install the app easily with the plugin. You can start immediately once it has been installed and your account has been created.</p>
                    <div class="excellent-features-row d-grid">
                        <div class="excellent-features-col d-flex align-items-center">
                            <img src="./../../../assets/images/icons/show_404_icon.png" class="img-fluid" alt="" />
                            <h6 clasName="fw-400">Show 404 page</h6>
                        </div>
                        <div class="excellent-features-col d-flex align-items-center">
                            <img src="./../../../assets/images/icons/multi_category_select_ic.png" class="img-fluid" alt="" /> 
                            <h6 clasName="fw-400">Multiple select category</h6>
                        </div>
                        <div class="excellent-features-col d-flex align-items-center">
                            <img src="./../../../assets/images/icons/menubar_remove_ic.png" class="img-fluid" alt="" /> 
                            <h6 clasName="fw-400">Menu bar remove</h6>
                        </div>
                        <div class="excellent-features-col d-flex align-items-center">
                            <img src="./../../../assets/images/icons/sitemap_remove_ic.png" class="img-fluid" alt="" /> 
                            <h6 clasName="fw-400">Site map remove</h6>
                        </div>
                        <div class="excellent-features-col d-flex align-items-center">
                            <img src="./../../../assets/images/icons/hide_category_.png" class="img-fluid" alt="" /> 
                            <h6 clasName="fw-400">Hide categories in shop page</h6>
                        </div>
                        <div class="excellent-features-col d-flex align-items-center">
                            <img src="./../../../assets/images/icons/hide_product_shop_page_ic.png" class="img-fluid" alt="" /> 
                            <h6 clasName="fw-400">Hide products in shop page</h6>
                        </div>
                        <div class="excellent-features-col d-flex align-items-center">
                            <img src="./../../../assets/images/icons/hide_category_shop_page_ic.png" class="img-fluid" alt="" /> 
                            <h6 clasName="fw-400">Hide products and categories in shop page</h6>
                        </div>
                        <div class="excellent-features-col d-flex align-items-center">
                            <img src="./../../../assets/images/icons/hide_category_widget_ic.png" class="img-fluid" alt="" /> 
                            <h6 clasName="fw-400">Hide categories in Widget</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> 
</template>
<style>
.excellent-features-section{
    background-color: var(--light-white-color);
}
.excellent-features-row{
    margin-top: 90px;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 28px;
}
.excellent-features-col{
    background: var(--white-color);
    box-shadow: 0px 7px 19px rgba(0, 0, 0, 0.04);
    border-radius: 21px;
    padding: 30px;
    border: 1px solid transparent;
    transition: all 0.3s;
}
.excellent-features-col h6{
    padding-left: 17px;
    font-size: 20px;
    line-height: 26px;
    color: var(--secondary-color);
}
.excellent-features-col img{
    flex: 0;
}
@media (max-width: 1799px){
    .excellent-features-col h6{
        font-size: 18px;
    }
    .excellent-features-col{
        border-radius: 15px;
    }
    .excellent-features-row {
        margin-top: 50px;
    }
}
@media (max-width: 1199px){
    .excellent-features-row {
        grid-template-columns: repeat(3, 1fr);
    }
}
@media (max-width: 991px){
    .excellent-features-row {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>
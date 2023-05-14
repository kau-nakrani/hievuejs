
<script>
    // import IconStar from './../../../components/icons/IconStar.vue';
    // import IconPro from '../../../components/icons/IconPro.vue';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
      };
    },
  };
</script>
<template>
    <section className="satisfied-customer-section img-cover section-extra-big-pt">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 className="heading-title small-heading-title text-center">Satisfied our customers</h2>
                    <p className="label-heading-title">Heard about us? Listen to what our customer has to say about us.</p>
                    <div class="satisfied-customer-slider">
                        <swiper
                            :slides-per-view="3"
                            :space-between="0"
                            :loop=true
                            :centeredSlides=true
                            :autoplay=true
                            @swiper="onSwiper"
                            @slideChange="onSlideChange"
                        >
                            <swiper-slide>
                                <div class="satisfied-customer-box text-center">
                                    <div class="satisfied-customer-img-box mx-auto">
                                        <div class="bg-white w-100 h-100 b-radius-100 d-flex align-items-center justify-content-center">
                                            <img src="./../../../assets/images/icons/show_404_icon.png" class="img-fluid" alt="" />
                                        </div>
                                    </div>
                                    <h5 className="fw-500">Goliathks</h5>
                                    <ul className="d-flex align-items-center justify-content-center gap-2">
                                        <li>
                                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.5261 0.296387L7.32478 6.81772L0.131531 7.84532L5.34855 12.9044L4.12345 20.0581L10.5261 16.6986L16.9288 20.0581L15.7037 12.9044L20.9207 7.84532L13.7274 6.81772L10.5261 0.296387Z" fill="#FCC153"/>
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.5261 0.296387L7.32478 6.81772L0.131531 7.84532L5.34855 12.9044L4.12345 20.0581L10.5261 16.6986L16.9288 20.0581L15.7037 12.9044L20.9207 7.84532L13.7274 6.81772L10.5261 0.296387Z" fill="#FCC153"/>
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.5261 0.296387L7.32478 6.81772L0.131531 7.84532L5.34855 12.9044L4.12345 20.0581L10.5261 16.6986L16.9288 20.0581L15.7037 12.9044L20.9207 7.84532L13.7274 6.81772L10.5261 0.296387Z" fill="#FCC153"/>
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.5261 0.296387L7.32478 6.81772L0.131531 7.84532L5.34855 12.9044L4.12345 20.0581L10.5261 16.6986L16.9288 20.0581L15.7037 12.9044L20.9207 7.84532L13.7274 6.81772L10.5261 0.296387Z" fill="#FCC153"/>
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.5261 0.296387L7.32478 6.81772L0.131531 7.84532L5.34855 12.9044L4.12345 20.0581L10.5261 16.6986L16.9288 20.0581L15.7037 12.9044L20.9207 7.84532L13.7274 6.81772L10.5261 0.296387Z" fill="#FCC153"/>
                                            </svg>
                                        </li>
                                    </ul>
                                    <p class="fw-400 mb-0">"I was looking for a new plugin to not show products from certain categories on the shop page.It seems to work well at first sight. I will definitely keep testing it, thanks to the developers."</p>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="satisfied-customer-box text-center">
                                    <div class="satisfied-customer-img-box mx-auto">
                                        <div class="bg-white w-100 h-100 b-radius-100 d-flex align-items-center justify-content-center">
                                            <img src="./../../../assets/images/icons/show_404_icon.png" class="img-fluid" alt="" />
                                        </div>
                                    </div>
                                    <h5 className="fw-500">Goliathks</h5>
                                    <ul className="d-flex align-items-center justify-content-center gap-2">
                                        <li>
                                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.5261 0.296387L7.32478 6.81772L0.131531 7.84532L5.34855 12.9044L4.12345 20.0581L10.5261 16.6986L16.9288 20.0581L15.7037 12.9044L20.9207 7.84532L13.7274 6.81772L10.5261 0.296387Z" fill="#FCC153"/>
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.5261 0.296387L7.32478 6.81772L0.131531 7.84532L5.34855 12.9044L4.12345 20.0581L10.5261 16.6986L16.9288 20.0581L15.7037 12.9044L20.9207 7.84532L13.7274 6.81772L10.5261 0.296387Z" fill="#FCC153"/>
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.5261 0.296387L7.32478 6.81772L0.131531 7.84532L5.34855 12.9044L4.12345 20.0581L10.5261 16.6986L16.9288 20.0581L15.7037 12.9044L20.9207 7.84532L13.7274 6.81772L10.5261 0.296387Z" fill="#FCC153"/>
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.5261 0.296387L7.32478 6.81772L0.131531 7.84532L5.34855 12.9044L4.12345 20.0581L10.5261 16.6986L16.9288 20.0581L15.7037 12.9044L20.9207 7.84532L13.7274 6.81772L10.5261 0.296387Z" fill="#FCC153"/>
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.5261 0.296387L7.32478 6.81772L0.131531 7.84532L5.34855 12.9044L4.12345 20.0581L10.5261 16.6986L16.9288 20.0581L15.7037 12.9044L20.9207 7.84532L13.7274 6.81772L10.5261 0.296387Z" fill="#FCC153"/>
                                            </svg>
                                        </li>
                                    </ul>
                                    <p class="fw-400 mb-0">"I was looking for a new plugin to not show products from certain categories on the shop page.It seems to work well at first sight. I will definitely keep testing it, thanks to the developers."</p>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="satisfied-customer-box text-center">
                                    <div class="satisfied-customer-img-box mx-auto">
                                        <div class="bg-white w-100 h-100 b-radius-100 d-flex align-items-center justify-content-center">
                                            <img src="./../../../assets/images/icons/show_404_icon.png" class="img-fluid" alt="" />
                                        </div>
                                    </div>
                                    <h5 className="fw-500">Goliathks</h5>
                                    <ul className="d-flex align-items-center justify-content-center gap-2">
                                        <li>
                                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.5261 0.296387L7.32478 6.81772L0.131531 7.84532L5.34855 12.9044L4.12345 20.0581L10.5261 16.6986L16.9288 20.0581L15.7037 12.9044L20.9207 7.84532L13.7274 6.81772L10.5261 0.296387Z" fill="#FCC153"/>
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.5261 0.296387L7.32478 6.81772L0.131531 7.84532L5.34855 12.9044L4.12345 20.0581L10.5261 16.6986L16.9288 20.0581L15.7037 12.9044L20.9207 7.84532L13.7274 6.81772L10.5261 0.296387Z" fill="#FCC153"/>
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.5261 0.296387L7.32478 6.81772L0.131531 7.84532L5.34855 12.9044L4.12345 20.0581L10.5261 16.6986L16.9288 20.0581L15.7037 12.9044L20.9207 7.84532L13.7274 6.81772L10.5261 0.296387Z" fill="#FCC153"/>
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.5261 0.296387L7.32478 6.81772L0.131531 7.84532L5.34855 12.9044L4.12345 20.0581L10.5261 16.6986L16.9288 20.0581L15.7037 12.9044L20.9207 7.84532L13.7274 6.81772L10.5261 0.296387Z" fill="#FCC153"/>
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.5261 0.296387L7.32478 6.81772L0.131531 7.84532L5.34855 12.9044L4.12345 20.0581L10.5261 16.6986L16.9288 20.0581L15.7037 12.9044L20.9207 7.84532L13.7274 6.81772L10.5261 0.296387Z" fill="#FCC153"/>
                                            </svg>
                                        </li>
                                    </ul>
                                    <p class="fw-400 mb-0">"I was looking for a new plugin to not show products from certain categories on the shop page.It seems to work well at first sight. I will definitely keep testing it, thanks to the developers."</p>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="satisfied-customer-box text-center">
                                    <div class="satisfied-customer-img-box mx-auto">
                                        <div class="bg-white w-100 h-100 b-radius-100 d-flex align-items-center justify-content-center">
                                            <img src="./../../../assets/images/icons/show_404_icon.png" class="img-fluid" alt="" />
                                        </div>
                                    </div>
                                    <h5 className="fw-500">Goliathks</h5>
                                    <ul className="d-flex align-items-center justify-content-center gap-2">
                                        <li>
                                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.5261 0.296387L7.32478 6.81772L0.131531 7.84532L5.34855 12.9044L4.12345 20.0581L10.5261 16.6986L16.9288 20.0581L15.7037 12.9044L20.9207 7.84532L13.7274 6.81772L10.5261 0.296387Z" fill="#FCC153"/>
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.5261 0.296387L7.32478 6.81772L0.131531 7.84532L5.34855 12.9044L4.12345 20.0581L10.5261 16.6986L16.9288 20.0581L15.7037 12.9044L20.9207 7.84532L13.7274 6.81772L10.5261 0.296387Z" fill="#FCC153"/>
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.5261 0.296387L7.32478 6.81772L0.131531 7.84532L5.34855 12.9044L4.12345 20.0581L10.5261 16.6986L16.9288 20.0581L15.7037 12.9044L20.9207 7.84532L13.7274 6.81772L10.5261 0.296387Z" fill="#FCC153"/>
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.5261 0.296387L7.32478 6.81772L0.131531 7.84532L5.34855 12.9044L4.12345 20.0581L10.5261 16.6986L16.9288 20.0581L15.7037 12.9044L20.9207 7.84532L13.7274 6.81772L10.5261 0.296387Z" fill="#FCC153"/>
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.5261 0.296387L7.32478 6.81772L0.131531 7.84532L5.34855 12.9044L4.12345 20.0581L10.5261 16.6986L16.9288 20.0581L15.7037 12.9044L20.9207 7.84532L13.7274 6.81772L10.5261 0.296387Z" fill="#FCC153"/>
                                            </svg>
                                        </li>
                                    </ul>
                                    <p class="fw-400 mb-0">"I was looking for a new plugin to not show products from certain categories on the shop page.It seems to work well at first sight. I will definitely keep testing it, thanks to the developers."</p>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="satisfied-customer-box text-center">
                                    <div class="satisfied-customer-img-box mx-auto">
                                        <div class="bg-white w-100 h-100 b-radius-100 d-flex align-items-center justify-content-center">
                                            <img src="./../../../assets/images/icons/show_404_icon.png" class="img-fluid" alt="" />
                                        </div>
                                    </div>
                                    <h5 className="fw-500">Goliathks</h5>
                                    <ul className="d-flex align-items-center justify-content-center gap-2">
                                        <li>
                                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.5261 0.296387L7.32478 6.81772L0.131531 7.84532L5.34855 12.9044L4.12345 20.0581L10.5261 16.6986L16.9288 20.0581L15.7037 12.9044L20.9207 7.84532L13.7274 6.81772L10.5261 0.296387Z" fill="#FCC153"/>
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.5261 0.296387L7.32478 6.81772L0.131531 7.84532L5.34855 12.9044L4.12345 20.0581L10.5261 16.6986L16.9288 20.0581L15.7037 12.9044L20.9207 7.84532L13.7274 6.81772L10.5261 0.296387Z" fill="#FCC153"/>
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.5261 0.296387L7.32478 6.81772L0.131531 7.84532L5.34855 12.9044L4.12345 20.0581L10.5261 16.6986L16.9288 20.0581L15.7037 12.9044L20.9207 7.84532L13.7274 6.81772L10.5261 0.296387Z" fill="#FCC153"/>
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.5261 0.296387L7.32478 6.81772L0.131531 7.84532L5.34855 12.9044L4.12345 20.0581L10.5261 16.6986L16.9288 20.0581L15.7037 12.9044L20.9207 7.84532L13.7274 6.81772L10.5261 0.296387Z" fill="#FCC153"/>
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.5261 0.296387L7.32478 6.81772L0.131531 7.84532L5.34855 12.9044L4.12345 20.0581L10.5261 16.6986L16.9288 20.0581L15.7037 12.9044L20.9207 7.84532L13.7274 6.81772L10.5261 0.296387Z" fill="#FCC153"/>
                                            </svg>
                                        </li>
                                    </ul>
                                    <p class="fw-400 mb-0">"I was looking for a new plugin to not show products from certain categories on the shop page.It seems to work well at first sight. I will definitely keep testing it, thanks to the developers."</p>
                                </div>
                            </swiper-slide>
                            ...
                        </swiper>
                    </div>
                </div>
            </div>
        </div>
    </section> 
</template>



<style>
.satisfied-customer-section{
    background: url(./../../../assets/images/banner/satisfied-bg.png) var(--light-white-color);
    width: 100%;
}
.satisfied-customer-box{
    background: var(--white-color);
    border-radius: 27px;
    padding: 60px 35px;
}
.satisfied-customer-img-box{
    width: 85px;
    height: 85px;
    border-radius: 100%;
    background-color: #eee;
    border: 3px dashed #FFADAD;
    padding: 7px;
    margin-bottom: 20px;
}
.satisfied-customer-box h5{
    font-size: 22px;
    letter-spacing: -0.01em;
    color: var(--secondary-color);
    margin-bottom: 15px;
}
.satisfied-customer-box ul{
    margin-bottom: 15px;
}
.satisfied-customer-box p{
    font-weight: 400;
    font-size: 20px;
    text-align: center;
}
.satisfied-customer-slider .swiper-wrapper{
    padding: 50px 0 70px;
}
.satisfied-customer-slider .swiper-slide {
    transition: all 200ms linear;
    transform: scale(0.8);
}
.satisfied-customer-slider .swiper-slide-active {
    transform: scale(1);
    box-shadow: 0px 15px 60px rgba(0, 0, 0, 0.04);
}
</style>


<script setup>
    // import IconDownloadWhite from '../../../components/icons/IconDownloadWhite.vue';
    // import IconPro from '../../../components/icons/IconPro.vue';
</script>

<template>
    <section className="faq-section section-extra-big-pt section-mid-pb">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 className="heading-title small-heading-title text-center">Frequently Asked Questions</h2>
                    <p className="label-heading-title">Quis autem velis ets reprehender net etid quiste voluptate.</p>
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button" type="bu fw-500tton" data-bs-toggle="collapse" data-bs-target="#collapseFaqOne" aria-expanded="true" aria-controls="collapseFaqOne">
                                Who should use the fluent form?
                            </button>
                            </h2>
                            <div id="collapseFaqOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFaqTwo" aria-expanded="false" aria-controls="collapseFaqTwo">
                                Do I need coding skills to use Fluent Forms?
                            </button>
                            </h2>
                            <div id="collapseFaqTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFaqThree" aria-expanded="false" aria-controls="collapseFaqThree">
                                Will Fluent Forms affect the speed of my website?
                            </button>
                            </h2>
                            <div id="collapseFaqThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFaqFour" aria-expanded="false" aria-controls="collapseFaqFour">
                                How can I use Fluent Forms on client sites?
                            </button>
                            </h2>
                            <div id="collapseFaqFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFaqFive" aria-expanded="false" aria-controls="collapseFaqFive">
                                Is Fluent Forms GDPR compliant?
                            </button>
                            </h2>
                            <div id="collapseFaqFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFaqSix" aria-expanded="false" aria-controls="collapseFaqSix">
                                Can I export my forms and submitted entries?
                            </button>
                            </h2>
                            <div id="collapseFaqSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFaqSeven" aria-expanded="false" aria-controls="collapseFaqSeven">
                                Where can I submit a new feature request?
                            </button>
                            </h2>
                            <div id="collapseFaqSeven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> 
</template>
<style>
.faq-section{
    background: var(--white-color);
}
.accordion{
    margin-top: 75px;
}
.accordion-item{
    border-width: 0;
}
.accordion-item .accordion-button{
    border: 1px solid #EAEEEF;
    border-width: 1px 0 0 !important;
    border-radius: 0 !important;
    font-size: 18px;
    color: var(--secondary-color);
    padding: 30px 0;
    background-color: transparent;
}
.accordion-item .accordion-button:hover{
    color: var(--primary-color);
}
.accordion-button:focus,
.accordion-button:not(.collapsed){
    box-shadow: none;
    background-color: transparent;
}
.accordion-button:not(.collapsed){
    color: var(--primary-color);
}
.accordion-item p{
    font-family: var(--secondary-font);
    margin-bottom: 0;
}
.accordion-body{
    border-top: 1px solid #EAEEEF;
    padding: 13px 0 0;
    margin-bottom: 44px;
}
@media (max-width: 1799px){
    .accordion {
        margin-top: 50px;
    }
    .accordion-item .accordion-button{
        padding: 20px 0;
    }
    .accordion-body {
        margin-bottom: 24px;
    }   
}
</style>
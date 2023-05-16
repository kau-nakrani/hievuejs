<script setup>
import SHTable from '../../components/SHTable/SHTable.vue';
</script>

<template>
    <section className="section-py body-banner bg-style0 d-flex align-items-center justify-content-center">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2 className="text-center fw-700 mb-0 heading-title small-heading-title">Billing History</h2>
                    <div className="box-wrapper billing-history-section bg-style0 position-relative">
                        <SHTable/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style>
  .billing-history-section{
    padding: 0 27px 44px;
  }
  .billing-history-table thead {
    position: sticky;
    top: 0;
    background-color: var(--white-color);
    z-index: 99;
  }
  .billing-history-table thead th{
    padding: 27px 15px 17px;
  }
  .billing-history-table tbody td{
    padding: 17px 15px;
  }
  .billing-history-table thead th,
  .billing-history-table tbody td{
    width: calc(100% / 5);
    min-width: 120px;
  }
  .billing-history-table tbody tr{
    border-top: 1px solid #E0EAEE;
    transition: all 0.3s;
  }
  .billing-history-table tbody tr:last-child{
    border-bottom: 1px solid #E0EAEE;
  }
  .billing-history-table .icon{
    padding-left: 25px;
  }
  .billing-history-table tbody tr:hover td{
    color: var(--primary-color);
  }
  .billing-history-table tbody tr:hover .path-fill-hover path{
    fill: var(--accent-color1);
  }
  @media (max-width: 991px){
    .billing-history-table tbody td{
      font-size: 15px;
      padding: 7px 5px;
    }
    .billing-history-section{
      padding: 0 27px 20px;
    }
  }
</style>

<script setup>
import IconCheckmark from '../icons/IconCheckmark.vue';
import IconDownload from '../icons/IconDownload.vue';

defineProps({
//   theadData: {
//     type: HTMLDivElement,
//     required: true
//   },
//   tbodyData: {
//     type: String,
//     required: true
//   }
    tableClassName: {
        type: String,
        required: true
    }
})
</script>
<template>
    <div class="table-responsive">
        <table className="custom-table billing-history-table">
            <thead>
               <th>Plan</th>
               <th>Date</th>
               <th>Amount</th>
               <th>Status</th>
               <th>Download</th>
            </thead>
            <tbody>
                <tr>
                    <td>Business</td>
                    <td>09 May, 2023</td>
                    <td>$75.00</td>
                    <td class="icon">
                        <IconCheckmark/>
                    </td>
                    <td class="icon">
                        <span class="cursor-pointer line-height-0"><IconDownload/></span>
                    </td>
                </tr>
                <tr>
                    <td>Business</td>
                    <td>09 May, 2023</td>
                    <td>$75.00</td>
                    <td class="icon">
                        <IconCheckmark/>
                    </td>
                    <td class="icon">
                        <span class="cursor-pointer line-height-0"><IconDownload/></span>
                    </td>
                </tr>
                <tr>
                    <td>Business</td>
                    <td>09 May, 2023</td>
                    <td>$75.00</td>
                    <td class="icon">
                        <IconCheckmark/>
                    </td>
                    <td class="icon">
                        <span class="cursor-pointer line-height-0"><IconDownload/></span>
                    </td>
                </tr>
                <tr>
                    <td>Business</td>
                    <td>09 May, 2023</td>
                    <td>$75.00</td>
                    <td class="icon">
                        <IconCheckmark/>
                    </td>
                    <td class="icon">
                        <span class="cursor-pointer line-height-0"><IconDownload/></span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<style>
.custom-table{
    width: 100%;
}
.custom-table thead th{
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: var(--text-color);
}
.custom-table tbody td{
    font-weight: 500;
    font-size: 17px;
    line-height: 22px;
    letter-spacing: -0.01em;
    color: var(--secondary-color);
}
</style>
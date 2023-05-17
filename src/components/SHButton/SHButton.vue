<script setup>
import { isHTMLTag } from '@vue/shared';

defineProps({
  text: {
    type: String,
    required: true
  },
  text0: {
    type: String,
    required: true
  },
  class: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  }
})
</script>
<template>
  <button v-bind:class="class" v-bind:type="type" v-bind:value="value">{{text}}</button>
</template>

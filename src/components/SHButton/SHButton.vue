<script setup>
defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>
<template>
  <button className="">{{ text }}</button>
</template>

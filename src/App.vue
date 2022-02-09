<template>
  <div>
    {{ state }}
    <TestComp />
  </div>
</template>

<script setup>
import { onMounted, reactive } from "vue"
import TestComp from "./components/TestComp.vue"
onMounted(() => {
  let state = reactive("yang")
})
</script>

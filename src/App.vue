<script setup lang="ts">
import { ref } from "vue"
let a: string = "yang"
let aa: any = ref(a)
console.log(typeof aa)
</script>

<template>
  <div >
    Hello {{ aa }} 
  </div>
</template>

<template>
  <div>
    测试插件
    {{NODE_ENV_TYPE}}
  </div>
</template>

<script setup>
import {reactive} from "vue"
let NODE_ENV_TYPE = reactive(NODE_ENV)
</script>
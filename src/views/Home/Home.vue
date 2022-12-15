<script setup lang="ts">
import { ref } from "vue";
import useMainStore from "@/stores/modules/mianStore";
const mianStore = useMainStore();
</script>
<template>
  <div class="Home">
    {{ mianStore.counter }}
    <ElButton @click="mianStore.increament">+1</ElButton>
  </div>
</template>
<style lang="less" scoped></style>

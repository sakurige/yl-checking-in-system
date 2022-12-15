<script setup lang="ts">
import { ElButton } from "element-plus";
</script>

<template>
  <div>
    <RouterView></RouterView>
    <ElButton round>Round</ElButton>
    <ElButton type="primary" round>Primary</ElButton>
    <ElButton type="success" round>Success</ElButton>
    <ElButton type="info" round>Info</ElButton>
    <ElButton type="warning" round>Warning</ElButton>
    <ElButton type="danger" round>Danger</ElButton>
  </div>
</template>

<style scoped lang="less"></style>

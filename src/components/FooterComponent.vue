<template>
  <div :class="$style.index">
    <main :class="$style.footerMain">
      <span :class="$style.maked">maked by LaCov</span>
    </main>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" module>
.index{
  background-color: #f4fdff;
  border-top: 3px solid #c6c6c6;
  .footerMain{
    margin: 0 auto;
    padding: 10px 10px;
    max-width: 1280px;
    .maked{
      color: #5c5c5c;
      font-size: 12px;
    }
  }
}
</style>
<script setup>
import LargeHeader from '@/components/templates/large/LargeHeader.vue';
</script>
<template>
  <div id="layout-large">
    <header>
      <LargeHeader/>
    </header>

    <main>
      <router-view />
    </main>
  </div>
</template>
<template>
  <div class="space-font box-layout">
    <div class="content-wrapper bg-light">
      <MyHeader />
      <Hero />
      <About />
      <Service />
      <Facts />
      <Process />
    </div>
    <MyFooter />
  </div>
</template>

<script setup>
import About from "@/components/About.vue";
import Facts from "@/components/Facts.vue";
import Hero from "@/components/Hero.vue";
import MyFooter from "@/components/MyFooter.vue";
import MyHeader from "@/components/MyHeader.vue";
import Process from "@/components/Process.vue";
import Service from "@/components/Service.vue";
</script>

<style lang="scss" scoped></style>

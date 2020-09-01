<template>
  <div id="app">
    <Navigation />

    <Body />

    <Footer />

    <!-- <button
      @click="dec"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
    >-</button>
    {{score}}
    <button
      @click="inc"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
    >+</button>-->
  </div>
</template>

<script>


import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Body from "@/views/Body";

// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  components: {
    Navigation,
    Body,
    Footer,
  }
};
</script>



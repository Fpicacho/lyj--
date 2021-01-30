<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="less">
@import "../src/assets/css/normalize.css";

body {
  #app {
    width: 1080px;
    margin: 0 auto;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url("assets/images/bg.png");
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -10;
    background-size: 100% 600px;
    background-position: top;
    background-repeat: no-repeat;
    opacity: 0.35;
  }
}
</style>

<template>
  <div class="home">
    <div class="homeNavigation">
      <SiderBar/>
      <Banner/>
      <News/>
    </div>
    <ImgList/>
    <subfield class="subfield"/>
  </div>
</template>

<script>
import SiderBar from "@/components/Home/SiderBar";
import Banner from "@/components/Home/Banner";
import News from "@/components/Home/News";
import ImgList from "@/components/Home/ImgList";
import subfield from "@/components/Subfield/subfield";
import {mapActions} from "vuex";

export default {
  name: 'Home',
  components: {
    SiderBar,
    Banner,
    News,
    ImgList,
    subfield,
  },
  created() {
    this.getNavList()
  },
  methods: {
    ...mapActions({getNavList: 'home/getNavList'})
  }
}
</script>

<style scoped lang="less">
.home {
  .homeNavigation {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }

  .subfield {
    margin-top: 30px;
  }
}
</style>

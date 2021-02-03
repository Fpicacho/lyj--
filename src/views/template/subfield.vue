<template>
  <div class="subfield">
    <div class="banner-block">
      <el-carousel>
        <el-carousel-item v-for="(item,index) in bannerList" :key="index" v-if="item.slide_id === 5">
          <a :href="item.url">
            <img :src="item.image" alt="">
          </a>
        </el-carousel-item>
      </el-carousel>
    </div>
    <subfieldDiv/>
  </div>
</template>

<script>
import subfieldDiv from "@/components/Subfield/subfield";
import {mapActions} from "vuex";

export default {
  name: "subfield",
  data() {
    return {
      bannerList: [],
    }
  },
  created() {
    this.getBanner().then((res) => {
      this.bannerList = res.data
      console.log(res.data)
    })
  },
  methods: {
    ...mapActions({getBanner: 'home/getBanner'})
  },
  components: {
    subfieldDiv,
  },
}
</script>

<style scoped lang="less">
.banner-block {
  margin-bottom: 25px;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
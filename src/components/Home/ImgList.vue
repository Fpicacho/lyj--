<template>
  <div style="overflow: hidden;margin-top: 30px">
    <div class="box" ref="temp">
      <div class="a">
        <img v-for="(item,index) in imgList" :key="index" :src="item.image" alt="" v-if="item.slide_id === 4"
             @click="goto(item.url)">
      </div>
      <div class="b">
        <img v-for="(item,index) in imgList" :key="index+100" :src="item.image" alt="" v-if="item.slide_id === 4"
             @click="goto(item.url)">
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

let x = 0;
export default {
  data() {
    return {
      tempInterval: undefined,
      imgList: [],
    };
  },
  created() {
    this.getBanner().then((res => {
      this.imgList = res.data
    }))
  },
  destroyed() {
    clearInterval(this.tempInterval);
  },
  mounted() {
    this.tempInterval = setInterval(this.rollTemp, 50);
  },
  methods: {
    ...mapActions({getBanner: "home/getBanner"}),
    goto(url) {
      window.location.href = url
    },
    rollTemp() {
      let all = 0;
      let count = this.$refs.temp.childElementCount;
      for (let i = 0; i < count; i++) {
        all += this.$refs.temp.children[i].offsetWidth;
      }
      let half = all >> 1;
      if (x < 1 - half) {
        x = 0;
      }
      x -= 1;
      this.$refs.temp.style.transform = "translateX(" + x + "px)";
    }
  }
};
</script>

<style scoped lang="less">
.box {
  display: flex;

  .a, .b {
    display: flex;

    img {
      width: 170px;
    }
  }
}
</style>
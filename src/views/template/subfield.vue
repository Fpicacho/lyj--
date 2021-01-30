<template>
  <div class="subfield">
    <div class="banner-block">
      <el-carousel>
        <el-carousel-item v-for="(item,index) in bannerList" :key="index">
          <img :src="item" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <subfieldDiv/>
  </div>
</template>

<script>
import subfieldDiv from "@/components/Subfield/subfield";

export default {
  name: "subfield",
  data() {
    return {
      bannerList: [
        'https://pic.baike.soso.com/ugc/baikepic2/0/20160905155609-1663743508.jpg/800'
        , 'https://pic.baike.soso.com/ugc/baikepic2/0/ori-20200715190843-1787595843_jpg_442_506_31681.jpg/800'
        , 'https://pic.baike.soso.com/ugc/baikepic2/0/20160912155158-602679312.jpg/800'
        , 'https://pic.baike.soso.com/ugc/baikepic2/0/20160902065210-517491613.jpg/800'
      ],
    }
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
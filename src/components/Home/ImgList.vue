<template>
  <div class="imgList">
    <ul>
      <li>
        <img src="../../assets/images/list/pic1.jpg" alt="">
      </li>
      <li>
        <img src="../../assets/images/list/pic2.jpg" alt="">
      </li>
      <li>
        <img src="../../assets/images/list/pic3.jpg" alt="">
      </li>
      <li>
        <img src="../../assets/images/list/pic1.jpg" alt="">
      </li>
      <li>
        <img src="../../assets/images/list/pic2.jpg" alt="">
      </li>
      <li>
        <img src="../../assets/images/list/pic1.jpg" alt="">
      </li>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImgList",
  data() {
    return {
      // imgList: [
      //   'https://pic.baike.soso.com/ugc/baikepic2/11806/ori-20200713145235-1819422884_jpg_1055_977_73437.jpg/0',
      //   'https://pic.baike.soso.com/ugc/baikepic2/11768/ori-20200713145236-1592690161_jpg_1120_675_93532.jpg/0',
      //   'https://pic.baike.soso.com/ugc/baikepic2/11195/ori-20200713145236-474083634_jpg_1069_821_77164.jpg/0',
      //   'https://pic.baike.soso.com/ugc/baikepic2/10735/ori-20200713145235-1216879789_jpg_1416_1079_98077.jpg/0',
      //   'http://5b0988e595225.cdn.sohucs.com/images/20171220/03c59ccb9c9a4ed4a70bce7f848d241b.jpeg',
      //   'http://cache.k.sohu.com/img7/adapt/wb/fetch/2013/10/26/82273132_302_1000.jpg'
      // ]
    }
  }
}
</script>

<style scoped lang="less">
.imgList {
  margin-top: 30px;
  ul {
    display: flex;
    justify-content: space-between;

    li {
      width: 170px;
      height: 134px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
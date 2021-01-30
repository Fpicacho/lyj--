<template>
  <div class="header">
    <div class="titleBox">
      <div class="titleBox-L">
        <div class="titleBox-L-T">
          <img src="../assets/images/logo.png" alt="">
          <img src="../assets/images/title.png" alt="">
        </div>
        <div class="titleBox-L-B">
          <p>—— Http://www.djclyj.com ——</p>
        </div>
      </div>
      <div class="titleBox-R">
        <ul v-for="(item,index) in lists" :key="index">
          <li>{{ item.title }} {{ item.percent }}</li>
        </ul>
      </div>
    </div>
    <HeaderNavbar/>
  </div>
</template>

<script>
import HeaderNavbar from "@/components/Header/HeaderNavbar";

export default {
  name: "Header",
  data() {
    return {
      lists: [
        {title: "森林覆盖率:", percent: "459%"},
        {title: "旅业区总面积:", percent: "325%"},
        {title: "森林总蓄积量:", percent: "233%"}
      ]
    }
  },
  components: {
    HeaderNavbar
  }
}
</script>

<style scoped lang="less">
.header {
  margin-top: 36px;

  .titleBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 136px;

    .titleBox-L {
      width: 747px;

      .titleBox-L-T {
        display: flex;
        align-items: center;
        justify-content: space-between;

        img:nth-child(1) {
          width: 96px;
          height: 96px;
        }

        img:nth-child(2) {
          width: 610px;
          height: 76px;
        }
      }

      .titleBox-L-B {
        p {
          margin: 0;
          text-align: center;
          color: #397c5f;
          font-size: 27px;
          font-weight: bold;
        }
      }
    }

    .titleBox-R {
      ul {
        li {
          color: #397c5f;
          font-size: 19px;
          line-height: 150%;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
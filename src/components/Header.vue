<template>
  <div class="header">
    <div class="titleBox">
      <div class="titleBox-R" style="margin-left: 830px">
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
import {mapActions} from "vuex";

export default {
  name: "Header",
  data() {
    return {
      lists: []
    }
  },
  created() {
    this.getLists().then((res => {
      this.lists = res.data
    }))
  },
  methods: {
    ...mapActions({getLists: 'home/getLists'})
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
    background: url("../assets/images/titleBGC.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
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
          font-size: 16px;
          line-height: 150%;
          font-weight: bold;
          color: #fff;
          text-shadow: -1px -1px 0 #4f4d57,
            1px -1px 0 #4f4d57,
          -1px 1px 0 #4f4d57,
          1px 1px 0 #4f4d57,
          0px 2px 2px rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
}
</style>
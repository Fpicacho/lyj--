<template>
  <div class="headerNavbar">
    <div class="header-line"></div>
    <nav>
      <ul>
        <router-link tag="li" to="/home" active-class="active">首页</router-link>
        <router-link tag="li" active-class="active" v-for="(item,index) in getList"
                     :to="item.template==='List'?'/subfield/'+item.article_id
                     :item.template==='Page'?'/article_detail/'+item.article_id
                     :item.template==3?'/video/'+item.article_id
                     :item.template==4?'/picture/'+item.article_id
                     :item.template==5?'/subfield/'+item.article_id:''"
                     :key="index">
          <el-dropdown v-if="item.child">
            <span>
              {{ item.name }}
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-for="(item,index) in item.child" :key="index">
                <router-link
                    :to="item.template==='List'?'/subfield/'+item.article_id
                    :item.template==='Page'?'/article_detail/'+item.article_id
                    :item.template==3?'/video/'+item.article_id
                    :item.template==4?'/picture/'+item.article_id
                    :item.template==5?'/subfield/'+item.article_id:''" tag="li">{{ item.name }}
                </router-link>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span v-else>{{ item.name }}</span>
        </router-link>
      </ul>
    </nav>
  </div>

</template>

<script>


import {mapActions} from "vuex";

export default {
  name: "HeaderNavbar",
  data() {
    return {
      link_list: [],
    }
  },
  computed: {
    getList: function () {
      return this.$store.state.home.listInfo.main_nav
    }
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
.headerNavbar {
  .header-line {
    width: 100%;
    height: 6px;
    background: #005fbc;
    border-radius: 5px;
    //margin-top: 37px;
  }

  nav {
    margin-top: 10px;
    margin-bottom: 10px;

    ul {
      display: flex;

      li {
        width: 108px;
        height: 40px;
        font-weight: bold;
        font-size: 20px;
        text-align: center;
        line-height: 40px;
        list-style: none;
        cursor: pointer;

        span {
          font-size: 20px;
          color: #000;
        }
      }
    }
  }

  .active {
    color: #397C5F
  }

}
</style>
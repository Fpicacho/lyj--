<template>
  <div class="siderBar">
    <ul>
      <li v-for="(item,index) in getList" :key="index" @click="clickSiderBar(item.article_id)">
        <span>●</span>
        {{ item.name }}
      </li>
      <li>
        <a href="http://www.djclyj.com:8090/"
           style="text-decoration: none;color: #fff;width: 98px;display: flex;justify-content: space-between" id="test">
          <span>●</span>
          办公系统
        </a>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "SiderBar",
  data() {
    return {
      siderBarList: null
    }
  },
  computed: {
    getList: function () {
      return this.$store.state.home.listInfo.left_nav
    }
  },
  methods: {
    clickSiderBar(index) {
      console.log(index)
      this.$router.push(`subfield/${index}`)
      // this.$store.commit('setBanner', index)
    }
  }
}
</script>

<style scoped lang="less">
.siderBar {
  width: 125px;
  height: 262px;
  background: #565657;
  text-align: center;
  font-size: 18px;
  color: #fff;

  ul {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-evenly;

    li {
      cursor: pointer;
      display: flex;
      justify-content: space-evenly;
      transition: 0.5s;
      &:hover {
        transition: 0.5s;
        color: #0DBD40;
        a:hover{
          transition: 0.5s;
          color: #0DBD40 !important;
        }
      }

    }
  }
}
</style>
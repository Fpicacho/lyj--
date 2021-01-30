<template>
  <div class="footer">
    <ul>
      <li v-for="(item,index) in footerList" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      footerList: ['东京城林业局有限公司主办', '资讯监督电话：0453-7901262', '邮箱：djclyibgs@163.com', '地址：黑龙江省宁安市东京城林业局有限公司', '黑ICP备：14006276号-3']
    }
  }
}
</script>

<style scoped lang="less">
.footer {
  border-top: 1px solid #999;
  margin-top: 75px;
  margin-bottom: 26px;

  ul {
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
    font-size: 14px;
    color: #505050;

    li {

    }
  }
}
</style>
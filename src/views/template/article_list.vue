<template>
  <div class="article_list">
    <breadcrumb/>
    <ul>
      <li v-for="(item,index) in data_list" :key="index" @click="handleList(item.id)">
        <span>{{ item.post_title|ellipsis(20) }}</span><span>{{ item.create_time }}</span>
      </li>
    </ul>
<!--    <div class="block">-->
<!--      <el-pagination-->
<!--          @current-change="currentChange"-->
<!--          layout="prev, pager, next"-->
<!--          :total="80">-->
<!--      </el-pagination>-->
<!--    </div>-->
  </div>
</template>

<script>
import breadcrumb from "@/components/breadcrumb";
import {mapActions} from "vuex"
import moment from 'moment'

export default {
  name: "article_list",
  data() {
    return {
      data_list: []
    }
  },
  created() {
    this.getArticleList({id: this.$route.params.id}).then(res => {
      res.data.forEach(item => {
        item.create_time = moment(item.create_time*1000).format('YYYY-MM-DD HH:mm:ss')
        this.data_list.push(item)
      })
    })
  },
  methods: {
    ...mapActions({getArticleList: 'article/getArticleList'}),
    handleList(val) {
      this.$router.push(`/article_detail/${val}`)
    },
    currentChange(val) {
      console.log(val)
    }
  },
  components: {
    breadcrumb
  }
}
</script>

<style scoped lang="less">
.article_list {
  background: #fff;
  border: 1px solid #005FBC;
  padding: 28px;

  ul {
    margin-top: 20px;
    font-size: 20px;

    li {
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
      cursor: pointer;

      &:hover {
        color: #397c5f;
      }
    }
  }

  .block {
    text-align: center;
    margin-top: 30px;
  }
}
</style>
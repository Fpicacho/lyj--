<template>
  <div class="article_detail">
    <breadcrumb/>
    <p class="title">{{ title }}</p>
    <p class="date">{{ date }}</p>
    <div v-html="container" style="word-break:break-all"></div>
  </div>
</template>

<script>
import breadcrumb from "@/components/breadcrumb";
import {mapActions} from "vuex"
import moment from 'moment'

export default {
  name: "article_detail",
  components: {
    breadcrumb
  },
  data() {
    return {
      title: null,
      date: null,
      container: null
    }
  },
  created() {
    this._getArticleDetails({id: this.$route.params.id})
  },
  methods: {
    ...mapActions({getArticleDetails: "article/getArticleDetails"}),
    _getArticleDetails(id) {
      this.getArticleDetails(id).then(res => {
        this.container = res.data[0].post_content
        this.title = res.data[0].post_title
        this.date = moment(res.data[0].create_time * 1000).format('YYYY-MM-DD HH:mm:ss')
      })
    }
  },
  watch: {
    $route() {
      this._getArticleDetails({id: this.$route.params.id})
    }
  }
}
</script>

<style scoped lang="less">
.article_detail {
  .title, .date {
    text-align: center;
  }

  .title {
    font-size: 30px;
  }

  .date {
    font-size: 14px;
    color: #999999;
  }

  background: #fff;
  border: 1px solid #005FBC;
  padding: 28px
}
</style>
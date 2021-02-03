<template>
  <div class="News">
    <div class="tabBar">
      <ul>
        <li v-for="(item,index) in getList" :key="index" @click="handleTabBar(index,item)"
            :class="{handleColor:index === flag}">{{ item.name }}
        </li>
      </ul>
    </div>
    <div class="bannerNewList">
      <ul>
        <li v-for="(item,index) in data_list" :key="index" @click="goto(item.id)">
          <span>{{ item.post_title | ellipsis(15) }}</span>
          <span>{{ item.create_time }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import moment from 'moment'

export default {
  name: "News",
  data() {
    return {
      flag: 0,
      data_title: null,
      data_list: []
    }
  },
  computed: {
    getList: function () {
      return this.$store.state.home.listInfo.right_nav
    }
  },
  created() {
    // BUG
    this.data_list = []
    this.getArticleList({id: 15}).then(res => {
      res.data.forEach(item => {
        item.create_time = moment(item.create_time * 1000).format('YYYY-MM-DD')
        this.data_list.push(item)
      })
    })
  },
  methods: {
    ...mapActions({getArticleDetails: 'article/getArticleDetails', getArticleList: 'article/getArticleList'}),
    handleTabBar(val, item) {
      this.data_list = []
      this.getArticleList({id: item.article_id}).then(res => {
        res.data.forEach(item => {
          item.create_time = moment(item.create_time * 1000).format('YYYY-MM-DD')
          this.data_list.push(item)
        })
      })
      this.flag = val
    },
    goto(index) {
      this.$router.push(`/article_detail/${index}`)
    }
  },
}
</script>

<style scoped lang="less">
.News {
  background: rgba(255, 255, 255, 0.7);
  width: 450px;

  .tabBar {
    height: 42px;

    ul {
      height: 100%;
      display: flex;
      justify-content: space-evenly;
      line-height: 42px;
      text-align: center;
      font-size: 14px;
      font-weight: bold;
      color: #343639;

      li {
        cursor: pointer;

        &:hover {
          color: #2A7208;
        }
      }
    }
  }

  .bannerNewList {
    ul {
      padding: 10px;
      height: 198px;
      border: 1px solid #397C5F;
      font-size: 13px;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      //justify-content: space-between;

      li {
        display: flex;
        justify-content: space-between;
        cursor: pointer;
        margin-top: 8.5px;

        &:hover {
          color: #2A7208;
        }
      }
    }
  }
}

.handleColor {
  //color: #2A7208;
  color: #fff;
  background: #397c5f;
  padding: 0 10px;

  &:hover {
    color: #fff !important;
  }
}
</style>
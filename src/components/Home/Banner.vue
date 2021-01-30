<template>
  <div class="banner">
    <div class="block">
      <el-carousel height="262px" v-if="this.$store.state.isBanner">
        <el-carousel-item v-for="(item,index) in bannerList" :key="index">
          <img :src="item" alt="" style="height: 98%">
        </el-carousel-item>
      </el-carousel>
      <div class="bannerNewList" v-else>
        <ul>
          <li v-for="(item,index) in data_list" :key="index" @click="goto(item)">
            <span>{{ item.post_title | ellipsis(15) }}</span>
            <span>{{ item.create_time }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import moment from 'moment'

export default {
  name: "Banner",
  data() {
    return {
      bannerList: null,
      data_list: [],
      listId: ""
    }
  },
  created() {
    this.getBanner().then(res => {
      this.bannerList = res.data
    })
  },
  methods: {
    ...mapActions({getBanner: 'home/getBanner', getArticleList: 'article/getArticleList'}),
    goto(item) {
      this.$router.push(`/article_detail/${item.id}`)
    }
  },
  watch: {
    '$store.state.listId': function (nVal) {
      this.listId = nVal
      console.log(this.listId)
      this.getArticleList({id: this.listId}).then(res => {
        console.log(res.data)
        // this.data_list = res.data
        this.data_list = []
        res.data.forEach(item => {
          item.create_time = moment(item.create_time * 1000).format('YYYY-MM-DD HH:mm:ss')
          this.data_list.push(item)
        })
      })
    }
  }
}
</script>

<style scoped lang="less">
.banner {
  width: 430px;
  height: 258px;
  border: 2px solid #397C5F;

  .block {
    height: 100%;;

    .bannerNewList {
      height: 100%;
      background: rgba(255, 255, 255, 0.7);

      ul {
        height: 100%;
        display: flex;
        flex-direction: column;
        //justify-content: space-evenly;
        overflow: hidden;
        font-size: 15px;

        li {
          display: flex;
          justify-content: space-between;
          margin-top: 11px;
          padding: 0 5px;
          cursor: pointer;

          &:hover {
            color: #397c5f;
          }
        }
      }
    }
  }
}
</style>
<template>
  <div class="subfield-block">
    <div class="item" v-for="(item,index) in list" :key="index">
      <div class="title" style="margin-top: 15px"><span class="label"><i class="el-icon-menu"></i>{{ item.name }}</span>
      </div>
      <div class="list">
        <ul>
          <li v-for="(item,index) in item.list" :key="index" @click="handleList(item.id)">{{ item.post_title }}</li>
          <el-pagination
              v-if="item.count>10"
              layout="prev, pager, next"
              style="text-align: center;width: 100%"
              @current-change="currentChange($event,index,item.id)"
              :total="item.count">
          </el-pagination>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: "subfield",
  data() {
    return {
      list: [],
    }
  },
  created() {
    const re = {
      id: this.$route.params.id,
      page: 1
    }
    this._getCategoryInfo(re).then(res => {
      this.list = res.data
    })
  },
  methods: {
    ...mapActions({getCategoryInfo: "article/getCategoryInfo", portalCategory: "article/portalCategory",slipde_page:"article/slipde_page"}),
    _getCategoryInfo(id) {
      return this.getCategoryInfo(id)
    },
    handleList(val) {
      this.$router.push(`/article_detail/${val}`)
    },
    currentChange(current, index, id) {
      const re = {
        id,
        page: current
      }
      this.slipde_page(re).then(res => {
        this.list[index].list = res.data
      })
    }
  },
  watch: {
    $route() {
      const re = {
        id: this.$route.params.id,
        page: 1
      }
      this._getCategoryInfo(re).then(res => {
        this.list = res.data
      })
    }
  }
}
</script>

<style scoped lang="less">
.subfield-block {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .item {
    width: 486px;

    .title {
      height: 40px;
      background-image: linear-gradient(#FDFDFD, #ECECEC);
      border: 1px solid #CDCDCD;
      box-sizing: border-box;

      .label {
        border: 1px solid #CDCDCD;
        border-bottom: 1px solid #fff;
        border-top: 2px solid #0DBD40;
        height: 100%;
        display: block;
        width: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 8px;
        background: #fff;
        color: #2A7208;
        font-weight: bold;
      }
    }

    .list {
      background: #fff;

      ul {
        border: 1px solid #CDCDCD;

        li {
          font-size: 14px;
          border-bottom: 1px dashed #999;
          width: 460px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          height: 35px;
          line-height: 35px;
          cursor: pointer;
          padding: 0 10px;

          &:hover {
            color: #397c5f;
          }
        }
      }
    }

    /deep/ .el-pagination {
      background: #fff;
      padding: 0;
    }
  }
}
</style>
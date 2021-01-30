<template>
  <div class=" subfield-block">
    <div class="subfield-item" v-for="(item,index) in list" :key="index" :class="item.type==1?'img-title':''">
      <div class="title"><span class="label"><i class="el-icon-menu"></i>{{ item.title }}</span></div>
      <div class="list-block">
        <div class="list-pic" v-if="item.pic">
          <img :src="item.pic"/>
        </div>
        <ul v-if="item.type==0" class="item-list">
          <li :class="item.pic?'have-pic':''" class="item-list-li" v-for="(it,ix) in item.children" :key="ix"
              @click="handleToTemplate(it)">{{ it.title }}
          </li>
        </ul>
        <ul class="list-img" v-if="item.type==1">
          <li style="margin-right: 5px!important;" class="item-list-img" v-for="(it,ix) in item.children" :key="ix"
              @click="handleToTemplate(it)">
            <img style="width: 210px;height: 122px;" :src="it.pic"/>
            <div class="img-title">{{ it.title }}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "subfield",
  data() {
    return {
      list: [
        {
          title: '法制森工', type: 0, children: [
            {title: '省林区中级人民法院：司法警务保障有力', template: 3, id: 4},
            {title: '省林区中级人民法院：党风廉政建设和反腐败...', template: 4, id: 5},
            {title: '省林区中级人民法院：一站式多元解纷及诉讼...', template: 5, id: 6},
            {title: '举办法律培训班 促进依法治企依法护林', template: 2, id: 7},
            {title: '绥棱：加大监督检查力度 打响冬季安全生产保...', template: 2, id: 7},
            {title: '龙江森工集团召开毁林种参专项打击行动工作会议', template: 2, id: 7},
          ]
        },
        {
          title: '平安林区', type: 0, pic: require('@/assets/images/list/pic4.gif'), children: [
            {title: '八面通：开展疫情防控宣传周显成效', template: 3, id: 4},
            {title: '【疫情防控】佳木斯木材综合加工厂：筑牢疫...', template: 4, id: 5},
            {title: '【疫情防控】鹤立：严防联控 吹响抗疫"集结号"', template: 5, id: 6},
            {title: '【疫情防控】山河屯：高度重视 精准施策 全...', template: 2, id: 7},
            {title: '【疫情防控】山河屯：高度重视 精准施策 全...', template: 2, id: 7},
            {title: '【疫情防控】山河屯：高度重视 精准施策 全...', template: 2, id: 7},
          ]
        },
        {
          title: '图说校园', type: 1, children: [
            {title: '八面通：开展疫情防控宣传周显成效', template: 3, id: 4, pic: require('@/assets/images/list/pic1.jpg')},
            {title: '【疫情防控】佳木斯木材综合加工厂：筑牢疫...', template: 4, id: 5, pic: require('@/assets/images/list/pic2.jpg')},
            {title: '【疫情防控】佳木斯木材综合加工厂：筑牢疫...', template: 4, id: 5, pic: require('@/assets/images/list/pic3.jpg')},
          ]
        }
      ]
    }
  },
  mounted() {

  },
  methods: {
    handleToTemplate(item) {
      this.$router.push(item.template == 1 ? '/article_list/' + item.id : item.template == 2 ? '/article_detail/' + item.id : item.template == 3 ? '/video/' + item.id : item.template == 4 ? '/picture/' + item.id : item.template == 5 ? '/subfield/' + item.id : '')
    }
  }
}
</script>

<style scoped lang="less">
.banner-block {
  height: 310px;
  width: 100%;

  .el-carousel__item {
    width: 100%;
    height: 100%;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
}

.subfield-block {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .subfield-item {
    width: 45%;
    height: 265px;

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

        i {
          margin-right: 8px;
          color: #0DBD40;
        }


      }
    }

    .item-list {
      height: 216px;

      .item-list-li {
        font-size: 14px;
        border-bottom: 1px dashed #999;
        width: 480px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        height: 35px;
        line-height: 35px;
        cursor: pointer;
      }

      .have-pic {
        width: 340px !important;

      }

      .item-list-img {
        width: 210px;
        height: 122px;

        img {
          width: 210px;
          height: 122px;

        }
      }
    }

    ul {
      padding: 10px 0;
    }

    .list-img {
      display: flex;

      li {
        position: relative;

        .img-title {
          width: 100%;
          height: 30px;
          background: #000;
          color: #fff;
          opacity: .6;
          position: absolute;
          bottom: 0;
          left: 0;
          box-sizing: border-box;
          padding: 0 5px;
          line-height: 30px;
          font-size: 14px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }

    .list-block {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .list-pic {
        width: 130px;
        height: 164px;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .img-title {
    width: 100% !important;
  }
}
</style>
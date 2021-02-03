<template>
  <div class="home">
    <div class="homeNavigation">
      <SiderBar/>
      <Banner/>
      <News/>
    </div>
    <ImgList/>
    <!--    <subfield class="subfield"/>-->
    <div class="subfield-block">
      <div class="subfieldT" style="margin-top: 30px">
        <div class="L">
          <div class="title"><span class="label"><i class="el-icon-menu"></i>鹿苑岛</span></div>
          <div class="list">
            <ul>
              <li v-for="(item,index) in fa_zhi" :key="index" @click=goto(item.id)>{{ item.post_title }}</li>
            </ul>
          </div>
        </div>
        <div class="R">
          <div class="title"><span class="label" style="font-size: 14px"><i class="el-icon-menu"></i>北湖头疗养院</span></div>
          <div class="list">
            <ul>
              <li v-for="(item,index) in ping_an" :key="index" @click=goto(item.id)>{{ item.post_title }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="subfieldB">
        <div class="title"><span class="label" style="font-size: 14px"><i class="el-icon-menu"></i>林区特色产品</span></div>
        <ul class="list-img">
          <li style="margin-right: 5px!important; cursor: pointer" class="item-list-img" v-for="(item,index) in xiao_yuan" :key="index"
              @click=goto(item.id)>
            <img style="width: 210px;height: 122px;" :src="item.image"/>
            <div class="img-title">{{ item.post_title }}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import SiderBar from "@/components/Home/SiderBar";
import Banner from "@/components/Home/Banner";
import News from "@/components/Home/News";
import ImgList from "@/components/Home/ImgList";
import subfield from "@/components/Subfield/subfield";
import {mapActions} from "vuex";

export default {
  name: 'Home',
  components: {
    SiderBar,
    Banner,
    News,
    ImgList,
    subfield,
  },
  data() {
    return {
      fa_zhi: "",
      ping_an: "",
      xiao_yuan: ""
    }
  },
  created() {
    this.getNavList()
    this.getSubfield().then(res => {
      this.fa_zhi = res.data.fa_zhi
      this.ping_an = res.data.ping_an
      this.xiao_yuan = res.data.xiao_yuan
    })
  },
  methods: {
    ...mapActions({getNavList: 'home/getNavList', getSubfield: "home/getSubfield"}),
    goto(id) {
      this.$router.push(`/article_detail/${id}`)
    }
  }
}
</script>

<style scoped lang="less">
.home {
  .homeNavigation {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }

  .subfield-block {
    .subfieldB {
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
    }

    .subfieldT {
      width: 100%;
      display: flex;
      justify-content: space-between;

      .L, .R {
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
          margin-bottom: 20px;
          ul {
            background: #fff;
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
              &:hover{
                color: #397c5f;
              }
            }
          }
        }
      }
    }
  }

  .subfield {
    margin-top: 30px;
  }

}
</style>

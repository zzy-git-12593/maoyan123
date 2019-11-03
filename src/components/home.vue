<template>
  <div class="container">
    <!-- top -->
    <div class="head-title" v-if="navPage==1">猫眼电影</div>
    <div class="head-title" v-else-if="navPage==2">影院</div>
    <div class="head-title" v-else-if="navPage==3">我的</div>

    <!-- 正在热映和即将上映路由切换 -->
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
    <!-- footer -->
    <ul>
      <li><i class="iconfont icon-dianying" @click="pathToFlim"></i>电影</li>
      <li><i class="iconfont icon-dianyingyuan" @click="pathToCinema"></i>影院</li>
      <li><i class="iconfont icon-tubiaolunkuo-" @click="pathToMy"></i>我的</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navPage: 1
    }
  },
  methods: {
    pathToFlim () {
      if (this.$route.path !== '/home/film/nowplaying') {
        this.$router.push('/home/film/nowplaying')
        this.navPage = 1
      }
    },
    pathToCinema () {
      if (this.$route.path !== '/home/cinema') {
        this.$router.push('/home/cinema')
        this.navPage = 2
      }
    },
    pathToMy () {
      if (this.$route.path !== '/my') {
        this.$router.push('/my')
        this.navPage = 3
      }
    }
  }
}
</script>

<style>
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    html,body{
      width: 100%;
      height: 100%;
    }
    .container{
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .head-title{
      flex-shrink: 0;
      width: 100%;
      height: 50px;
      background: rgb(229, 72, 71);
      color: white;
      font-size: 18px;
      line-height: 50px;
      text-align: center;
    }
 .content-wrap{
      height: 100%;
      flex-grow: 1;
      overflow: hidden;
    }
    ul{
      flex-shrink: 0;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 5px 50px;
      border-top: 1px solid #bbbbbb;
      /* overflow: hidden; */
    }
    li {
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 16px
    }
    li .iconfont{
        font-size: 18px
    }
</style>

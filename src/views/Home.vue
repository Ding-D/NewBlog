<template>
  <div class="home">
    <!-- 一级开始 -->
    <el-container>
      <el-header>
        测试阶段
        <div class="time-box">
          <div class="years"><b v-html="date.years">2020</b><span>-</span></div>
          <div class="months"><b v-html="date.months">12</b><span>-</span></div>
          <div class="days"><b v-html="date.days">29</b></div>
          <span>_</span>
          <div class="hour"><b v-html="date.hour">19</b><span>:</span></div>
          <div class="minute"><b v-html="date.minute">59</b><span>:</span></div>
          <div class="second"><b v-html="date.second">59</b></div>
        </div>
      </el-header>
      <el-container>
        <!--左侧-->
        <el-aside id="aside-left">
          <article-list></article-list>
        </el-aside>

        <el-main ref="elMain">
          <el-steps :active="active" simple>
            <el-step :class="e.class" :title="e.title" :icon="e.icon" :index="e.index" v-for="e in elStep" :key="e.index" @click.native.prevent="handle(e)"></el-step>
          </el-steps>
          <!-- 路由占位符 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
    <!-- 一级结束 -->
    <el-backtop target=".el-main"> </el-backtop>
  </div>
</template>

<script>
import articleList from '../components/article/article-list'
import { mapState, mapMutations } from 'vuex' // 注册 action 、 state 、getter

export default {
  name: 'Home',
  components: {
    articleList
  },
  data() {
    return {
      backBtnIsShow: true,
      date: {},
      active: 1,
      elStep: [
        { class: 'back', title: '返回', icon: 'el-icon-refresh-right', index: 0 },
        { class: 'title', title: '标题', icon: 'el-icon-edit', index: 1 },
        { class: 'mentality', title: '思路', icon: 'el-icon-s-opportunity', index: 2 },
        { class: 'technology', title: '技术点', icon: 'el-icon-star-on', index: 3 },
        { class: 'code', title: '代码', icon: 'el-icon-tickets', index: 4 },
        { class: 'demonstration', title: '演示', icon: 'el-icon-edit', index: 5 },
        { class: 'footer', title: '版权信息', icon: 'el-icon-info', index: 6 }
      ],
      main: ''
    }
  },
  methods: {
    ...mapMutations(['getElStepInfo']),
    handleBack() {
      this.$router.back()
      console.log(this.$router)
    },
    windowScrollTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    scrollToView(cla) {
      var ele = document.getElementById(`${cla}`)
      var main = document.getElementsByTagName('main')[0]
      console.log(ele, main)
      var top = ele.offsetTop + ele.offsetParent.offsetTop
      console.log(top)
      main.scrollTo({
        top: top - 60,
        behavior: 'smooth'
      })
    },
    showtime() {
      const data = new Date()
      let y = data.getFullYear()
      let m = data.getMonth() + 1
      let d = data.getDate()

      let hh = data.getHours()
      let mm = data.getMinutes()
      let ss = data.getSeconds()

      if (ss < 10) {
        ss = '0' + ss
      }

      if (mm < 10) {
        mm = '0' + mm
      }

      if (hh < 10) {
        hh = '0' + hh
      }

      if (d < 10) {
        d = '0' + d
      }

      if (m < 10) {
        m = '0' + m
      }

      if (y < 10) {
        y = '0' + y
      }

      this.date = {
        years: y,
        months: m,
        days: d,
        hour: hh,
        minute: mm,
        second: ss
      }
    },
    handle(e) {
      console.log(e)
      if (e.index === 0) return
      this.active = e.index
      this.getElStepInfo([e.class, e.index])
    }
  },
  computed: {
    ...mapState(['elStepIndex', 'elStepClass'])
  },
  watch: {
    elStepClass(newVal, oldVal) {
      console.log(newVal, oldVal)
      this.scrollToView(newVal)
    },
    elStepClaelStepIndexss(newVal, oldVal) {
      console.log(newVal, oldVal)
    }
  },
  mounted: function() {
    this.$el.pageYOffset = 500
    // this.backBtnIsShow = this.$route.path !== '/articleListHome' ? true : false
    this.showtime()
    setInterval(this.showtime, 1000)
  },
  beforeUpdate: function() {
    // this.backBtnIsShow = this.$route.path !== '/articleListHome' ? true : false
  }
}
</script>
<style lang="less" scoped>
.el-steps {
  margin-bottom: 20px;
}

.el-header,
.el-footer {
  height: 60px;
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-header {
  .time-box {
    float: right;
    div {
      display: inline-block;
    }
  }
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  height: calc(100vh - 60px);
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container .el-aside {
  line-height: 50px;
}
</style>

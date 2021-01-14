<template>
  <div class="css-revelation-light articleList-container">
    <!--头部区域 -->
    <div class="header" id="title">
      <h1>{{ title }}</h1>
      <br />
    </div>
    <!-- 中间主体区域 -->
    <div class="main">
      <div class="mentality" id="mentality" ref="mentality">
        <span class="tooltip">思路<span v-if="mentality === '' && mentality">暂无</span></span>
        <div v-html="mentality"></div>
      </div>
      <div class="technology" id="technology" ref="technology">
        <span class="tooltip">技术点<span v-if="technology === '' && technology">暂无</span></span>
        <div v-html="technology"></div>
      </div>
      <div class="code" id="code" ref="code">
        <span class="tooltip">代码<span v-if="code === '' && code">暂无</span></span>
        <div v-html="code"></div>
      </div>
      <div class="demonstration" id="demonstration" ref="demonstration">
        <span class="tooltip"><span v-if="demonstration === '' && demonstration">暂无</span>演示</span>
        <div v-html="demonstration"></div>
      </div>
    </div>
    <!-- 尾部区域 -->
    <div class="footer" id="footer">
      版权信息
      <p v-html="footer">来自哔哩哔哩up主：CodingStartUp-Steven</p>
    </div>
  </div>
</template>
<script>
import { title, mentality, technology, code, demonstration, footer } from './text/css-revelation-light'
// import { mapActions, mapState, mapGetters } from 'vuex' // 注册 action 、 state 、getter
export default {
  data() {
    return {
      title,
      mentality,
      technology,
      code,
      demonstration,
      footer,
      maodian: {
        mentalityY: null,
        technologyY: null,
        codeY: null
      }
    }
  },
  methods: {
    // ...mapActions([]),
    // ...mapGetters([])
    // scrollToView(cla) {
    //   var ele = document.getElementById(`${cla}`)
    //   var main = document.getElementsByTagName('main')[0]
    //   console.log(ele, main)
    //   var top = ele.offsetTop + ele.offsetParent.offsetTop
    //   console.log(top)
    //   main.scrollTo({
    //     top: top - 60,
    //     behavior: 'smooth'
    //   })
    // }
  },
  // computed: {
  //   ...mapState(['elStepIndex', 'elStepClass'])
  // },
  watch: {
    // elStepClass(newVal, oldVal) {
    //   console.log(newVal, oldVal)
    //   this.scrollToView(newVal)
    // },
    // elStepClaelStepIndexss(newVal, oldVal) {
    //   console.log(newVal, oldVal)
    // }
  },
  // 元素dom创建完成
  mounted() {
    console.log(document.getElementById('#mentality'))
  },
  beforeUpdate() {
    console.log(this.mentality)
  },
  updated() {}
}
</script>
<style lang="less" scoped>
/deep/ #demonstration {
  div {
    text-align: center;
    .before {
      display: inline-block;
      font-family: Arial, Helvetica, sans-serif;
      position: relative;
      color: #333;
      font-size: 80px;
      width: auto;
    }
    .before::after {
      content: attr(data-spotlight);
      color: transparent;
      position: absolute;
      top: 0;
      left: 0;
      -webkit-clip-path: ellipse(80px 80px at 0% 50%);
      clip-path: ellipse(80px 80px at 0% 50%);
      animation: spotlight 5s infinite;
      background-image: url(https://images.unsplash.com/photo-1607670055468-72fb742482e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80);
      background-position: center center;
      background-size: 150%;
      -webkit-background-clip: text;
      background-clip: text;
    }
    @keyframes spotlight {
      0% {
        -webkit-clip-path: ellipse(80px 80px at 0% 50%);
        clip-path: ellipse(80px 80px at 0% 50%);
      }
      50% {
        -webkit-clip-path: ellipse(80px 80px at 1000% 50%);
        clip-path: ellipse(80px 80px at 100% 50%);
      }
      100% {
        -webkit-clip-path: ellipse(80px 80px at 0% 50%);
        clip-path: ellipse(80px 80px at 0% 50%);
      }
    }
  }
}
</style>

<template>
  <div class="article-list">
    <div class="list">
      <!-- 此处添加模板-->
      <!--<router-link to="/跳转路由name">文章标题</router-link>-->

      <router-link to="/cssRevelationLight" class="cssRevelationLight">
        <h1 class="before" data-spotlight="CSS制作聚光灯效果">CSS制作聚光灯效果</h1>
      </router-link>
      <router-link to="/cssFaultTypeBtn" class="cssFaultTypeBtn">
        CSS制作赛博朋克故障风按钮
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'articleList',
  data: function() {
    return {}
  },
  template: `
 
  `,
  methods: {},
  mounted: function() {}
}
</script>
<style lang="less" scoped>
a {
  display: block;
  color: #000;
  text-decoration: none;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  text-align: center;
  width: 100%;
}
.cssRevelationLight {
  h1 {
    display: inline-block;
    font-family: Arial, Helvetica, sans-serif;
    position: relative;
    color: #333;
    width: auto;
  }
  h1::after {
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
</style>

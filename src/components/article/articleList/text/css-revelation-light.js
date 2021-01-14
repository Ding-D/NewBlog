// markdown格式的内容识别
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()
// 标题
const title = '纯CSS制作聚光灯效果'

// 思路内容
const mentality = md.render(`
- 利用伪元素以及clip-path：ellipse绘制的圆形，和动画效果制作
  `)
// 技术点内容
const technology = md.render(`
- 原理
  1. 根据伪元素定位，将两个文本内容重合，一个纯色，一个有颜色
  2. 使用 clip-path 做圆形遮罩 
  3. 使用Css的Animation让他们动起来即可

## 伪元素
  - 使用一个容器放置两个文本也是可以的，这里使用伪元素是为了更方便！
## Clip-path 遮罩 
  - clip-path 做圆形遮罩可以指定位置，用css控制起来更为轻松。
## Animation Css动画
  - 利用@keyframes 在不同时间段改变 clip-path 的位置
  
`)

// 代码内容
const code = md.render(
  '```html' +
    `
    <style>
      h1 {
        font-family: Arial, Helvetica, sans-serif;
        position: relative;
        color: #333;
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
    </style>
    <body>
      <h1 class="before" data-spotlight="CodingStartUp">CodingStartUp</h1>
    </body>
    <script>
    无js代码
    </script>
  ` +
    '```'
)
const demonstration = `
    <h1 class="before" data-spotlight="CodingStartUp">CodingStartUp</h1>
  `
// 版权信息
const footer = `
    来自哔哩哔哩up主：CodingStartUp-Steven
  `
// console.log(technology)

export { title, mentality, technology, code, demonstration, footer }

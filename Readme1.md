# socialai-web

# 环境安装

本项目[Next.js](https://nextjs.org/)是基于 [`create-next-app`]引导建立的。<br>
* 下载nodejs(https://nodejs.org/en)（不推荐安装最新版本，并注意安装的目录，后面环境变量有用到）<br>
* 管理者模式运行终端 ==> 分别输入[`node -v`]和[`npm-v`]检验版本号确认是否安装成功
* 在nodejs文件夹下新建两个文件夹node_glabal和node_cache用来配置环境变量.==>管理者模式运行终端==> 分别输入[`npm config set prefix “node_glabal文件的路径”`]和[`npm config set cache “node_cache文件的路径”`]
* 配置环境变量:
我的电脑 ==> 高级系统设置 ==> 环境变量 ==>系统变量 ==>新建，变量名：NODE_PATH，变量值：node_modulesl文件夹的路径 ==>系统变量找到Path并打开 ==> 添加node_global的路径 ==> 保存退出

* vscode打开该项目 ==> 终端输入[`npm install`] ==> 安装完成后[`npm run dev`]弹出提示(http://localhost:3000) ==> 本地运行

参考：
* (https://blog.csdn.net/qq_61214252/article/details/129914438)<br>
* (https://www.bilibili.com/video/BV19F411t7zX/)<br>

遇到过的报错：
* install error(https://blog.csdn.net/qingbo_2920249511/article/details/120869161)


## 项目可调的主要组件（面向写文章的）

* 设置页边距（如mt表示margin-top，用于设置元素的上外边距）

```bash
<div className="container mx-auto -mt-20 pt-20 md:-mt-16 md:pt-16">
    xxxx
</div>
```

* 页面内容分布的设置：<br>

flex: 创建一个灵活的盒子，使用弹性布局。<br>
flex-col: 设置元素的子元素垂直排列。<br>
md:flex-row: 在中等屏幕及以上的宽度上，设置元素的子元素水平排列。<br>
items-start: 设置元素的子元素在主轴上起始位置对齐。<br>
justify-start: 设置元素的子元素在交叉轴上起始位置对齐。<br>
border-t-[1px]: 添加一个顶部边框，边框样式为1像素的宽度。<br>
border-[rgba(255,255,255,.2)]: 设置边框颜色为半透明的白色。<br>
pt-4: 设置顶部内边距为4个间距单位。<br>
order: order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0<br>
w-full 表示元素将占据其父容器的整个宽度。<br>
md:w-1/2 md前缀表示在中等屏幕宽度。w-1/2表示将占据其父容器的二分之一宽度。<br>
可以参考这篇文章：(https://zhuanlan.zhihu.com/p/393849980) 有图有代码的理解flex弹性布局
```bash
<div className='flex flex-col md:flex-row items-start justify-start border-t-[1px] border-[rgba(255,255,255,.2)] pt-4 pb-0 md:pb-16'>
    <div className='w-full md:w-1/4 order-1 md:order-1 mt-10 md:mt-0'>
        xxxxxxxxx
    </div>
    <div className='w-full md:w-1/2 order-2 md:order-2 mt-10 md:mt-0'>
        xxxxxxxxx
    </div>
</div>
```

* 页面的跳转和路径设置：<br>

className="underline"表示这个引用跳转的字段默认带下划线<br>
aria-label="View careers"表示这个引用跳转的字段是View careers（可自行修改）
```bash
<a href="/research/overview" className="underline" aria-label="View careers">
```
a href="/research/overview"是引用的文章路径，表示跳转到同一目录下的/research文件夹下/overview里面的page。<br>
page的内容开头要设置对应的文件名<br>
在这个项目最好用以下通用设置，其中Overview这个是你对应的路径下的文件名
```bash
export default function Overview() {
  return    <div className='bg-black text-white'>
    <div className="container mx-auto -mt-20 pt-20 md:-mt-16 md:pt-16">
      XXXXXX
    </div>
            </div>
}
```
* 图片的引用：<br>

本项目的图片都放在public的images下，如果是在子目录中，可以将[${basePath}]替换为[../]
```bash
<img alt="" src={`${basePath}/images/stangel-2022-0484.jpg`}
    className='w-full h-full object-cover aspect-square'></img>
```

# 例：新文章需要的操作<br>
以专栏  Latest updates 为例，我们有四个板块[Introducing ChatGPT team]、 [Introducing the GPT Store]、[SocialAI and journalism]和[Superalignment Fast Grants Dec 14, 2023]，将其中的板块跳转到我们对应的文章中。<br>
1.找到app目录下的page.tsx文件，找到代码的{/* Latest updates */}下的Introducing the GPT Store部分<br>

```bash
<li className='w-full md:w-1/4 mt-8 md:mt-0 pr-0 md:pr-4'>
                <a href="/blog/introducing-chatgpt-team" className='group'>
                  <div className='flex flex-col items-start justify-start'>
                    <div className='relative w-full'>
                      <img alt='' src={`${basePath}/images/gpt-store-r3.png`}
                        className='w-full h-full object-cover aspect-square'></img>
                    </div>
                    <div>
                      <h3 className='text-lg mt-2 font-semibold group-hover:underline'>Introducing the GPT Store</h3>
                      <div className='mt-1'>
                        <span aria-hidden="true">Jan 10, 2024</span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
```
2.该段代码设置文章跳转的路径[a href="/blog/introducing-chatgpt-team"],所以我们需要在目录在app目录下创建/blog/introducing-chatgpt-team文件夹，然后创建page.tsx文件，并用以下代码为模板创建文章：
```bash
export default function introducing-chatgpt-team() {
  return    <div className='bg-black text-white'>
    <div className="container mx-auto -mt-20 pt-20 md:-mt-16 md:pt-16">
      XXXXX
    </div>
            </div>
}
```
注意default function XXXXX得对应上，比如这里就是introducing-chatgpt-team，在XXXX中可以加入各种组件和文章内容。
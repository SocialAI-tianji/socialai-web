"use client";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
export default function Practice() {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto -mt-20 pt-20 md:-mt-16 md:pt-16">
        <header className="min-h-40 flex flex-col justify-around">
          <p className="text-6xl">What we do</p>
          <p className="text-3xl">
            <br></br>
            Tianii is Social Al&apos;s most comprehensive systemintegrating
            advanced knowledge of China society.<br></br>
            <br></br>
            来事儿AI构建并开源了常见的大模型应用范例，涉及prompt、Agent、知识库、模型训练。您可以在本网页下找到对应的试用链接。
            <br></br>
            我们致力于搜集并清洗所有有关“如何会来事”的语料，并全部开源，加速人工智能早日掌握这一“核心竞争力”.
            <br></br>
            <br></br>
            <a href="https://github.com/SocialAI-tianji/Tianji" target="_blank" rel="noopener noreferrer">
              如果喜欢，<br></br>
              请给我们一个 Star :) https://github.com/SocialAI-tianji/Tianji
            </a>
          </p>
        </header>
        <div className="mt-8 mb-8">
          <img
            src={`${basePath}/images/banner1.jpg`}
            className="h-full w-full"
            alt=""
          />
        </div>
        <p className="text-3xl">
            点击图片，即可开始体验<br></br>
          </p>
        <div className="border-t pb-20">
          <div className="flex justify-between pt-4 pb-4">
            <p className="text-3xl">Prompt</p>
            {/* <p className="text-lg underline underline-offset-8 underline-thickness-1">
              View all updates
            </p> */}
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div
              onClick={() => window.open("http://120.76.130.14:6006/prompt/")}
              className="cursor-pointer"
            >
              <img
                src={`${basePath}/images/prompt4.jpg`}
                className="w-full"
                alt=""
              />
              <p className="text-base pt-8">餐桌上不会说话/敬酒？如何送祝福？如何化解尴尬和矛盾？让大模型给你灵感</p>
            </div>
          </div>
        </div>

        <div className="border-t pb-20">
          <div className="flex justify-between pt-4 pb-4">
            <p className="text-3xl">AIGame</p>
            <p className="text-lg underline underline-offset-8 underline-thickness-1">
              View all updates
            </p>
          </div>
          <div className="grid grid-cols-4 gap-4">
          <div
              onClick={() => window.open("https://github.com/SocialAI-tianji/Tianji/tree/main/test/prompt/aigame/zhipu")}
              className="cursor-pointer"
            >
              <img
                src={`${basePath}/images/prompt3.jpg`}
                className="w-full"
                alt=""
              />
              <p className="text-base pt-8">实现自己的哄哄模拟器/七大姑八大姨游戏，已开源提示词（即将挂上前端）</p>
            </div>
          </div>
        </div>

        <div className="border-t pb-20">
          <div className="flex justify-between pt-4 pb-4">
            <p className="text-3xl">Agent</p>
            {/* <p className="text-lg underline underline-offset-8 underline-thickness-1">
              View all updates
            </p> */}
          </div>
          <div className="grid grid-cols-4 gap-4">
          <div
              onClick={() => window.open("http://120.76.130.14:6005/")}
              className="cursor-pointer"
            >
              <img
                src={`${basePath}/images/prompt2.jpg`}
                className="w-full"
                alt=""
              />
              <p className="text-base pt-8">利用 Agent 给出更详细丰富的祝福语（更多功能 pending）</p>
            </div>
          </div>
        </div>

        <div className="border-t pb-20">
          <div className="flex justify-between pt-4 pb-4">
            <p className="text-3xl">知识库</p>
            <p className="text-lg underline underline-offset-8 underline-thickness-1">
              View all updates
            </p>
          </div>
          <div className="grid grid-cols-4 gap-4">
          <div
              onClick={() => window.open("https://github.com/SocialAI-tianji/Tianji")}
              className="cursor-pointer"
            >
              <img
                src={`${basePath}/images/prompt1.jpg`}
                className="w-full"
                alt=""
              />
              <p className="text-base pt-8">大模型幻觉？利用知识库解答一切来事儿问题（几天后开源）</p>
            </div>
          </div>
        </div>

        <div className="border-t pb-20">
          <div className="flex justify-between pt-4 pb-4">
            <p className="text-3xl">Finetune</p>
            <p className="text-lg underline underline-offset-8 underline-thickness-1">
              View all updates
            </p>
          </div>
          <div className="grid grid-cols-4 gap-4">
          <div
              onClick={() => window.open("https://openxlab.org.cn/apps/detail/jujimeizuo/tianji-wish")}
              className="cursor-pointer"
            >
              <img
                src={`${basePath}/images/prompt5.png`}
                className="w-full"
                alt=""
              />
              <p className="text-base pt-8">基于大模型训练的人情世故模型，当前只有送祝福功能（每一步都会开源）</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

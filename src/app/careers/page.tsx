const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function careers() {
    return <div className='bg-black text-white'>
      <div className="container mx-auto -mt-20 pt-20 md:-mt-16 md:pt-16">
            <div className='flex flex-col md:flex-row items-start justify-start border-t-[1px] border-[rgba(255,255,255,.2)] pt-4 pb-0 md:pb-16'>
              <div className='w-full md:w-1/2 order-2 md:order-1 mt-10 md:mt-0'>
                <figure className='relative pl-4'>
                  <blockquote className='text-2xl md:text-6xl'>
                    <p>
                    岗位<br></br>
                    <br/>
                    </p>
                  </blockquote>
                  <blockquote className='text-2xl md:text-2xl'>
                    <p>
                    来事儿研究员<br/>    
                    酒文化理论研究员<br/>    
                    跨模态商业互捧数据清洗工程师<br/>    
                    语言艺术研究工程师<br/>    
                    说好话核心技术专家<br/><br/>  
                    我们期待优秀的你加入，<br/>
                    享受远程办公和远程敬酒的快乐<br/>   
                    </p>
                  </blockquote>
                  
                  {/* <figcaption className='mt-6'>
                    <span className='font-semibold block'>Lilian Weng</span>
                    <span className='block'>Applied AI at SocialAI</span>
                  </figcaption> */}
                </figure>
              </div>
              <div className='w-full md:w-1/2 order-1 md:order-2'>
                <img alt="" src={`${basePath}/images/careers.jpg`}
                  className='w-full h-full object-cover '></img>
              </div>
            </div>
      </div>
      <div className='bg-white text-black'>
      <div className="container mx-auto -mt-20 pt-20 md:-mt-16 md:pt-16">
        <div className='flex flex-col md:flex-row items-start justify-start border-t-[1px] border-[rgba(255,255,255,.2)] pt-4 pb-0 md:pb-16'>
          <div className='w-full md:w-1/4 mt-10 md:mt-0'>
            <figure className='relative pl-4'>
              <blockquote >
                <h6>January 23, 2024</h6>   
              </blockquote>
            </figure>
          </div>
          <div className='w-full md:w-1/2 '>
            <blockquote >
              <p className='text-2xl md:text-2xl'>SocialAI诚招</p>   
            </blockquote>  
            <p className='mt-8' >
            来事儿研究员职位描述：<br/><br/>

            研究和实践各种社交场景下的“来事儿”策略，分析其在人际沟通、团队协作与组织协调中的作用。<br/>

            1. 负责对不同地域、行业以及文化背景下的“来事儿”艺术进行深入挖掘，梳理并总结一套有效的来事儿理论体系。<br/>
            2. 分析各类情境中成功的来事儿案例，研究如何通过巧妙的互动方式提升个人及组织的社会影响力和合作效率。<br/>
            3. 结合心理学、社会学等相关学科知识，探索并创新适合现代职场环境的来事儿技巧和方法论。<br/>
            4. 撰写研究报告、培训教材和行业文章，为提升企业和社会各界人士的来事儿能力提供理论支持和实践指导。
            </p>
            <p className='mt-8' >
            酒文化理论研究员职位描述：<br/><br/>

            对国内外各时期的酒文化进行深度研究，整理酒文化的演变历程及其背后的哲学思想和社会影响。<br/>

            1. 收集和解读关于酿酒工艺、饮酒习俗、酒宴礼仪等酒文化相关的文献资料，提炼出具有普遍价值的研究成果。<br/>
            2. 探索酒文化在当代商业活动、社交场合以及国际交流中的应用模式和发展趋势，提出新的理论见解和策略建议。<br/>
            3. 组织开展酒文化学术研讨会、论坛等活动，推动酒文化研究领域的国际交流与合作。<br/>
            4. 撰写高质量的研究报告、论文及普及性读物，提高公众对于酒文化的认知度和认同感。
            </p>          
            <p className='mt-8' >
            跨模态商业互捧数据清洗工程师职位描述：<br/><br/>

              负责收集和处理来自多元媒介（文本、图像、视频）的商业互捧数据，确保数据的质量和完整性。<br/>

              1. 设计并实施数据清洗流程，去除无关信息，提取有效互捧行为特征，构建高质量的商业互捧数据库。<br/>
              2. 利用NLP、计算机视觉等技术，对跨模态的商业互捧数据进行深度分析和结构化处理，以便进一步研究和应用。<br/>
              3. 配合研究人员优化数据清洗工具和算法，提高数据清洗的准确性和效率，支撑商业互捧行为分析研究项目。<br/>
              4. 定期维护和更新数据清洗标准和规范，确保数据符合研究和应用需求。
            </p>  
            <p className='mt-8' >
            语言艺术研究工程师职位描述：<br/><br/>

              研究并掌握各种说好话、夸赞他人、恰当表达赞誉的语言艺术形式和技术。<br/>

              1. 开发适用于机器学习和人工智能系统的语言艺术模型，模拟并实现人类在社交场合中自然、得体且富有感染力的话语表达。<br/>
              2. 结合心理学、社会学、语言学等多学科理论，探究语言艺术在人际交往、公关传播、市场营销等方面的应用规律。<br/>
              3. 构建和完善语言艺术的大规模语料库，并进行深度分析，产出有影响力的科研成果和产品原型。<br/>
              4. 协助团队成员理解并运用语言艺术研究成果，推进相关项目的顺利实施。
            </p> 
            <p className='mt-8' >
            说好话核心技术专家职位描述：<br/><br/>

            深入挖掘说好话这一社交技能的核心技术和原理，建立科学严谨的理论框架。<br/>

            1. 设计并开发先进的自然语言生成算法，使AI能够根据不同情境灵活运用各种赞美、鼓励和正面反馈的话语策略。<br/>
            2. 研究并优化针对不同类型人群、场合和目的的有效说好话策略，并将其应用于聊天机器人、智能客服系统等领域。<br/>
            3. 创新并完善评价说好话效果的标准和评估体系，不断优化产品的用户体验和情感共鸣程度。<br/>
            4. 指导并培养团队成员掌握说好话核心技术，引领行业在该领域的技术创新和突破。
            </p>     
            {/* <p className='mt-4'>
              <img alt="" src={`../images/stangel-2022-0484.jpg`}
                className='w-full h-full object-cover aspect-square'></img>
              <br/>
            </p> */}

          </div>
        </div>
      </div>
      </div>
      <div className="container mx-auto -mt-20 pt-20 md:-mt-16 md:pt-16">
        <div className='flex flex-col md:flex-row items-start justify-start border-t-[1px] border-[rgba(255,255,255,.2)] pt-4 pb-0 md:pb-16'>
        Related research
        </div>
      </div>
    </div>
    
    
  }
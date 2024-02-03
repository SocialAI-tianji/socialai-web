import Image from 'next/image'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function Home() {
  return (
    <div className='bg-black'>
      <div className="">
        <div
          className="relative -mt-20 h-screen w-full md:-mt-16"
        >
          <div className="relative h-full w-full">
            <video
              aria-hidden="true"
              className="relative z-20 h-full w-full object-cover transition-opacity duration-300 pointer visible opacity-100"
              autoPlay
              muted
              loop
            >
              <source
                src={`${basePath}/video/KleeWP.mp4`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div
            className="absolute top-0 right-0 bottom-0 left-0 z-20 bg-[rgba(0,0,0,0.56)]"
          >
            <div className="container absolute bottom-3 md:bottom-5 left-0 right-0 text-white">
              <div className="">
                <div className="relative z-40 md:mx-40">
                  <h1 className="text-6xl">
                    Creating safe AGI that benefits all of humanity
                  </h1>
                  <h2 className="sr-only" id="heroLinks">Quicklinks</h2>
                  <ul
                    aria-labelledby="heroLinks"
                    className="flex flex-row flex-wrap items-center mt-10"
                  >
                    <li className="shrink-0 relative mb-2">
                      <a
                        href="/about"
                        className="inline-block py-1 px-2 border border-white rounded-md"
                        aria-label="Learn about SocialAI"
                        ><span className="flex items-center"><span className="">Learn about SocialAI</span></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container mx-auto text-white'>
        <div>
          <ul className='flex flex-col md:flex-row flex-wrap items-start justify-start mt-0 md:mt-16 py-16'>
            <li className='w-full md:w-1/3 mt-8 md:mt-0'>
              <h3 className='text-2xl font-semibold w-full md:w-3/4'>Pioneering research on the path to AGI</h3>
              <div className="mt-3">
                <a href="/research/overview" className="underline" aria-label="Learn about our research">
                  <span>Learn about our research</span>
                </a>
              </div>
            </li>
            <li className='w-full md:w-1/3 mt-8 md:mt-0'>
              <h3 className='text-2xl font-semibold w-full md:w-3/4'>Transforming work and creativity with AI</h3>
              <div className="mt-3">
                <a href="/research/overview" className="underline" aria-label="Explore our products">
                  <span>Explore our products</span>
                </a>
              </div>
            </li>
            <li className='w-full md:w-1/3 mt-8 md:mt-0'>
              <h3 className='text-2xl font-semibold w-full md:w-3/4'>Join us in shaping the future of technology</h3>
              <div className="mt-3">
                <a href="/research/overview" className="underline" aria-label="View careers">
                  <span>View careers</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
        {/* Latest updates */}
        {/* <div className='pb-16'>
          <div className='flex flex-col md:flex-row item-start justify-between border-t border-white pt-4'>
            <div>
              <h2 className='text-2xl md:text-4xl'>Latest updates</h2>
            </div>
            <div className='grow'></div>
            <div>
              <a href="/blog" className="underline" aria-label="View all updates">View all updates</a>
            </div>
          </div>
          <div>
            <ul className='flex flex-col md:flex-row flex-wrap items-start justify-start mt-0 md:mt-16'>
              <li className='w-full md:w-1/4 mt-8 md:mt-0 pr-0 md:pr-4'>
                <a href="/blog/Super_alignment_of_human_emotions_and_minds" className='group'>
                  <div className='flex flex-col items-start justify-start'>
                    <div className='relative w-full'>
                      <img alt='' src={`${basePath}/images/team-hero-for-blog.jpg`}
                        className='w-full h-full object-cover aspect-square'></img>
                    </div>
                    <div>
                      <h3 className='text-lg mt-2 font-semibold group-hover:underline'>有关人情心智的超级对齐</h3>
                      <div className='mt-1'>
                        <span aria-hidden="true">Jan 23, 2024</span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li className='w-full md:w-1/4 mt-8 md:mt-0 pr-0 md:pr-4'>
                <a href="/blog/Aligning_Advanced_AI_Systems_with_Human_Values_Perspectives_and_Priorities" className='group'>
                  <div className='flex flex-col items-start justify-start'>
                    <div className='relative w-full'>
                      <img alt='' src={`${basePath}/images/gpt-store-r3.png`}
                        className='w-full h-full object-cover aspect-square'></img>
                    </div>
                    <div>
                      <h3 className='text-lg mt-2 font-semibold group-hover:underline'>使先进AI系统与人类价值观保持一致 - 观点与优先事项</h3>
                      <div className='mt-1'>
                        <span aria-hidden="true">Jan 10, 2024</span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li className='w-full md:w-1/4 mt-8 md:mt-0 pr-0 md:pr-4'>
                <a href="/blog/introducing-chatgpt-team" className='group'>
                  <div className='flex flex-col items-start justify-start'>
                    <div className='relative w-full'>
                      <img alt='' src={`${basePath}/images/SocialAI-and-journalism.jpg`}
                        className='w-full h-full object-cover aspect-square'></img>
                    </div>
                    <div>
                      <h3 className='text-lg mt-2 font-semibold group-hover:underline'>SocialAI and journalism</h3>
                      <div className='mt-1'>
                        <span aria-hidden="true">Jan 8, 2024</span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li className='w-full md:w-1/4 mt-8 md:mt-0 pr-0 md:pr-4'>
                <a href="/blog/introducing-chatgpt-team" className='group'>
                  <div className='flex flex-col items-start justify-start'>
                    <div className='relative w-full'>
                      <img alt='' src={`${basePath}/images/superalignment-fast-grants.jpg`}
                        className='w-full h-full object-cover aspect-square'></img>
                    </div>
                    <div>
                      <h3 className='text-lg mt-2 font-semibold group-hover:underline'>Superalignment Fast Grants</h3>
                      <div className='mt-1'>
                        <span aria-hidden="true">Dec 14, 2023</span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div> */}
        {/* Safety & responsibility */}
        {/* <div className='pb-16'>
          <div className='flex flex-col md:flex-row item-start justify-between border-t border-white pt-4 pb-16'>
            <div className='w-full md:w-1/2'>
              <h2 className='text-2xl md:text-4xl'>Safety & responsibility</h2>
            </div>
            <div className='w-full md:w-1/2'>
              <div className='text-xl md:text-2xl'>
                <p>Our work to create safe and beneficial AI requires a deep understanding of the potential risks and benefits, as well as careful consideration of the impact.</p>
              </div>
              <div className='mt-6'>
                <a href="/satety" className="underline" aria-label="Learn about safety">Learn about safety</a>
              </div>
            </div>
          </div>
          <div>
            <img alt="" src={`${basePath}/images/stangel-2022-0052.jpg`}
              className='w-full h-full object-cover aspect-square'></img>
          </div>
        </div> */}
        {/* Research */}
        <div className='pb-16'>
          <div className='flex flex-col md:flex-row item-start justify-between border-t border-white pt-4'>
            <div className='w-full md:w-1/2'>
              <h2 className='text-2xl md:text-4xl'>Research</h2>
            </div>
            <div className='w-full md:w-1/2'>
              <div className='text-xl md:text-2xl'>
                <p>We research generative models and how to align them with human values.</p>
              </div>
              <div className='mt-6'>
                <a href="/research/overview" className="underline" aria-label="Learn about our research">Learn about our research</a>
              </div>
            </div>
          </div>
          <div>
            <ul className='flex flex-col md:flex-row flex-wrap items-start justify-start mt-0 md:mt-16'>
            <li className='w-full md:w-1/3 mt-8 md:mt-0 pr-0 md:pr-24'>
                <a href="${basePath}/blog/post6" className='group'>
                  <div className='flex flex-col items-start justify-start'>
                    <div className='relative w-full'>
                      <img alt='' src={`${basePath}/images/weak-to-strong-generalization.jpg`}
                        className='w-full h-full object-cover aspect-square'></img>
                    </div>
                    <div>
                      <h3 className='text-lg mt-2 font-semibold group-hover:underline'>奉承的艺术</h3>
                      <div className='mt-1'>
                        <span aria-hidden="true">XXX, 2024</span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li className='w-full md:w-1/3 mt-8 md:mt-0 pr-0 md:pr-24'>
                <a href="${basePath}/blog/post5" className='group'>
                  <div className='flex flex-col items-start justify-start'>
                    <div className='relative w-full'>
                      <img alt='' src={`${basePath}/images/post5.png`}
                        className='w-full h-full object-cover aspect-square'></img>
                    </div>
                    <div>
                      <h3 className='text-lg mt-2 font-semibold group-hover:underline'>全新的大模型对齐规范：人情世故</h3>
                      <div className='mt-1'>
                        <span aria-hidden="true">January 24, 2024</span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li className='w-full md:w-1/3 mt-8 md:mt-0 pr-0 md:pr-24'>
                <a href="${basePath}/blog/post4" className='group'>
                  <div className='flex flex-col items-start justify-start'>
                    <div className='relative w-full'>
                      <img alt='' src={`${basePath}/images/post4.png`}
                        className='w-full h-full object-cover aspect-square'></img>
                    </div>
                    <div>
                      <h3 className='text-lg mt-2 font-semibold group-hover:underline'>自我效能感对向上社交有效性的影响</h3>
                      <div className='mt-1'>
                        <span aria-hidden="true">January 23, 2024</span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li className='w-full md:w-1/3 mt-8 md:mt-20 pr-0 md:pr-24'>
                <a href="${basePath}/blog/post3" className='group'>
                  <div className='flex flex-col items-start justify-start'>
                    <div className='relative w-full'>
                      <img alt='' src={`${basePath}/images/post3.png`}
                        className='w-full h-full object-cover aspect-square'></img>
                    </div>
                    <div>
                      <h3 className='text-lg mt-2 font-semibold group-hover:underline'>人工智能价值观对齐:关于人类价值观的社会学视角</h3>
                      <div className='mt-1'>
                        <span aria-hidden="true">January 22, 2024</span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li className='w-full md:w-1/3 mt-8 md:mt-20 pr-0 md:pr-24'>
                <a href="/blog/post2" className='group'>
                  <div className='flex flex-col items-start justify-start'>
                    <div className='relative w-full'>
                      <img alt='' src={`${basePath}/images/post2.png`}
                        className='w-full h-full object-cover aspect-square'></img>
                    </div>
                    <div>
                      <h3 className='text-lg mt-2 font-semibold group-hover:underline'>使先进AI系统与人类价值观保持一致 - 观点与优先事项</h3>
                      <div className='mt-1'>
                        <span aria-hidden="true">January 21, 2024</span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li className='w-full md:w-1/3 mt-8 md:mt-20 pr-0 md:pr-24'>
                <a href="/blog/post1" className='group'>
                  <div className='flex flex-col items-start justify-start'>
                    <div className='relative w-full'>
                      <img alt='' src={`${basePath}/images/post1.png`}
                        className='w-full h-full object-cover aspect-square'></img>
                    </div>
                    <div>
                      <h3 className='text-lg mt-2 font-semibold group-hover:underline'>有关人情心智的超级对齐</h3>
                      <div className='mt-1'>
                        <span aria-hidden="true">January 20, 2024</span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Products */}
        {/* <div className='pb-16'>
          <div className='flex flex-col md:flex-row item-start justify-between border-t border-white pt-4'>
            <div className='w-full md:w-1/2'>
              <h2 className='text-2xl md:text-4xl'>Products</h2>
            </div>
            <div className='w-full md:w-1/2'>
              <div className='text-xl md:text-2xl'>
                <p>Our API platform offers our latest models and guides for safety best practices.</p>
              </div>
              <div className='mt-6'>
                <a href="/product" className="underline" aria-label="Explore our products">Explore our products</a>
              </div>
            </div>
          </div>
          <div>
            <ul className='flex flex-col md:flex-row flex-wrap items-start justify-start mt-0 md:mt-16'>
              <li className='w-full md:w-1/4 mt-8 md:mt-0 pr-0 md:pr-4'>
                <a href="/blog/introducing-chatgpt-team" className='group'>
                  <div className='flex flex-col items-start justify-start'>
                    <div className='relative w-full'>
                      <img alt='' src={`${basePath}/images/team-hero-for-blog.jpg`}
                        className='w-full h-full object-cover aspect-square'></img>
                    </div>
                    <div>
                      <h3 className='text-lg mt-2 font-semibold group-hover:underline'>Introducing ChatGPT team</h3>
                      <div className='mt-1'>
                        <span aria-hidden="true">Jan 10, 2024</span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
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
              <li className='w-full md:w-1/4 mt-8 md:mt-0 pr-0 md:pr-4'>
                <a href="/research/dall-e-3-system-card" className='group'>
                  <div className='flex flex-col items-start justify-start'>
                    <div className='relative w-full'>
                      <img alt='' src={`${basePath}/images/introducing-gpts.png`}
                        className='w-full h-full object-cover aspect-square'></img>
                    </div>
                    <div>
                      <h3 className='text-lg mt-2 font-semibold group-hover:underline'>Introducing GPTs</h3>
                      <div className='mt-1'>
                        <span aria-hidden="true">Nov 6, 2023</span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li className='w-full md:w-1/4 mt-8 md:mt-0 pr-0 md:pr-4'>
                <a href="/research/gpt-4v-system-card" className='group'>
                  <div className='flex flex-col items-start justify-start'>
                    <div className='relative w-full'>
                      <img alt='' src={`${basePath}/images/new-models-and-developer-products-announced-at-devday.jpg`}
                        className='w-full h-full object-cover aspect-square'></img>
                    </div>
                    <div>
                      <h3 className='text-lg mt-2 font-semibold group-hover:underline'>New models and developer products announced at DevDay</h3>
                      <div className='mt-1'>
                        <span aria-hidden="true">Nov 6, 2023</span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div> */}
        {/* Careers at SocialAI */}
        <div className='pb-16'>
          <div className='flex flex-col md:flex-row item-start justify-between border-t border-white pt-4 pb-16'>
            <div className='w-full md:w-1/2'>
              <h2 className='text-2xl md:text-4xl'>Careers at SocialAI</h2>
            </div>
            <div className='w-full md:w-1/2'>
              <div className='text-xl md:text-2xl'>
                <p>Developing safe and beneficial AI requires people from a wide range of disciplines and backgrounds.</p>
              </div>
              <div className='mt-6'>
                <a href="/careers" className="underline" aria-label="View careers">View careers</a>
              </div>
            </div>
          </div>
          <div className='pb-16'>
            <img alt="" src={`${basePath}/images/stangel-2022-1598.jpg`}
              className='w-full h-full object-cover aspect-square'></img>
          </div>
          {/* <div className='flex flex-col md:flex-row items-start justify-start border-t-[1px] border-[rgba(255,255,255,.2)] pt-4 pb-0 md:pb-16'>
            <div className='w-full md:w-1/2 order-2 md:order-1 mt-10 md:mt-0'>
              <figure className='relative pl-4'>
                <blockquote className='text-2xl md:text-5xl'>
                  <p className="after:content-['”'] before:content-['“'] before:absolute before:left-0">
                    I encourage my team to keep learning. Ideas in different topics or fields can often inspire new ideas and broaden the potential solution space.
                  </p>
                </blockquote>
                <figcaption className='mt-6'>
                  <span className='font-semibold block'>Lilian Weng</span>
                  <span className='block'>Applied AI at SocialAI</span>
                </figcaption>
              </figure>
            </div>
            <div className='w-full md:w-1/2 order-1 md:order-2'>
              <img alt="" src={`${basePath}/images/stangel-2022-0484.jpg`}
                className='w-full h-full object-cover aspect-square'></img>
            </div>
          </div> */}
          <div className='border-t border-white mt-16 pt-4 pb-16'>
            <h2 className="text-2xl md:text-5xl">Join us in shaping the future of technology.</h2>
            <div className='pt-16'>
              <a href="/careers" className="flex items-center justify-center border border-white rounded py-6 hover:bg-white hover:text-black" aria-label="View careers">
                <span className="text-2xl">View careers</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

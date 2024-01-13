import Image from 'next/image'

export default function Home() {
  return (
    <div className='bg-black'>
      <div className="">
        <div
          className="relative -mt-20 h-screen max-h-[1000px] w-full md:-mt-16 min-h-[500px] lg:min-h-[600px]"
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
                src="/video/KleeWP.mp4"
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
                        aria-label="Learn about OpenAI"
                        ><span className="flex items-center"><span className="">Learn about OpenAI</span></span>
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
          <ul className='flex flex-row flex-wrap items-start justify-start mt-16 py-16'>
            <li className='w-1/3'>
              <h3 className='text-2xl font-semibold w-3/4'>Pioneering research on the path to AGI</h3>
              <div className="mt-3">
                <a href="/research/overview" className="underline" aria-label="Learn about our research">
                  <span>Learn about our research</span>
                </a>
              </div>
            </li>
            <li className='w-1/3'>
              <h3 className='text-2xl font-semibold w-3/4'>Transforming work and creativity with AI</h3>
              <div className="mt-3">
                <a href="/research/overview" className="underline" aria-label="Explore our products">
                  <span>Explore our products</span>
                </a>
              </div>
            </li>
            <li className='w-1/3'>
              <h3 className='text-2xl font-semibold w-3/4'>Join us in shaping the future of technology</h3>
              <div className="mt-3">
                <a href="/research/overview" className="underline" aria-label="View careers">
                  <span>View careers</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
        {/* Latest updates */}
        <div className='pb-16'>
          <div className='flex flex-row item-start justify-between border-t border-white pt-4'>
            <div>
              <h2 className='text-4xl'>Latest updates</h2>
            </div>
            <div className='grow'></div>
            <div>
              <a href="/blog" className="underline" aria-label="View all updates">View all updates</a>
            </div>
          </div>
          <div>
            <ul className='flex flex-row flex-wrap items-start justify-start mt-16'>
              <li className='w-1/4 pr-4'>
                <a href="/blog/introducing-chatgpt-team" className='group'>
                  <div className='flex flex-col items-start justify-start'>
                    <div className='relative w-full'>
                      <img alt='' src={"/images/team-hero-for-blog.jpg"}
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
              <li className='w-1/4 pr-4'>
                <a href="/blog/introducing-chatgpt-team" className='group'>
                  <div className='flex flex-col items-start justify-start'>
                    <div className='relative w-full'>
                      <img alt='' src={"/images/gpt-store-r3.png"}
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
              <li className='w-1/4 pr-4'>
                <a href="/blog/introducing-chatgpt-team" className='group'>
                  <div className='flex flex-col items-start justify-start'>
                    <div className='relative w-full'>
                      <img alt='' src={"/images/openai-and-journalism.jpg"}
                        className='w-full h-full object-cover aspect-square'></img>
                    </div>
                    <div>
                      <h3 className='text-lg mt-2 font-semibold group-hover:underline'>OpenAI and journalism</h3>
                      <div className='mt-1'>
                        <span aria-hidden="true">Jan 8, 2024</span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li className='w-1/4 pr-4'>
                <a href="/blog/introducing-chatgpt-team" className='group'>
                  <div className='flex flex-col items-start justify-start'>
                    <div className='relative w-full'>
                      <img alt='' src={"/images/superalignment-fast-grants.jpg"}
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
        </div>
        {/* Safety & responsibility */}
        <div className='pb-16'>
          <div className='flex flex-row item-start justify-between border-t border-white pt-4 pb-16'>
            <div className='w-1/2'>
              <h2 className='text-4xl'>Safety & responsibility</h2>
            </div>
            <div className='w-1/2'>
              <div className='text-2xl'>
                <p>Our work to create safe and beneficial AI requires a deep understanding of the potential risks and benefits, as well as careful consideration of the impact.</p>
              </div>
              <div className='mt-6'>
                <a href="/satety" className="underline" aria-label="Learn about safety">Learn about safety</a>
              </div>
            </div>
          </div>
          <div>
            <img alt="" src={"/images/stangel-2022-0052.jpg"}
              className='w-full h-full object-cover aspect-square'></img>
          </div>
        </div>
        {/* Research */}
        <div className='pb-16'>
          <div className='flex flex-row item-start justify-between border-t border-white pt-4'>
            <div className='w-1/2'>
              <h2 className='text-4xl'>Research</h2>
            </div>
            <div className='w-1/2'>
              <div className='text-2xl'>
                <p>We research generative models and how to align them with human values.</p>
              </div>
              <div className='mt-6'>
                <a href="/research/overview" className="underline" aria-label="Learn about our research">Learn about our research</a>
              </div>
            </div>
          </div>
          <div>
            <ul className='flex flex-row flex-wrap items-start justify-start mt-16'>
              <li className='w-1/4 pr-4'>
                <a href="/research/weak-to-strong-generalization" className='group'>
                  <div className='flex flex-col items-start justify-start'>
                    <div className='relative w-full'>
                      <img alt='' src={"/images/weak-to-strong-generalization.jpg"}
                        className='w-full h-full object-cover aspect-square'></img>
                    </div>
                    <div>
                      <h3 className='text-lg mt-2 font-semibold group-hover:underline'>Weak-to-strong generalization</h3>
                      <div className='mt-1'>
                        <span aria-hidden="true">Dec 14, 2023</span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li className='w-1/4 pr-4'>
                <a href="/research/practices-for-governing-agentic-ai-systems" className='group'>
                  <div className='flex flex-col items-start justify-start'>
                    <div className='relative w-full'>
                      <img alt='' src={"/images/practices-for-governing-agentic-ai-systems.jpg"}
                        className='w-full h-full object-cover aspect-square'></img>
                    </div>
                    <div>
                      <h3 className='text-lg mt-2 font-semibold group-hover:underline'>Practices for Governing Agentic AI Systems</h3>
                      <div className='mt-1'>
                        <span aria-hidden="true">Dec 14, 2023</span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li className='w-1/4 pr-4'>
                <a href="/research/dall-e-3-system-card" className='group'>
                  <div className='flex flex-col items-start justify-start'>
                    <div className='relative w-full'>
                      <img alt='' src={"/images/dall-e-3-system-card.png"}
                        className='w-full h-full object-cover aspect-square'></img>
                    </div>
                    <div>
                      <h3 className='text-lg mt-2 font-semibold group-hover:underline'>DALL·E 3 system card</h3>
                      <div className='mt-1'>
                        <span aria-hidden="true">Oct 3, 2023</span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li className='w-1/4 pr-4'>
                <a href="/research/gpt-4v-system-card" className='group'>
                  <div className='flex flex-col items-start justify-start'>
                    <div className='relative w-full'>
                      <img alt='' src={"/images/gpt-4vision-system-card.png"}
                        className='w-full h-full object-cover aspect-square'></img>
                    </div>
                    <div>
                      <h3 className='text-lg mt-2 font-semibold group-hover:underline'>GPT-4V(ision) system card</h3>
                      <div className='mt-1'>
                        <span aria-hidden="true">Sep 25, 2023</span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Products */}
        <div className='pb-16'>
          <div className='flex flex-row item-start justify-between border-t border-white pt-4'>
            <div className='w-1/2'>
              <h2 className='text-4xl'>Products</h2>
            </div>
            <div className='w-1/2'>
              <div className='text-2xl'>
                <p>Our API platform offers our latest models and guides for safety best practices.</p>
              </div>
              <div className='mt-6'>
                <a href="/product" className="underline" aria-label="Explore our products">Explore our products</a>
              </div>
            </div>
          </div>
          <div>
            <ul className='flex flex-row flex-wrap items-start justify-start mt-16'>
              <li className='w-1/4 pr-4'>
                <a href="/blog/introducing-chatgpt-team" className='group'>
                  <div className='flex flex-col items-start justify-start'>
                    <div className='relative w-full'>
                      <img alt='' src={"/images/team-hero-for-blog.jpg"}
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
              <li className='w-1/4 pr-4'>
                <a href="/blog/introducing-chatgpt-team" className='group'>
                  <div className='flex flex-col items-start justify-start'>
                    <div className='relative w-full'>
                      <img alt='' src={"/images/gpt-store-r3.png"}
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
              <li className='w-1/4 pr-4'>
                <a href="/research/dall-e-3-system-card" className='group'>
                  <div className='flex flex-col items-start justify-start'>
                    <div className='relative w-full'>
                      <img alt='' src={"/images/introducing-gpts.png"}
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
              <li className='w-1/4 pr-4'>
                <a href="/research/gpt-4v-system-card" className='group'>
                  <div className='flex flex-col items-start justify-start'>
                    <div className='relative w-full'>
                      <img alt='' src={"/images/new-models-and-developer-products-announced-at-devday.jpg"}
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
        </div>
        {/* Careers at OpenAI */}
        <div className='pb-16'>
          <div className='flex flex-row item-start justify-between border-t border-white pt-4 pb-16'>
            <div className='w-1/2'>
              <h2 className='text-4xl'>Careers at OpenAI</h2>
            </div>
            <div className='w-1/2'>
              <div className='text-2xl'>
                <p>Developing safe and beneficial AI requires people from a wide range of disciplines and backgrounds.</p>
              </div>
              <div className='mt-6'>
                <a href="/careers" className="underline" aria-label="View careers">View careers</a>
              </div>
            </div>
          </div>
          <div className='pb-16'>
            <img alt="" src={"/images/stangel-2022-1598.jpg"}
              className='w-full h-full object-cover aspect-square'></img>
          </div>
          <div className='flex flex-row items-start justify-start border-t-[1px] border-[rgba(255,255,255,.2)] pt-4 pb-16'>
            <div className='w-1/2'>
              <figure className='relative pl-4'>
                <blockquote className='text-5xl'>
                  <p className="after:content-['”'] before:content-['“'] before:absolute before:left-0">
                    I encourage my team to keep learning. Ideas in different topics or fields can often inspire new ideas and broaden the potential solution space.
                  </p>
                </blockquote>
                <figcaption className='mt-6'>
                  <span className='font-semibold block'>Lilian Weng</span>
                  <span className='block'>Applied AI at OpenAI</span>
                </figcaption>
              </figure>
            </div>
            <div className='w-1/2'>
              <img alt="" src={"/images/stangel-2022-0484.jpg"}
                className='w-full h-full object-cover aspect-square'></img>
            </div>
          </div>
          <div className='border-t border-white mt-16 pt-4 pb-16'>
            <h2 className="text-5xl">Join us in shaping the future of technology.</h2>
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

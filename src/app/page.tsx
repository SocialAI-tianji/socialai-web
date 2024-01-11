import Image from 'next/image'

export default function Home() {
  return (
    <>
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

    </>
  )
}

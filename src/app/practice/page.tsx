"use client";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
export default function Practice() {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto -mt-20 pt-20 md:-mt-16 md:pt-16">
        <header className="min-h-40 flex flex-col justify-around">
          <p className="text-2xl">What we do</p>
          <p className="text-3xl">
            Tianii is Social Al&apos;s most comprehensive systemintegrating
            advanced knowledge of China society.
          </p>
        </header>
        <div className="mt-8 mb-8">
          <img src={`${basePath}/images/banner1.jpg`} className="h-full w-full" alt="" />
        </div>
        <div className="border-t pb-20">
          <div className="flex justify-between pt-4 pb-4">
            <p className="text-3xl">Prompt</p>
            <p className="text-lg underline underline-offset-8 underline-thickness-1">
              View all updates
            </p>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div>
              <img src={`${basePath}/images/prompt1.jpg`} className="w-full" alt="" />
              <p className="text-base pt-2">此礼非礼，直击人心</p>
            </div>
            <div>
              <img src={`${basePath}/images/prompt2.jpg`} className="w-full" alt="" />
              <p className="text-base pt-2">此礼非礼，直击人心</p>
            </div>
            <div>
              <img src={`${basePath}/images/prompt3.jpg`} className="w-full" alt="" />
              <p className="text-base pt-2">此礼非礼，直击人心</p>
            </div>
            <div>
              <img src={`${basePath}/images/prompt4.jpg`} className="w-full" alt="" />
              <p className="text-base pt-2">此礼非礼，直击人心</p>
            </div>
          </div>
        </div>

        <div className="border-t pb-20">
          <div className="flex justify-between pt-4 pb-4">
            <p className="text-3xl">Agent</p>
            <p className="text-lg underline underline-offset-8 underline-thickness-1">
              View all updates
            </p>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div>
              <img src={`${basePath}/images/prompt1.jpg`} className="w-full" alt="" />
              <p className="text-base pt-2">此礼非礼，直击人心</p>
            </div>
            <div>
              <img src={`${basePath}/prompt2.jpg`} className="w-full" alt="" />
              <p className="text-base pt-2">此礼非礼，直击人心</p>
            </div>
            <div>
              <img src={`${basePath}/prompt3.jpg`} className="w-full" alt="" />
              <p className="text-base pt-2">此礼非礼，直击人心</p>
            </div>
            <div>
              <img src={`${basePath}/prompt4.jpg`} className="w-full" alt="" />
              <p className="text-base pt-2">此礼非礼，直击人心</p>
            </div>
          </div>
        </div>

        <div className="border-t pb-20">
          <div className="flex justify-between pt-4 pb-4">
            <p className="text-3xl">zhishiku</p>
            <p className="text-lg underline underline-offset-8 underline-thickness-1">
              View all updates
            </p>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div>
              <img src={`${basePath}/images/prompt1.jpg`} className="w-full" alt="" />
              <p className="text-base pt-2">此礼非礼，直击人心</p>
            </div>
            <div>
              <img src={`${basePath}/prompt2.jpg`} className="w-full" alt="" />
              <p className="text-base pt-2">此礼非礼，直击人心</p>
            </div>
            <div>
              <img src={`${basePath}/prompt3.jpg`} className="w-full" alt="" />
              <p className="text-base pt-2">此礼非礼，直击人心</p>
            </div>
            <div>
              <img src={`${basePath}/prompt4.jpg`} className="w-full" alt="" />
              <p className="text-base pt-2">此礼非礼，直击人心</p>
            </div>
          </div>
        </div>

        <div className="border-t pb-20">
          <div className="flex justify-between pt-4 pb-4">
            <p className="text-3xl">AIgame</p>
            <p className="text-lg underline underline-offset-8 underline-thickness-1">
              View all updates
            </p>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div>
              <img src={`${basePath}/images/prompt1.jpg`} className="w-full" alt="" />
              <p className="text-base pt-2">此礼非礼，直击人心</p>
            </div>
            <div>
              <img src={`${basePath}/prompt2.jpg`} className="w-full" alt="" />
              <p className="text-base pt-2">此礼非礼，直击人心</p>
            </div>
            <div>
              <img src={`${basePath}/prompt3.jpg`} className="w-full" alt="" />
              <p className="text-base pt-2">此礼非礼，直击人心</p>
            </div>
            <div>
              <img src={`${basePath}/prompt4.jpg`} className="w-full" alt="" />
              <p className="text-base pt-2">此礼非礼，直击人心</p>
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
            <div>
              <img src={`${basePath}/images/prompt1.jpg`} className="w-full" alt="" />
              <p className="text-base pt-2">此礼非礼，直击人心</p>
            </div>
            <div>
              <img src={`${basePath}/prompt2.jpg`} className="w-full" alt="" />
              <p className="text-base pt-2">此礼非礼，直击人心</p>
            </div>
            <div>
              <img src={`${basePath}/prompt3.jpg`} className="w-full" alt="" />
              <p className="text-base pt-2">此礼非礼，直击人心</p>
            </div>
            <div>
              <img src={`${basePath}/prompt4.jpg`} className="w-full" alt="" />
              <p className="text-base pt-2">此礼非礼，直击人心</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

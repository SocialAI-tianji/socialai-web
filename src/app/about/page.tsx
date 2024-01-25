import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function About() {
  return <div className='bg-black text-white'>
    <div className="container mx-auto -mt-20 pt-20 md:-mt-16 md:pt-16">
      <h1>About</h1>
      <Tabs defaultValue="prompt" className="w-full text-center">
        <TabsList className="">
          <TabsTrigger value="prompt">Prompt</TabsTrigger>
          <TabsTrigger value="rag">RAG</TabsTrigger>
          <TabsTrigger value="finetune">Finetune</TabsTrigger>
          <TabsTrigger value="agent">Agent</TabsTrigger>
        </TabsList>
        <TabsContent value="prompt">
          <div className="p-12 mt-4 bg-slate-100 rounded-md border-2 border-slate-200">
            <a className="text-black" href="#">敬酒场景</a>
          </div>
          <div className="p-12 mt-4 bg-slate-100 rounded-md border-2 border-slate-200">
            <a className="text-black" href="#">送祝福场景</a>
          </div>
          <div className="p-12 mt-4 bg-slate-100 rounded-md border-2 border-slate-200">
            <a className="text-black" href="#">待定</a>
          </div>
        </TabsContent>
        <TabsContent value="rag">
          <div className="p-12 mt-4 bg-slate-100 rounded-md border-2 border-slate-200">
            <a className="text-black" href="#">A</a>
          </div>
          <div className="p-12 mt-4 bg-slate-100 rounded-md border-2 border-slate-200">
            <a className="text-black" href="#">B</a>
          </div>
          <div className="p-12 mt-4 bg-slate-100 rounded-md border-2 border-slate-200">
            <a className="text-black" href="#">C</a>
          </div>
        </TabsContent>
        <TabsContent value="finetune">
          <div className="p-12 mt-4 bg-slate-100 rounded-md border-2 border-slate-200">
            <a className="text-black" href="#">D</a>
          </div>
          <div className="p-12 mt-4 bg-slate-100 rounded-md border-2 border-slate-200">
            <a className="text-black" href="#">E</a>
          </div>
          <div className="p-12 mt-4 bg-slate-100 rounded-md border-2 border-slate-200">
            <a className="text-black" href="#">F</a>
          </div>
        </TabsContent>
        <TabsContent value="agent">
          <div className="p-12 mt-4 bg-slate-100 rounded-md border-2 border-slate-200">
            <a className="text-black" href="#">H</a>
          </div>
          <div className="p-12 mt-4 bg-slate-100 rounded-md border-2 border-slate-200">
            <a className="text-black" href="#">I</a>
          </div>
          <div className="p-12 mt-4 bg-slate-100 rounded-md border-2 border-slate-200">
            <a className="text-black" href="#">J</a>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  </div>
}

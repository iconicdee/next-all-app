import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const OnBoard = () => {
  return(
    <div className="bg-white">
     <Tabs>
        <div className="w-full">
          <div className="flex items-baseline justify-between border-b pb-6 pt-24">
            <h1>Welcome to onboarding</h1>
          </div>

        </div>
     </Tabs>
    </div>
  )
}

export default OnBoard


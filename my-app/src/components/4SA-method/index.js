import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Label } from "@/components/ui/label"
import { Input} from "@/components/ui/input"

const methodContent = [
    {
        id: 0,
        title: "Introduction",
        content:"The 4SA Method, How to bring a idea into progress",
        message:"see more"
    },
    {
            id: 1,
        title: "Thread A",
        content:"How are you going to develop your stratergy ? Which method are you going to use to develop a stratergy ? What if the project is lengthy?",
        message:"see more"
    },

]

const methodContent2 = {
    placeholder: "Example 1",
    page: "You have a concept, How will you put into progress?"
}

const MethodPage = () => {
  return (
      <div>
        <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
        >
            {methodContent.map((method) => (
                <AccordionItem key={method.id} value={`item-${method.id}`} className="flex flex-col">
                    <AccordionTrigger>{method.title}</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p>{method.content}</p>
                        <p className="flex justify-end">{method.message}</p>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
        <div className="mt-4">
            <Input placeholder={methodContent2.placeholder} className="font-bold" />
            <p className="mt-2">{methodContent2.page}</p>
        </div>
    </div>

  )
}

export default MethodPage

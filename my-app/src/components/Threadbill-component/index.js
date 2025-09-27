import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Subtitles } from "lucide-react"

const threadContent = {
    title: "Thread A",
    content: [
        {
            label: "Sub thread 1",
            placeholder: "Enter Text here.",
            componentType: "text-area",
            type: "text"
            
        },
        {
            label: "Sub interpretation 2",
            placeholder: "Enter Text here.",
            componentType: "text-area",
            type: "text"
            
        }
    ],
    icon:"/Group 1588.png",
    alt: "thread icon",
    Subtitle: "select categ",
    subtitleOptions: ["Option 1", "Option 2", "Option 3"],
    subtitle2: "select Process",
    subtitle2Options: ["Process 1", "Process 2", "Process 3"],

    buttonIcon: "/Component 57.png",
    summaryThread: "Summary of Thread A",
    contentSummary: {
        label: "Summary of Thread A",
        placeholder: "Enter Text here.",
        componentType: "text-area",
        type: "text"
    }


}

const Threadbuild = () => {
  return  (
    <div className="w-[480px]">
        <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
        >
        <AccordionItem value="item-1">
            <div className="bg-[#fafae4] h-[45px] w-full items-center px-7 justify-center rounded-sm py-0">
                <AccordionTrigger className="flex flex-row-reverse  font-bold gap-12 justify-end ">{threadContent.title}</AccordionTrigger>   
            </div>
            
            <AccordionContent className="flex flex-col gap-4 text-balance">
                <div className="flex gap-8 p-5">
                    <div className="flex flex-col w-[199px] h-[95px] border border-gray-100 rounded-md">
                        <label className="flex bg-slate-100 p-1 items-center gap-2 text-sm font-medium">{threadContent.content[0].label}</label>
                        <textarea className="resize-none rounded-md border border-input p-2 h-full" placeholder={threadContent.content[0].placeholder} type={threadContent.content[0].type}/>
                    </div>
                    <div className="flex flex-col w-[199px] h-[95px] border border-gray-300 rounded-md">
                        <label className="flex bg-slate-100 p-1 items-center gap-2 text-sm font-medium">{threadContent.content[1].label}</label>
                        <textarea className="resize-none rounded-md border border-input p-2 h-full" placeholder={threadContent.content[1].placeholder} type={threadContent.content[1].type}/>
                    </div>  
                </div>
                <div className="flex gap-5 justify-end items-center mr-9">
                    <div>
                        <img src={threadContent.icon} alt={threadContent.alt} />
                    </div>
                    <div className="flex gap-5 items-center mt-1 p-0">
                                <AccordionItem value="item-2" className="border shadow-sm rounded-md font-semibold font-poppins">
                            <AccordionTrigger>{threadContent.Subtitle}</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                            <ul>
                                {threadContent.subtitleOptions.map((option, index) => (
                                        <li key={index} className="mb-2">{option}</li>
                                ))}
                            </ul>
                            </AccordionContent>
                        </AccordionItem>
                            <AccordionItem value="item-3" className=" shadow-sm rounded-md  font-poppins font-semibold">
                            <AccordionTrigger>{threadContent.subtitle2}</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                            <ul>
                                {threadContent.subtitle2Options.map((option, index) => (
                                        <li key={index} className="mb-2">{option}</li>
                                ))}
                            </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </div>
                   
                    
                </div>
                 <div className="flex flex-col gap-5 ml-5">
                            <div className="flex items-center justify-start">
                            <img src={threadContent.buttonIcon} alt="add more threads" />
                        </div>
                        <div className="flex flex-col w-[425px] h-[108px] border border-gray-300 rounded-md">
                            <label className="flex bg-slate-100 p-1 items-center gap-2 text-sm font-medium">{threadContent.contentSummary.label}</label>
                            <textarea className="resize-none rounded-md border border-input p-2 h-full" placeholder={threadContent.contentSummary.placeholder} type={threadContent.contentSummary.type}/>
                        </div>  
                    </div>
            
            </AccordionContent>
        </AccordionItem>
        
        
        </Accordion> 
    </div>
    
  )
}

export default Threadbuild

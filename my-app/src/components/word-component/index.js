import { Label } from "../ui/label"
import { Input } from "../ui/input"


const wordContent = [
    {
        label: "Title",
        type: "text",
    },
    {
        label: "Content",
        content: {
                items: ["File","Edit","View","Insert","Format","Tools","Table","Help"]
        }
    },
    {
        images:["/arrow-curve-left-right.png","/arrow-curve-left-down.png","/arrow-expand-02.png","/Paragraph.png","ellipsis.png"]
    }
]

const WordComponent = () => {
  return (
    <div className=" flex flex-col gap-5 w-[422px] mx-auto ">
        <div>
            <Label>{wordContent[0].label}</Label>
            <Input type={wordContent[0].type} />
        </div>
        <div className="flex flex-col gap-3">
            <Label>{wordContent[1].label}</Label>
            <div>
                <ul className="flex gap-3 items-center">
                                {wordContent[1].content.items.map((item, index) => (
                                        <li key={index} className="mb-2">{item}</li>
                                        ))}
                </ul>
                <ul className="flex gap-3">
                    {wordContent[2].images.map((image, index) => (
                        <li key={index} className="mb-2">
                            <img src={image} alt={`Image ${index}`} />
                        </li>
                    ))}
                </ul>
                <textarea className="resize-none rounded-md border border-input p-2 w-full h-[180px] border-b-0"type="text"/>
            </div>
        </div>
      
    </div>
  )
}

export default WordComponent

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "../ui/button"
import { ArrowLeft } from "lucide-react" // Import an arrow icon

const sidebarHeader = {
  header: "Journey Board",
  src: "/move-left.svg",
  alt: "close"
}
const sidebarTitle = {
  title: "Explore the world of management"
}

const sidebarList = [
  { id: 1, word: "Technical Project Management" },
  { id: 2, word: "Technical Project Management" },
  { id: 3, word: "Technical Project Management" },
  { id: 4, word: "Technical Project Management" },
]

export default function AppSidebar({ open, setOpen }) {
  if (!open) return null;

  return (
    <div className="w-[392px] h-[700px] border border-gray-400 rounded-lg">
      <div className="bg-black flex items-center p-3 justify-center rounded-tr-lg">
        <h2 className="text-white flex flex-nowrap shrink-0 text-xl">{sidebarHeader.header}</h2>
        <div className="relative h-[50px] w-full bg-black p-2 rounded-tr-xl">
          {/* Top-right circle button */}
          <button
            onClick={() => setOpen(prev => !prev)}
            className="absolute top-2 right-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 shadow"
          >
            <ArrowLeft className="w-5 h-5 text-black" />
          </button>
        </div>
      </div>
      <div className="w-full p-4">
        <h3 className="font-bold text-lg mb-8">{sidebarTitle.title}</h3>
        <ul className="list-disc ml-4">
          {sidebarList.map(item => (
            <li key={item.id} className="mb-7">
              {item.word}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
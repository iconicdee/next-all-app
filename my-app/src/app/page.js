"use client"
import CardComponent from "@/components/card-component";
import AppSidebar from "@/components/sidebar"
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [open ,setOpen] = useState(false)

  const mainContent= {
    title: "Technical Project Management",
    buttonText: "Submit task",
    container: {
      title: "Explore the world of management",
      content: "As a project manager, you play an important role in leading a project through initiation,planning,execution,monitoring,controlling and completion. How? Do you want to manage each and every step of your life?"
    }
  }

  return (
    <div>
      <div className="flex relative">
        <div className="h-[692px] flex w-[100px] flex-col shadow-md">
          <div className="relative h-[50px] w-full bg-black p-2 rounded-tr-xl ">
            <button
              onClick={() => setOpen(prev => !prev)}
              className="absolute top-2 right-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 shadow"
            >
              <ArrowRight className="w-5 h-5 text-black" />
            </button>
          </div>
          <div className="h-full border-r border-b border-gray-400 rounded-b-xl w-full"></div>
        </div>
        <div className="absolute z-30 top-0 left-0 bg-white">
          <AppSidebar open={open} setOpen={setOpen} />
        </div>
        <div className="w-[1066px] grid grid-cols-2 mx-auto p-5">
          <div className="flex items-center justify-between h-[42px] col-span-2">
            <h2 className="text-blue-800 font-bold text-[28px] w-[466px]">
              {mainContent.title}
            </h2>
            <Button className="bg-blue-800 text-white hover:bg-blue-600">
              {mainContent.buttonText}
            </Button>
          </div>
          <div className="h-[135px] mt-12 bg-[#E9ECEF] py-6 px-8 col-span-2">
            <h3 className="text-[20px] font-bold h-[30px]">
              {mainContent.container.title}
            </h3>
            <p className="text-[14px] mt-2">
              {mainContent.container.content}
            </p>
          </div>
          <div className="col-span-2 gap-12 mt-12">
            <CardComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

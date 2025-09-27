import Header from "@/components/header"
import FooterIcon from "@/components/footer-icon"
  import NoticeBoard from "@/components/notice-board"

const CommonLayout = ({children}) => {
  return (
      <div className=" flex flex-col mx-auto w-[1440px] h-[1805px] bg-white border border-gray-300">
        <Header/>
        <main className="flex ">
          {children}
          <FooterIcon />
          <NoticeBoard />
        </main>
      </div>
  )
}

export default CommonLayout

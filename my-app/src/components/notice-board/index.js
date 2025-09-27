const noticeContent = {
    title: "Notice Board",
    src:"/x-01.png",
    alt: "close",
}

const NoticeBoard = () => {
  return (
    <div className='flex h-[394px] '>
        <div className='flex flex-col items-center gap-2 w-[50px] bg-black rounded-tl-xl rounded-bl-xl'>
            <img src={noticeContent.src} alt={noticeContent.alt} className='h-10 w-10 justify-end mb-28' />
            <h2
              className='text-white text-[30px] font-bold justify-start'
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", background: "#222", padding: "8px 0", borderRadius: "8px" }}
            >
              {noticeContent.title}
            </h2>
        </div>  
        {/* Main notice area */}
        <div className='bg-[#ccc] h-[394px] w-[70px]'>
            {/* Empty for now */}
        </div>
    </div>
  )
}

export default NoticeBoard;
import React from 'react'

const icon = {
    src:["/question-mark (2) 1.png","/meeting 1.png","/schedule (1) 1.png"]
}

const FooterIcon = () => {
  return (
    <div className='flex flex-col gap-4 items-center justify-end ml-20 '>
      {icon.src.map((src, index) => (
            <span key={index} className='flex items-center justify-center rounded-full w-[75px] h-[75px] bg-blue-700 inline-block p-2'>
            <img src={src} alt={`Footer icon ${index + 1}`} />
        </span>
      ))}
    </div>
  )
}

export default FooterIcon;

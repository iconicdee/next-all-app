const Header = () => {

  const images= [
    {
      id:1,
      src:"/Group 1100.png",
      alt: "image1"
    },
    {
      id:2,
      src:"/Ellipse 53.png",
      alt: "image2"
    },
    {
      id:3,
      src:"/Group 1097.png",
      alt: "image3"
    },
    {
      id:4,
      src:"/ellipsis-vertical.svg",
      alt: "image4"
    },

  ]
  return (
    <div className='flex items-center justify-between w-full h-[90px] bg-[#F0F0F0] shadow-lg backdrop-blur-md p-6'>
      <div className="">
        <img src="/logo 1.png" alt="Logo" className="" />
      </div>
      <div>
        <ul className="flex items-center justify-center gap-5">
            {
              images.map(image=><li key={image.id}>
                <img src={image.src} alt={image.alt}/>
              </li>)
            }
        </ul>
      </div>
    </div>
  )
}

export default Header

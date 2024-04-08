import { useEffect, useState } from "react"
import { menus } from "../data"

const Topbar = () => {

  const [isOnTop, setIsOnTop] = useState(true)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200 || window.pageYOffset > 200){
        setIsOnTop(false)
      } else {
        setIsOnTop(true)
      }
    })
  }, [])

  const clickOnLink = (link: string) => {
    const sec = document.getElementById(link)
    sec?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className={`fixed left-0 top-0 h-20 w-full flex z-[50] fade-in transition-all ${!isOnTop ? 'bg-blue-300' : ''}`}>
      <nav className="max-w-6xl m-auto">
        <div className="flex justify-center items-center w-full">
  
          <div className="flex gap-x-12 items-center">
            {menus.map(menu => (
              <button onClick={() => clickOnLink(menu.id)} className={`outline-none text-lg w-full transition-all hover:text-blue-700 ${!isOnTop ? 'text-darkblue' : 'text-blue-300'} whitespace-pre`}>
                {menu.title}
              </button>
            ))}
          </div>

        </div>
      </nav>
    </header>
  )
}

export default Topbar
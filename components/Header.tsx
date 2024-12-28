import TransitionLink from "@/utils/TransitionLink"
import React from "react"

const navItems = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
]

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="flex items-center gap-4 border-b h-20">
          {navItems.map((item, index) => (
            <TransitionLink key={index} href={item.link}>
              {item.title}
            </TransitionLink>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header

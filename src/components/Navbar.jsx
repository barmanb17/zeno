import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import {
  Navbar as ResizableNavbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./ui/resizable-navbar"

const Navbar = () => {
  const navigate = useNavigate()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Dashboard",
      link: "/dashboard",
    },
    {
      name: "Community",
      link: "/community",
    },
    {
      name: "Blog",
      link: "/blog",
    },
  ]

  const handleLogoClick = () => {
    navigate('/')
  }

  const handleNavItemClick = (e) => {
    e.preventDefault()
    const href = e.currentTarget.getAttribute('href')
    navigate(href)
  }

  const handleGetStartedClick = () => {
    navigate('/dashboard')
  }

  return (
    <div className="relative w-full">
      <ResizableNavbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo 
            logoSrc={assets.logo} 
            altText="Zeno Logo" 
            title="Zeno"
            onClick={handleLogoClick}
          />
          <NavItems items={navItems} onItemClick={handleNavItemClick} />
          <div className="flex items-center gap-4">
            <NavbarButton 
              variant="primary"
              onClick={handleGetStartedClick}
              className="flex items-center gap-2"
            >
              Get Started <ArrowRight className='w-4 h-4' />
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo 
              logoSrc={assets.logo} 
              altText="Zeno Logo" 
              title="Zeno"
              onClick={handleLogoClick}
            />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={(e) => {
                  e.preventDefault()
                  navigate(item.link)
                  setIsMobileMenuOpen(false)
                }}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4 mt-4">
              <NavbarButton
                onClick={() => {
                  handleGetStartedClick()
                  setIsMobileMenuOpen(false)
                }}
                variant="primary"
                className="w-full flex items-center justify-center gap-2"
              >
                Get Started <ArrowRight className='w-4 h-4' />
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </ResizableNavbar>
    </div>
  )
}

export default Navbar   
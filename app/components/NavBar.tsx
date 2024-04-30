import React from 'react'
import Logo from './Logo'


const NavBar = () => {
  return (
    <>
    <DesktopNavbar />
    </>
  )
}

const itme=[
    {
        label:"Dashboard",link:"/"
    },
    {
        label:"Transactions",link:"/transactions"
    },
    {
        label:"Manage", link:"/manage"
    },
]



function DesktopNavbar(){
    return(
        <div className='hidden border-collapse border-b bg-background md:block'>
            <nav className='container flex items-center justify-between px-8'>
                <div className="flex h-[80px] min-h-[60px]"></div>
                <Logo />
                <div className="flex h-full"></div>

            </nav>

        </div>
    )
}

export default NavBar

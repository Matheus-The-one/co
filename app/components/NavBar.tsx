"use client"


import React, { useState } from 'react'
import Logo from './Logo'
import { InstancedMesh } from 'three/src/Three.js'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from './ui/button'
import { UserButton } from '@clerk/nextjs'

import { ThemeSwitcherBtn } from './ThemeSwitcherBtn'
import { Sheet } from './ui/sheet'


const NavBar = () => {
  return (
    <>
    <DesktopNavbar />
    <MobileNvaBar />
    </>
  )
}

const item=[
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

function MobileNvaBar(){
    const [isOpen,setIsOpen]=useState(false);
    return <div className="block border-separate bg-background md:hidden">
        <nav className='container flex itmes-cneter justify-between px-8'>
            <Sheet open={isOpen} onOpenChange={setIsOpen}></Sheet>

        </nav>
    </div>

}

function DesktopNavbar(){
    return(
        <div className='hidden border-collapse border-b bg-background md:block'>
            <div className="flex items-center gap-2">
                <ThemeSwitcherBtn/>
                <UserButton  afterSignOutUrl='/sign-in'/>
            </div>
            <nav className='container flex items-center justify-between px-8'>
                <div className="flex h-[80px] min-h-[60px]"></div>
                <Logo />
                <div className="flex h-full">{item.map(item=>(
                    <NavbarItem
                    key={item.label}
                    link={item.link}
                    label={item.label}
                    
                    
                    
                    />
                ))}</div>

            </nav>

        </div>
    )
}
function NavbarItem({link,label}:
    {
    link:string;
    label:string
})
{
const pathname=usePathname();
const isActive=pathname===link
return <div className='relative flex items-center'>
    <Link href={link} className={cn(
        buttonVariants({variant:'ghost'}),
        'w-full justify-start text-lg text-mute-foreground hover:text-foreground',
        isActive &&'text-foreground'
    )}>{label}</Link>
    {
        isActive&&(
            <div className="absolute -bottom-[2px]  left-1/2 hidden h-[2px] w-[80%] -translate-x-1/2 rounded-xl bg-foreground md:block"></div>
        )
    }


</div>

}

export default NavBar

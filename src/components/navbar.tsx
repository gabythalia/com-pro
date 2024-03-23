'use client'
// import ButtonLink from "./buttonLink";
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation";
import React from "react";
// import Hamburger from "@/lib/script"

export default function Navbar () {
   const pathname = usePathname()

    function handleHamburger() {
        // console.log('sliding...');
        
        const hamburger = document.getElementById('hamburger')
        const navMenu = document.querySelector("#nav-menu")

        //aktifin button nya
        hamburger?.classList.toggle('hamburger-active');

        //non-aktifin button nya
        navMenu?.classList.toggle('opacity-100')
        navMenu?.classList.toggle('opacity-0')
        

    }

    return (
        
        
        <header className={`
        
            ${pathname ===  '/' ? 'bg-primary font-figtree text-white': ""} 
            ${pathname === '/servicePage' ? 'bg-[#eddbb9] font-figtree text-black' : ""}
            ${pathname === '/teams' ? 'bg-[#962053] font-figtree text-white' : ""} 
            flex justify-between shadow flex-row z-10 w-full fixed menu items-center
            
        `}>
            {/* LOGO */}
            {/* <div className='flex justify-start py-5 px-2 w-fit items-center'>
                <Image className="flex text-white" src={pathname === '/servicePage' ? '/sm_logo.png' : '/sm_logo2.png' } alt="logo" width={81} height={56}/>  
            </div> */}

        {/* logo servicePage */}
        
        <Image className={` flex text-white ${ pathname === '/servicePage' ? '' : 'hidden' } `} src='/sm_logo.png' alt="logo" width={81} height={56}/>
        {/* logo home */}
        <Image className={` flex text-white ${ pathname === '/'  || pathname === '/teams' ? '' : 'hidden'  } `} src='/sm_logo2.png' alt="logo" width={81} height={56}/>

            {/*  HAMBURGER MENU !!*/}
            
            <button onClick={handleHamburger} id="hamburger" name="hamburger" type="button" 
            className=" lg:hidden z-50"
            >
                <span className={`hamburger-line duration-200 ${pathname === '/servicePage' ? ' bg-black' : 'bg-white'} `}></span>
                <span className={`hamburger-line duration-200 ${pathname === '/servicePage' ? ' bg-black' : 'bg-white'} `}></span> 
            </button>

            <div  className={`max-lg:hidden
                
            `}>
                {/* menu home  buat desktop katanya wkwk */}
                <ul className="flex">
                    <li className="group">
                        <Link href="/" className="text-base py-1 mx-1 flex group-hover:text-white">HOME</Link>
                    </li>
                    <li className="group">
                        <Link href="/#about" className="text-base  text-dark py-1 mx-1 flex group-hover:text-white">ABOUT</Link>
                    </li>
                    <li className="group">
                        <Link href="/servicePage" className="text-base text-dark py-1 mx-1 flex group-hover:text-white">PRODUCT</Link>
                    </li>
                    <li className="group">
                        <Link href="/teams" className="text-base  text-dark py-1 mx-1 flex group-hover:text-white">TEAMS</Link>
                    </li>
                </ul>
           
            </div>

            {/* menu home buat mobile katanya wkwk */}
            <div  id="nav-menu" className={`duration-200 font-figtree absolute top-20 right-4 opacity-0 z-50
            ${pathname === '/' ? ' w-auto dropdown font-size-600 font-bold text-white bg-primary items-center shadow-lg rounded-lg right-4 lg:block lg:shadow-none lg:rounded-none' : "top-40"}
            ${pathname === '/servicePage' ? ' w-auto dropdown font-size-600 font-bold text-black bg-[#eddbb9] items-center shadow-lg rounded-lg right-4 lg:block lg:shadow-none lg:rounded-none ' : "top-40"}
            ${pathname === '/teams' ? ' w-auto dropdown font-size-600 font-bold text-white bg-[#962053] items-center shadow-lg rounded-lg right-4 lg:block lg:shadow-none lg:rounded-none ' : "top-40"}
                
                `}>
                <ul className="shadow-lg">
                    <li className="group">
                        <Link href="/" className="text-base py-1 mx-1 flex group-hover:text-white">HOME</Link>
                    </li>
                    <li>
                        <Link href="#about" className="text-base  text-dark py-1 mx-1 flex group-hover:text-white">ABOUT</Link>
                    </li>
                    <li>
                        <Link href="/servicePage" className="text-base text-dark py-1 mx-1 flex group-hover:text-white">PRODUCT</Link>
                    </li>
                    <li>
                        <Link href="/teams" className="text-base  text-dark py-1 mx-1 flex group-hover:text-white">TEAMS</Link>
                    </li>
                </ul>
           
            </div>


         </header>
    )
}
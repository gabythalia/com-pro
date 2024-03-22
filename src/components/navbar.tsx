'use client'
// import ButtonLink from "./buttonLink";
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
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
        
            ${pathname ===  '/' ? 'bg-primary text-white': ""} 
            ${pathname === '/servicePage' ? 'bg-[#eddbb9] text-black' : ""} 
            flex justify-between shadow flex-row z-10 w-full fixed menu  items-center
        `}>

            <div className={`${pathname === '/' ? 'flex justify-start py-5 px-2  w-fit items-center' : ""}`}>
                <Image className="flex text-white " src={pathname === '/servicePage' ? '/sm_logo.png' : '/sm_logo.png' } alt="logo" width={81} height={56}/>
            </div>


            {/*  HAMBURGER MENU !!*/}
            
            <button onClick={handleHamburger} id="hamburger" name="hamburger" type="button" 
            className="
            "
            >
                <span className="hamburger-line duration-200"></span>
                <span className="hamburger-line duration-200"></span>
            </button>

            {/* MAIN MENU !! */}
            <div  id="nav-menu" className={` duration-200 absolute top-32 right-4 opacity-0
            ${pathname === '/' ? ' w-auto dropdown font-figtree font-size-600 font-bold text-white bg-primary items-center shadow-lg rounded-lg right-4 lg:block lg:shadow-none lg:rounded-none' :  "top-40"}
                
                `}>
                <ul className="border-2 border-black ">
                    <li className="group ">
                        <Link href="/" className="text-base py-1 mx-1 flex group-hover:text-white">HOME</Link>
                    </li>
                    <li>
                        <Link href="#about" className="text-base  text-dark py-1 mx-1 flex group-hover:text-white">ABOUT</Link>
                    </li>
                    <li>
                        <Link href="/servicePage" className="text-base text-dark py-1 mx-1 flex group-hover:text-white">PRODUCT</Link>
                    </li>
                    <li>
                        <Link href="/user" className="text-base  text-dark py-1 mx-1 flex group-hover:text-white">TEAMS</Link>
                    </li>
                </ul>
           
            </div>


         </header>
    )
}
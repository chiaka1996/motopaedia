"use client"
import { useState, useRef, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useAllContext } from "../context/allcontext";
import { usePathname } from "next/navigation";


const NavigationBar = () => {
    const {toggleMobileNavbarFunction} = useAllContext();

    return(
        <div className="w-full px-[16px] md:px-[20px] py-[27px] bg-[#fff] md:relative fixed top-0 left-0 bg-transparent">
        <nav className="rounded-[12px] border border-[#FFFFFF1A] max-w-[1374px] mx-auto py-[12px] sm:py-[20px] bg-[#FFFFFF05] flex justify-between items-center px-[16px] backdrop-blur-[40px]">
           <Link href="/">
            <div className="relative w-[37px] sm:w-[49px] h-[37px] sm:h-[49px]">
            <Image 
             src="/icons/logo.png"
             alt="thribe community logo"
             fill
             className="object-center"
             />
             </div>
             </Link>

             <div className="hidden md:flex justify-between space-x-[40px] text-[16px] text-[#354764]  items-center">
               <Link href="/"  className="text-[#FFFFFFCC]">Home</Link>

                 <Link href="/#about" className="text-[#FFFFFFCC]">About</Link>

                 <Link href="/#faq" className="text-[#FFFFFFCC] ">FAQ</Link>
             </div>

                <div className="flex w-[30px] md:w-[152px] justify-between items-center ">
                  <Link href="/#waitlist">
                 <Button name="Join Now" classname="w-[108px] h-[48px] md:w-[141px] bg-[#E6C850] hidden md:block"/>
                  </Link>
                <div className="relative w-[24px] h-[24px]" onClick={toggleMobileNavbarFunction} >
                     <Image src="/icons/open_menu.png" fill alt="thribe community menu option" className="object-center md:hidden shrink-0" /> 
                </div>
                </div>
        </nav>
        </div>
    )
}

export default NavigationBar;
"use client"
import { useState, useRef, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useAllContext } from "../context/allcontext";
import { usePathname } from "next/navigation";


const NavigationBar = () => {
    const closeDropdowns = useRef(null)
    const closeMediaDropdown = useRef(null)
    const {toggleMobileNavbarFunction} = useAllContext();
     const pathname = usePathname();

     // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (closeDropdowns.current && !closeDropdowns.current.contains(event.target)) {
        setOpenEvent(false);
      }
      if (closeMediaDropdown.current && !closeMediaDropdown.current.contains(event.target)) {
        setOpenMedia(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


     const toggleOpenEventLink = () => {
        setOpenMedia(false)
        setOpenEvent((prev) => !prev)
     }

     const toggleOpenMediaLink = () => {
        setOpenEvent(false)
        setOpenMedia((prev) => !prev)
     }


    return(
        <div className="w-full px-[16px] md:px-[20px] py-[27px] bg-[#fff] md:relative fixed top-0 left-0 bg-transparent">
        <nav className="rounded-[12px] border border-[#FFFFFF1A] max-w-[1372px] mx-auto py-[20px] bg-[#FFFFFF05] flex justify-between items-center px-[16px] backdrop-blur-[40px]">
           <Link href="/">
            <div className="relative w-[49px] h-[49px]">
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

                 <Link href="/about" className="text-[#FFFFFFCC]">About</Link>

                 <Link href="" className="text-[#FFFFFFCC] ">FAQ</Link>
             </div>

                <div className="flex w-[30px] md:w-[152px] justify-between items-center ">
                  <Link href="#">
                 <Button name="Join Now" classname="w-[108px] h-[48px] md:w-[141px] bg-[#E6C850] hidden md:block"/>
                  </Link>
                <div className="relative w-[24px] h-[24px]" onClick={toggleMobileNavbarFunction} >
                     <Image src="/img/open_menu.png" fill alt="thribe community menu option" className="object-center md:hidden shrink-0" /> 
                </div>
                </div>
        </nav>
        </div>
    )
}

export default NavigationBar;
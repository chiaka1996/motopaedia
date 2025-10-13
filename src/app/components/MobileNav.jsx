"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useAllContext } from "../context/allcontext";

const MobileNavigationBar = () => {
    const {toggleNavbar, toggleMobileNavbarFunction} = useAllContext();
    
    return(
        <div className={`z-50 w-full px-[16px] md:px-[20px] py-[24px] fixed top-0 left-0 w-full h-[100vh] bg-[#fff] ${!toggleNavbar ? "hidden" : ''}`}>
        <nav className="tracking-[3%] leading-[150%] md:max-w-[1248px] mx-auto h-[48px] md:h-[88px] flex justify-between items-center md:px-[32px]">
            <div className="relative w-[49px] h-[49px]">
            <Image 
             src="/icons/logo.png"
             alt="motorpedia logo"
             fill
             className="object-center"
             />
             </div>
            
                <div className="relative w-[24px] h-[24px]" onClick={toggleMobileNavbarFunction}>  
                <Image src="/icons/close-square.png" fill alt="motorpedia" className="object-center md:hidden shrink-0" />
                </div>

        </nav>

            <ul className="text-[20px] font-[600] text-[#354764] tracking-[2%] space-y-[80px] py-[100px] w-full ">
                <li><Link onClick={toggleMobileNavbarFunction} href="/" className="">Home</Link></li>
                <li> <Link onClick={toggleMobileNavbarFunction} href="#about" className="">About</Link></li>
                <li> <Link onClick={toggleMobileNavbarFunction} href="#faq" className="">FAQs</Link></li>
                
                <Link href="/#waitlist" onClick={toggleMobileNavbarFunction}>
                <Button name="Join Now" classname="w-full h-[60px] bg-[#E6C850]"/>
                </Link>
            </ul>
        </div>
    )
}

export default MobileNavigationBar;
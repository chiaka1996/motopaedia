"use client"
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import NavigationBar from "./components/navigation";
import MobileNavigationBar from "./components/MobileNav";
import { useAllContext } from "./context/allcontext";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "./components/Button";
import AutomotiveIntelligence  from "./components/AutoIntelligence";
import WhyMotorpedia from "./components/WhyMotorpedia";
import Delarex from "./components/delarex";
import AllInOne from "./components/AllInOne";
import Faq from "./components/Faq";
import WaitList from "./components/WaitList";
import Footer from "./components/Footer";
gsap.registerPlugin(ScrollTrigger);


export default function Home() {

  return (
    <main>
    {/* banner section */}
   <section className="px-[16px] md:px-[20px] xl:px-0 overflow-x-hidden bg-[linear-gradient(270deg,rgba(0,0,0,0)_21.89%,rgba(0,0,0,0.6)_100%),url('https://res.cloudinary.com/chiaka/image/upload/v1760238938/Yellow_Classic_Sports_Car_1_1_fus9kx.png')] md:bg-[linear-gradient(270deg,rgba(0,0,0,0)_21.89%,rgba(0,0,0,0.6)_100%),url('https://res.cloudinary.com/chiaka/image/upload/v1760092279/banner_sdxdxe.png')] bg-cover bg-center w-full min-h-screen">
      <NavigationBar />
    <MobileNavigationBar />

    <div className="mt-[160px] md:mt-[339px] mb-[50px]  max-w-[1372px] mx-auto">
      <div className="space-y-[20px] text-[#fff] max-w-[746px]">
      <div className="bg-[#0000001A] p-[5px] border border-[#FFFFFF1A] text-[12px] sm:text-[14px] leading-[20px] font-[500] rounded-full flex gap-x-[5px] w-[305px] sm:w-[360px] items-center">
        <Image src="/icons/rocket.png" width={10} height={10} alt="motopaedia" className="shrink-0" />
      <span>Coming Soon - Join 100,000+ Early Subscribers</span>
      </div>

      <h1 className="font-[400] text-[32px] sm:text-[46px] md:text-[56px] leading-[110%] tracking-[-2%]">
        The World&apos;s First AI-Powered Automotive <span className="font-[var( --font-instrument-serif)]">Encyclopedia</span> Super App
      </h1>
      </div>

      <div className="flex flex-col gap-[26px] md:flex-row justify-between items-start mt-[20px] text-[#fff]">
        <div className="space-y-[48px]">
        <p className="max-w-[746px]">
        Revolutionizing the Way You Drive, Buy, and Know Cars. 
        Get instant answers, insights, and recommendations—all 
        powered by next-generation artificial intelligence.
      </p>
      <div className="flex flex-col md:flex-row items-center gap-[13px]">
        <Button name="Join the Waitlist Now" classname="cursor-pointer w-full md:w-[193px] h-[48px] py-[12px] bg-[#E6C850]" />
        <button className="cursor-pointer flex justify-center bg-[#fff] gap-x-[6px] items-center w-full md:w-[149px] h-[48px] font-[600] text-[16px] leading-[24px] text-[#000] rounded-[8px] py-[12px] border border-[#D5D7DA]">
          <span>Learn More</span>
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>

      </div>

      {/* monthly giveaway */}
      <div className="w-full md:w-[357px] h-full py-[28px] px-[24px] bg-[#00000033] border md:border-[6px] border-t-[#FFDE59] border-x-0 border-b-0 rounded-[8px]">
        <Image src="/icons/gift.png" alt="motorpedia" width={20} height={20} />
        <div className="mt-[20px]">
          <h3 className="text-[#FEFEFE] font-[500] text-[20px] leading-[110%] tracking-[-2%]">Monthly Giveaway</h3>
          <p className="mt-[4px]">
           Brand New Vehicle with $0 cost, no strings, and no purchases required 
          </p>
        </div>
      </div>
      </div>

    </div>
    
  </section>

  <AutomotiveIntelligence />
  <WhyMotorpedia />
  <Delarex />
  <AllInOne />
   <Faq /> 
 <WaitList />
   <Footer />
   </main>
  );
}

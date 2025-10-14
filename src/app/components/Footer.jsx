'use client'
import Image from "next/image";
import Link from "next/link";
import { useAllContext } from "../context/allcontext";

const Footer = () => {

    return (
        <main className="w-full bg-[#060606] px-[16px] md:px-[20px] [1374px]:px-0 py-[40px] text-[#94949E]">
        <section className="max-w-[1200px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between gap-[32px] items-start">
                {/* footer logo */}
                <div className="space-y-[12px]">
                    <div className="relative w-[73px] h-[72px]">
                        <Image src="/icons/logo.png" fill alt="motorpedia logo" />
                    </div>
                    <p className="max-w-[303px] text-[17px] ">MotorPedia AI — Where Cars Meet Intelligence</p>
                    <div> Waitlist@motorpedia.ai</div>
                    <div>Contact@motorpedia.ai</div>
                </div>

                {/* footer links */}
                <div className="flex gap-[65px] items-start text-">
                    <div className="space-y-[24px]">
                        <h3 className="text-[#FFFFFF] text-[22px] font-[500] leading-[120%]">Menu</h3>
                        <div>
                        <Link href="/#feature">Features</Link>
                        </div>
                        <div>
                         <Link href="/#about">About</Link>
                         </div>
                          <div>
                         <Link href="/#waitlist">Join Us</Link>
                         </div>
                        
                    </div>
                    <div className="space-y-[24px]">
                        <h3 className="text-[#FFFFFF] text-[22px] font-[500] leading-[120%]">Legal</h3>
                        <div>
                        <Link href="#">Testimonial</Link>
                        </div>
                         <div>
                          <Link href="/#faq">FAQ&apos;S</Link>
                        </div>
                    </div>
                </div>

            </div>

            <div className="mt-[50px] w-full py-[30px] px-[10px] flex flex-col md:flex-row gap-[10px] justify-between border border-[#FFFFFF1A] border-x-0 border-b-0">
                <p>2025 Delarex Technologies Inc. All rights reserved.</p>
                <div className="flex gap-x-[10px]">
                    <Link href="https://www.instagram.com/motorpedia.ai?igsh=MWRneGs1dmVpamJodg%3D%3D&utm_source=qr" target="_blank">
                    <div className="cursor-pointer shrink-0 w-[44px] h-[44px] rounded-[10px] backdrop-blur-[22.6px] flex justify-center items-center bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.04)_100%),radial-gradient(50%_100%_at_50%_0%,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0)_100%)]">
                        <Image src="/icons/linkedin.png" width={18} height={18} alt="motorpedia logo" />
                    </div>
                    </Link>
                    <Link href="https://x.com/motorpediai?s=21&t=HgFY3GVV5Pwv6N0cQBnBWQ" target="_blank">
                    <div className="cursor-pointer shrink-0 w-[44px] h-[44px] rounded-[10px] backdrop-blur-[22.6px] flex justify-center items-center bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.04)_100%),radial-gradient(50%_100%_at_50%_0%,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0)_100%)]">
                        <Image src="/icons/x.png" width={20} height={18} alt="motorpedia logo" />
                    </div>
                    </Link>
                    <div className="cursor-pointer shrink-0 w-[44px] h-[44px] rounded-[10px] backdrop-blur-[22.6px] flex justify-center items-center bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.04)_100%),radial-gradient(50%_100%_at_50%_0%,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0)_100%)]">
                        <Image src="/icons/instagram.png" width={20} height={20} alt="motorpedia logo" />
                    </div>

                </div>

            </div>
         </section>
         </main>
    )
}

export default Footer;
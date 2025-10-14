"use client"
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import toast from "react-hot-toast"
import gsap from "gsap";

const WaitList = () => {
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)
     const numberRef2 = useRef(null);
    
      useEffect(() => {
        const obj = { value: 0 };
        gsap.to(obj, {
          value: 1000,
          duration: 60,
          ease: "none",
          repeat: -1, // infinite loop
          onUpdate: () => {
            numberRef2.current.textContent = Math.floor(obj.value);
          },
          onRepeat: () => {
            obj.value = 0; // reset count after each loop
          },
        });
      }, [])

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


     const handleSubmit = async (e) => {
        try{
            setLoading(true)
        e.preventDefault();
        if(!email){
            setLoading(false)
            return toast.error("email is required")
        }
        if(!emailRegex.test(email)){
             setLoading(false)
            return toast.error("invalid email")
        }

        const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
        });

        const data = await response.json();
        if(data.success){
             setEmail("")
             setLoading(false)
            toast.success(data.message)
        }
        else{
             setLoading(false)
            toast.error(data.message)
        }
    }catch(error){
         setLoading(false)
        toast.error("something went wrong, try again!!")
    }
    };
    return(
        <section className="w-full px-[16px] md:px-[20px] [1374px]:px-0 pb-[100px]" id="waitlist">
            <div className="max-w-[1374px] mx-auto bg-[#FFDE59] rounded-[14px] py-[64px] md:py-[80px] px-[16px] relative">
            {/* abstract image left */}
            <div className="absolute left-0 top-0 bottom-0">
            <div className="relative w-[296px] h-full">
                <Image src="/icons/abstract-right.svg" fill alt="motopedia waitlist" />
            </div>
            </div>
            {/* abstract image right */}
            <div className="absolute right-0 top-0 bottom-0">
            <div className="relative w-[296px] h-full">
                <Image src="/icons/abstract-left.svg" fill alt="motopedia waitlist" />
            </div>
            </div>
            {/* text section */}
            <div className="max-w-[609px] mx-auto text-center">
                <h3 className="text-[32px] sm:text-[46px] md:text-[56px] leading-[120%] text-[#383838]">Join the <span style={{ fontFamily: "var(--font-instrument-serif)" }} className="italic">Waitlist</span> Now</h3>
                <p className="text-[18px] text-[#000000CC] font-[500] mt-[16px]"><span className="">Join over</span> <span className="inline w-[40px] pl-[4px]"><span ref={numberRef2}>0</span>+</span> early subscribers who are ready to experience the future of cars.</p>

                <form onSubmit={handleSubmit}  className="mt-[40px] w-full relative">
                    <div className="w-full flex flex-col md:flex-row justify-between gap-[8px]">
                        <input 
                        type="text" 
                        placeholder="Enter your email" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="outline-none px-[24px] placeholder-[#fff] bg-[#00000033] w-full md:w-[459px] h-[60px] rounded-[8px] backdrop-blur-[5.116238117218018px] border border-[#FFFFFF33]" 
                        />
                        <button 
                        disabled={loading}
                        type="submit"
                        className="cursor-pointer w-full md:w-[142px] h-[60px] rounded-[8px] bg-[#FFFAE6] text-[#060606] font-[600]"
                        >
                        {loading ? "Sending..." : "Subscribe"}</button>
                    </div>

                </form>
            </div>
            
            </div>

        </section>
    )
}

export default WaitList;
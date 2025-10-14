import Image from "next/image";

const AutomotiveIntelligence = () => {
    return(
        <section className="w-full bg-[#FFFFFF] py-[55px] md:py-[100px] px-[16px] md:px-[20px] [1374px]:px-0" id="about">
            <div className="max-w-[1374px] mx-auto flex flex-col-reverse md:flex-row items-center gap-[32px] md:gap-[80px]">
                 <div className="relative w-full md:w-[644px] h-[343px] sm:h-[410px] md:h-[568px] rounded-[12px]">
                    <Image src="https://res.cloudinary.com/chiaka/image/upload/v1760092230/Frame_5_o2u9w6.png" fill alt="motorpaedia auto intelligence" className="bg-center bg-cover" />
                 </div>
                <div className="w-full md:w-[591px] space-y-[24px]">
                    <h2 className="text-[32px] sm:text-[46px] md:text-[56px] font-[400] leading-[120%] tracking-[-2%] text-[#383838]">Automotive <span style={{ fontFamily: "var(--font-instrument-serif)" }} className="italic">Intelligence</span></h2>
                    <div className="space-y-[24px] max-w-[394px] text-[#414651]">
                    <p>
                    Imagine having the entire automotive world in your pocket—every make, every model, every detail—instantly accessible through the power of AI.
                    </p>
                    <p>
                    With MotorPedia AI, your journey in the automotive space becomes smarter, faster, and effortless. 
                    Whether you&rsquo;re a car buyer, a driver, a dealer, or just a car enthusiast, MotorPedia AI gives you instant answers, 
                    insights, and recommendations—all powered by next-generation artificial intelligence.
                    </p>
                    </div>
                </div>
            </div>
           
        </section>
    )
}

export default AutomotiveIntelligence;
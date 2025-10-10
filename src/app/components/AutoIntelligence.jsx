import Image from "next/image";

const AutomotiveIntelligence = () => {
    return(
        <section className="w-full bg-[#FFFFFF] py-[100px]">
            <div className="px-[16px] md:px-[20px] xl:px-0 max-w-[1372px] mx-auto flex items-center gap-x-[80px]">
                 <div className="relative w-[644px] h-[568px] rounded-[12px]">
                    <Image src="https://res.cloudinary.com/chiaka/image/upload/v1760092230/Frame_5_o2u9w6.png" fill alt="motorpaedia auto intelligence" className="bg-center bg-cover" />
                 </div>
                <div className="w-[591px] space-y-[24px]">
                    <h2 className="text-[56px] font-[500] leading-[120%] tracking-[-2%] text-[#383838]">Automotive Intelligence</h2>
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
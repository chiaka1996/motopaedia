import Image from "next/image";
const WaitList = () => {
    return(
        <section className="w-full px-[16px] md:px-[20px] xl:px-0 pb-[100px]">
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
                <h3 className="text-[32px] sm:text-[46px] md:text-[56px] leading-[120%] text-[#383838]">Join the Waitlist Now</h3>
                <p className="text-[18px] text-[#000000CC] font-[500] mt-[16px]">Join over 100,000+ early subscribers who are ready to experience the future of cars.</p>

                <form className="mt-[40px] w-full">
                    <div className="w-full flex flex-col md:flex-row justify-between gap-[8px]">
                        <input 
                        type="text" 
                        placeholder="Enter your email" 
                        className="outline-none px-[24px] placeholder-[#fff] bg-[#00000033] w-full md:w-[459px] h-[60px] rounded-[8px] backdrop-blur-[5.116238117218018px] border border-[#FFFFFF33]" 
                        />
                        <button className="w-full md:w-[142px] h-[60px] rounded-[8px] bg-[#FFFAE6] text-[#060606] font-[600]">Subscribe</button>
                    </div>

                </form>
            </div>
            
            </div>

        </section>
    )
}

export default WaitList;
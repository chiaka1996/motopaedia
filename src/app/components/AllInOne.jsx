import Image from "next/image";

const AllInOne = () => {
    return(
        <section className="py-[100px]">
            <div className="px-[16px] md:px-[20px] xl:px-0 max-w-[1374px] mx-auto flex justify-between gap-[20px] items-center">
                <div className="w-[604px] space-y-[16px]">
                    <h1 className="text-[56px] text-[#181D27] leading-[120%]">
                        <span className="block">All-in-one</span>
                        <span className="leading-[60px]">Encyclopedia</span><span> for cars</span>
                    </h1>

                    <p className="font-[500] text-[#666666]">
                        Revolutionizing the Way You Drive, Buy, and Know Cars. Get instant answers, insights,
                         and recommendations—all powered by next-generation artificial intelligence.
                    </p>

                    <div className="flex gap-x-[12px] mt-[32px]">
                        <div className="relative w-[132px] h-[44px] rounded-[8px] cursor-pointer">
                        <Image src="/icons/app_btn.png" fill alt="motopedia"  />
                        </div>
                        <div className="relative w-[148px] h-[44px] rounded-[8px] cursor-pointer">
                        <Image src="/icons/app_btn2.png" fill alt="motopedia"  />
                        </div>
                    </div>
                </div>

                <div className="w-[532px] h-[640px] justify-center flex items-center relative">
                    <div className="relative w-[532px] h-[480px]">
                    <Image src="/img/blob.png" fill alt="motopedia" className="object-center" />
                    </div>

                    <div className="absolute top-0 right-0">
                        <div className="relative w-[363px] h-[690px]">
                        <Image src="https://res.cloudinary.com/chiaka/image/upload/v1760092309/iPhone_mockup_butpcj.png" fill alt="motopedia" className="object-center" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AllInOne;
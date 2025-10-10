import Image from "next/image";
import List from "./DelarexList";

const Delarex = () => {
    return(
        <section className="w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.1),rgba(255,255,255,0.1)),url('https://res.cloudinary.com/chiaka/image/upload/v1760092313/Yellow_Classic_Sports_Car_1_hlmzsq.png')] bg-no-repeat bg-cover bg-center">
            <div className="px-[16px] md:px-[20px] xl:px-0 max-w-[1372px] mx-auto py-[55px]">
                <div className="max-w-[528px] rounded-[8px] border border-[#FFFFFF1A] p-[32px] bg-[#0000001A] backdrop-blur-[60px]">
                    <div className="flex justify-between items-center w-full mb-[24px]">
                        <div className="text-[40px] leading-[110%] tracking-[-2%] text-[#fff] text-[40px]">
                            <span className="block">Built by Delarex</span>
                            <span>Technologies Inc.</span>
                        </div>
                        <div className="relative w-[52px] h-[52px]">
                            <Image src="/icons/delarex.png" fill alt="delarex inc with motopedia" />
                        </div>
                    </div>

                    <List 
                    icon="/icons/building.png" 
                    iconSize="w-[26px] h-[24px]"
                    header="Innovation Hub" 
                    paragraph="At the forefront of AI and automotive technology, developing cutting-edge solutions for tomorrow's mobility." />
                    <List 
                    icon="/icons/people2.png" 
                    iconSize="w-[26px] h-[24px]"
                    header="Expert Team" 
                    paragraph="Our diverse team of AI engineers, automotive experts, and industry veterans brings decades of experience."
                     />
                     <List 
                    icon="/icons/award.png" 
                    iconSize="w-[20px] h-[26px]"
                    header="Proven Track Record" 
                    paragraph="Successfully delivering innovative AI and FinTech solutions that transform industries and empower users."
                     />
                </div>
            </div>
        </section>
    )
}

export default Delarex;
import Image from "next/image"

const WhyMotorpediaGrid = ({header, icon, paragraph, iconSize}) => {
    return(
        <div className="p-[16px] md:p-[32px] border border-[#E9EAEB]">
            <div className={`relative ${iconSize} shrink-0`}>
            <Image src={icon} fill alt="why choose motopedia AI" />
            </div>
            <h2 className="text-[24px] leading-[110%] tracking-[-2%] text-[#383838] mt-[32px]">{header}</h2>
            <p className="text-[#414651] mt-[8px]">
            {paragraph}
            </p>
        </div>
    )
}

export default WhyMotorpediaGrid;
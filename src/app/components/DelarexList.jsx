import Image from "next/image"

const List = ({icon, iconSize, header, paragraph}) => {
    return(
        <div className="border-[2px] border-t-[#FFFFFF33] border-x-0 border-b-0 py-[24px] space-y-[24px]">
            <div className={`${iconSize} relative`}>
            <Image src={icon} fill alt="motorpedia" />
            </div>
            <div className="space-y-[8px]">
                <h2 className="text-[24px] leading-[110%] tracking-[-2%] text-[#FEFEFE]">{header}</h2>
                <p className="text-[#FFFFFFCC]">{paragraph}</p>
            </div>


        </div>
    )
}

export default List;
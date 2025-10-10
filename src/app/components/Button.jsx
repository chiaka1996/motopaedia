
const Button = ({name, classname}) => {
    return(
     <button className={`${classname} cursor-pointer font-[600] text-[16px] leading-[24px] text-[#000000] rounded-[8px]`}>
        {name}
     </button>   
    )
}
export default Button;
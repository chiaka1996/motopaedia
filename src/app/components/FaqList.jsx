

const FaqList = ({question, answer}) => {
    return (
        <div className="p-[24px] border border-b-[#E7E9EF] border-x-0 border-t-0 space-y-[16px]">
            <h3 className="flex justify-between item-start text-[20px] text-[#262626] font-[600]">
                <span>{question}</span>
                <div className="w-[32px] h-[32px] rounded-full flex items-center justify-center bg-[#F5F5F5] cursor-pointer">
                    <span class="material-symbols-outlined">
                    add
                    </span>
                </div>
            </h3>
            <div className="hidden">
                {answer}
            </div>
        </div>
    )
}

export default FaqList;
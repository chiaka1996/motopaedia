"use client"
import Image from "next/image";
import FaqList from "./FaqList";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const refs = useRef([]);

    useEffect(() => {
    refs.current.forEach((ref, i) => {
      if (!ref) return;
      if (activeIndex === i) {
        gsap.to(ref, { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" });
      } else {
        gsap.to(ref, { height: 0, opacity: 0, duration: 0.3, ease: "power2.inOut" });
      }
    });
  }, [activeIndex]);


    const FaqQuestionsAndAnswer = [
        {
            id:"1",
            question: "What makes MotorPedia AI different from other car websites?",
            answer: `You can ask virtually anything car-related! From "What&apos;s the best family SUV under $30,000?" to "How often should I change the oil in a 2019 Honda Accord?" or "What's the current market value of my car?" Our AI handles technical specs, maintenance schedules, buying advice, market trends, comparisons, and much more.`
    },
    {
        id: "2",
        question: "How accurate is the AI&apos;s information about cars?",
        answer: "How accurate is the AI's information about cars?"
    },
     {
        id: "3",
        question: "Can MotorPedia AI help me find the right car for my budget?",
        answer: "Can MotorPedia AI help me find the right car for my budget?"
    },
    {
        id: "4",
        question: "Is MotorPedia AI free to use?",
        answer: "Is MotorPedia AI free to use?"
    },
    {
        id: "5",
        question: "What types of questions can I ask MotorPedia AI?",
        answer: `You can ask virtually anything car-related! From &apos;What&apos;s the best family SUV under $30,000?&apos; to &apos;How often should I change the oil in a 2019 Honda Accord?&apos; or &apos;What&apos;s the current market value of my car?&apos; Our AI handles technical specs, maintenance schedules, buying advice, market trends, comparisons, and much more.`
    }
]
    return(
        <section className="py-[50px] sm:py-[100px] px-[16px] md:px-[20px] xl:px-0" id="faq">
            <div className="max-w-[1374px] mx-auto flex flex-col md:flex-row gap-[10px] md:gap-[20px] justify-between items-center">
                <div className="w-full md:w-[496px] space-y-[48px]">
                    <h2 className="text-center md:text-left text-[32px] sm:text-[46px] md:text-[56px] leading-[120%] tracking-[2%] text-[#383838]">
                        <span className="block">Frequently Asked</span>
                        <span style={{ fontFamily: "var(--font-instrument-serif)" }} className="italic">Question</span>
                    </h2>
                    <div className="relative w-full h-[500px] rounded-[12px] hidden md:block">
                        <Image src="https://res.cloudinary.com/chiaka/image/upload/v1760144109/Frame_5_gzauxn.png" fill alt="motorpedia frequently asked questions" className="object-center object-cover" />
                    </div>
                </div>

                <div className="w-full md:w-[590px]">
                    {FaqQuestionsAndAnswer.map((list, i) => <div className="p-[24px] border border-b-[#E7E9EF] border-x-0 border-t-0 space-y-[16px]" key={i}>
                        <h3 className="flex justify-between item-start trext-[18px]  sm:text-[20px] text-[#262626] font-[600]">
                            <span>{list.question}</span>
                            <div 
                             onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                            className="shrink-0 w-[32px] h-[32px] rounded-full flex items-center justify-center bg-[#F5F5F5] cursor-pointer">
                                { activeIndex === i ? <span className="material-symbols-outlined">
                                    check_indeterminate_small
                                    </span> : <span className="material-symbols-outlined">
                                add
                                </span> }
                            </div>
                        </h3>
                        <div  ref={(el) => (refs.current[i] = el)}
                        className="overflow-hidden h-0 opacity-0 text-[17px] font-[500] text-[#666666]">
                            {list.answer}
                        </div>
                    </div>
                    )}
                </div>

            </div>
        </section>
    )
}

export default Faq;
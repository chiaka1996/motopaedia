import WhyMotorpediaGrid from "./whyMotorpediaGrid";

const WhyMotorPedia = () => {
    return(
        <section className="w-full my-0 md:my-[50px] mb-[50px] md:mb-[100px] px-[16px] md:px-[20px] [1374px]:px-0" id="feature">
            <div className=" max-w-[1374px] mx-auto">
            <h2 className="text-[32px] sm:text-[46px] md:text-[56px] font-[500] leading-[120%] tracking-[-2%] text-center text-[#383838]">Why <span style={{ fontFamily: "var(--font-instrument-serif)" }} className="italic">MotorPedia</span> AI?</h2>
            <div className="whyMotorpedia mt-[32px] md:mt-[48px] w-full">
                <WhyMotorpediaGrid 
                 iconSize="w-[26px] h-[21px]"
                 icon="/icons/car.png" 
                 header="All Cars, One Place" 
                 paragraph="Access trusted, AI-curated data on vehicles worldwide with comprehensive specifications and insights."
                 />
                  <WhyMotorpediaGrid 
                  iconSize="w-[24px] h-[24px]"
                 icon="/icons/search.png" 
                 header="Smart Car Match" 
                 paragraph="Get personalized recommendations based on your style, budget, and needs using advanced AI algorithms."
                 />
                 <WhyMotorpediaGrid 
                  iconSize="w-[16px] h-[26px]"
                 icon="/icons/dollar.png" 
                 header="Price Intelligence" 
                 paragraph="Compare prices, track market value, and save money when buying or selling with real-time data."
                 />
                 <WhyMotorpediaGrid 
                  iconSize="w-[24px] h-[22px]"
                 icon="/icons/message.png" 
                 header="MotorBot" 
                 paragraph="Ask MotorPedia AI anything about cars—maintenance, specs, reviews, or market insights."
                 />
                 <WhyMotorpediaGrid 
                  iconSize="w-[26px] h-[24px]"
                 icon="/icons/people1.png" 
                 header="For Everyone" 
                 paragraph="From first-time buyers to seasoned collectors, MotorPedia AI empowers every automotive journey."
                 />
                  <WhyMotorpediaGrid 
                  iconSize="w-[26px] h-[21px]"
                 icon="/icons/car.png" 
                 header="Trusted Data" 
                 paragraph="Built on verified automotive data sources with AI-powered accuracy and reliability guarantees."
                 />
                 <WhyMotorpediaGrid 
                  iconSize="w-[22px] h-[26px]"
                 icon="/icons/location.png" 
                 header="Social + Live Streaming" 
                 paragraph="Communities Hub for car lovers, creators, collectors, and drivers to connect and share"
                 />
                 <WhyMotorpediaGrid 
                  iconSize="w-[24px] h-[24px]"
                 icon="/icons/barcode.png" 
                 header="AR Car Visualization" 
                 paragraph="View cars in your environment with interactive parts exploration"
                 />
                  <WhyMotorpediaGrid 
                  iconSize="w-[26px] h-[24px]"
                 icon="/icons/book.png" 
                 header="Encyclopedia & Specs" 
                 paragraph="Explore 1000s of models, performance stats, sound, and 3D views"
                 />

            </div>
            <div>

            </div>
            </div>

        </section>
    )
}

export default WhyMotorPedia;
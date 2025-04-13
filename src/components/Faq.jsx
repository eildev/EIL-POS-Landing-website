import { useState } from "react";


const Faq = () => {

    const [openIndex, setOpenIndex] = useState(null);
    const items = [
        {
          question: "What is a POS system and why use it?",
          answer: "A POS system helps manage sales, inventory, invoices, and payments efficiently."
        },
        {
          question: "How does the stock management feature work?",
          answer: "It tracks inventory in real time, manages transfers, expiry, and low stock alerts."
        },
        {
          question: "Can I manage multiple branches with this system?",
          answer: "Yes, you can monitor and manage sales, stock, and performance across all branches."
        },
        {
          question: "Is there HR and payroll management available?",
          answer: "Yes, HRM includes employee profiles, payroll, evaluations, and permission setup."
        },
        {
          question: "How does the CRM feature benefit my business?",
          answer: "CRM helps track customer purchases, run campaigns, and manage due reminders."
        },
        {
          question: "Does the system generate reports automatically?",
          answer: "Yes, you get sales, inventory, expense, and performance reports with export options."
        },
      ];
      


    return (
        <div id="faq" className="mt-20">
            <div className="content_bg py-[31px] w-full lg:mb-[50px] mb-8 max-w-[1440px] mx-auto">
                <div className="flex md:justify-between justify-center items-center w-[95%] mx-auto flex-wrap gap-5">
                    <h1 className="md:text-[28px] text-[20px] text-[#170F49] font-bold">3. FAQ Accordion V3</h1>
                    <button className="md:text-[18.55px] font-medium text-[#0F70EB] rounded-[58px] bg-[#0F70EB] bg-opacity-[11%] px-[32px] py-[18px]">Preview Cloneable</button>
                </div>
            </div>
            <div className="bg-[#F7FAFD] md:py-[95px] py-10">
                <div className="max-w-[1338px] w-[95%] mx-auto grid lg:grid-cols-2 gap-[26px] ">
                    {
                        items.map((item, index) => (
                            <div key={index} className={`bg-white rounded-[18.55px] px-[38px] py-[47px] duration-300 custom_shadow`}>
                                <h1 onClick={() => setOpenIndex(openIndex === index ? null : index)} className="flex justify-between items-center text-[#170F49] xl:text-[25.50px] text-[18px] md:text-[20px] font-medium gap-4">
                                    {item.question}
                                    <div className={`h-[48.12px] min-w-[48.12px] duration-300 ${openIndex === index ? " bg-[#0F70EB]" : " bg-[#F7F7FF]"} rounded-[9.28px] w-fit flex justify-center items-center`}>
                                        <div>
                                            {
                                                openIndex === index ? <span className="w-[20.87px] h-[2.5px] block bg-white rounded-sm border-[0.35px]"></span> :
                                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.7801 0.194247C10.0438 0.194247 9.44681 0.791191 9.44681 1.52756V20.0779C9.44681 20.8142 10.0438 21.4112 10.7801 21.4112C11.5165 21.4112 12.1134 20.8142 12.1134 20.0779V1.52756C12.1134 0.791191 11.5165 0.194247 10.7801 0.194247Z" fill="#6F6C90" stroke="#6F6C90" stroke-width="0.347833" stroke-linecap="round" />
                                                        <path d="M1.50497 9.46964C0.768608 9.46964 0.171664 10.0666 0.171664 10.8029C0.171664 11.5393 0.768608 12.1363 1.50497 12.1363H20.0553C20.7916 12.1363 21.3886 11.5393 21.3886 10.8029C21.3886 10.0666 20.7916 9.46964 20.0553 9.46964H1.50497Z" fill="#6F6C90" stroke="#6F6C90" stroke-width="0.347833" stroke-linecap="round" />
                                                    </svg>
                                            }
                                        </div>
                                    </div>
                                </h1>
                                <p className={`text-[#6F6C90] duration-300 xl:text-[20.27px] max-w-[498px] leading-[34px] ${openIndex === index ? "min-h-[105px] opacity-100 mt-[15px]" : "h-0 overflow-hidden opacity-0"}`}>{item.answer}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Faq;
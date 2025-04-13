import Header from '../utility/Header';

const Package = () => {
    return (
        <div>
            <Header
                title={`Our Packages`}
                heading={`Pricing`}
                sub_title={`Choose the plan that best fits your business needs. Flexible pricing and powerful features.`}
            />

            <div className='max-w-[1140px] w-[95%] mx-auto flex justify-between items-center md:gap-[30px] flex-wrap'>
                {/* Small Pack */}
                <div className='flex-1 min-w-[280px] sm:min-w-[360px] mx-auto py-[26px]'>
                    <h3 className='text-[#0F70EB] text-center font-semibold'>STARTER PACK</h3>
                    <h1 className='text-[60px] text-center mt-[12px] text-[#1E2022]'>$19</h1>
                    <div className='text-center my-10 space-y-[10px]'>
                        <p className='text-[#77838F] text-[17px]'>Up to 100 Reservations/month</p>
                        <p className='text-[#77838F] text-[17px]'>Basic Client Management</p>
                        <p className='text-[#77838F] text-[17px]'>Standard Invoicing</p>
                        <p className='text-[#77838F] text-[17px]'>Basic Reporting</p>
                        <p className='text-[#D9DADA] text-[17px]'>Data Backups</p>
                        <p className='text-[#D9DADA] text-[17px]'>Custom Branding</p>
                        <p className='text-[#D9DADA] text-[17px]'>Advanced Analytics</p>
                        <p className='text-[#D9DADA] text-[17px]'>Priority Support</p>
                    </div>
                    <button className='text-[#0F70EB] bg-[#EDF3FF] py-[15px] mx-auto text-center sm:w-[310px] w-full relative left-[50%] translate-x-[-50%] font-semibold rounded'>
                        Select Plan
                    </button>
                </div>

                {/* Medium Pack */}
                <div className='flex-1 min-w-[280px] sm:min-w-[360px] mx-auto py-[26px]'>
                    <h3 className='text-[#00C9A7] text-center font-semibold'>BUSINESS PACK</h3>
                    <h1 className='text-[60px] text-center mt-[12px] text-[#1E2022]'>$29</h1>
                    <div className='text-center my-10 space-y-[10px]'>
                        <p className='text-[#77838F] text-[17px]'>Unlimited Reservations</p>
                        <p className='text-[#77838F] text-[17px]'>Advanced Client Management</p>
                        <p className='text-[#77838F] text-[17px]'>Custom Invoicing</p>
                        <p className='text-[#77838F] text-[17px]'>Housekeeping Tools</p>
                        <p className='text-[#77838F] text-[17px]'>Daily Data Backups</p>
                        <p className='text-[#77838F] text-[17px]'>Web Booking Widget</p>
                        <p className='text-[#D9DADA] text-[17px]'>Advanced Analytics</p>
                        <p className='text-[#D9DADA] text-[17px]'>Priority Support</p>
                    </div>
                    <button className='text-[#00C9A7] bg-[#E8FAF6] py-[15px] mx-auto text-center sm:w-[310px] w-full relative left-[50%] translate-x-[-50%] font-semibold rounded'>
                        Select Plan
                    </button>
                </div>

                {/* Large Pack */}
                <div className='flex-1 min-w-[280px] sm:min-w-[360px] mx-auto py-[26px]'>
                    <h3 className='text-[#0F70EB] text-center font-semibold'>ENTERPRISE PACK</h3>
                    <h1 className='text-[60px] text-center mt-[12px] text-[#1E2022]'>$49</h1>
                    <div className='text-center my-10 space-y-[10px]'>
                        <p className='text-[#77838F] text-[17px]'>Unlimited Reservations</p>
                        <p className='text-[#77838F] text-[17px]'>Full Client & Staff Management</p>
                        <p className='text-[#77838F] text-[17px]'>Custom Reports & Analytics</p>
                        <p className='text-[#77838F] text-[17px]'>Housekeeping & Maintenance</p>
                        <p className='text-[#77838F] text-[17px]'>Real-time Data Backups</p>
                        <p className='text-[#77838F] text-[17px]'>Full Branding Customization</p>
                        <p className='text-[#77838F] text-[17px]'>Advanced Booking Widget</p>
                        <p className='text-[#77838F] text-[17px]'>24/7 Priority Support</p>
                    </div>
                    <button className='text-[#0F70EB] bg-[#EDF3FF] py-[15px] mx-auto text-center sm:w-[310px] w-full relative left-[50%] translate-x-[-50%] font-semibold rounded'>
                        Select Plan
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Package;

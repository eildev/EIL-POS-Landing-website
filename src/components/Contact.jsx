import { useState } from 'react';
import emailjs from 'emailjs-com';
import map from "../assets/map.png";
import toast from 'react-hot-toast';



const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        source: '',
    });



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.name.value);
        // Send form data to EmailJS
        emailjs
            .sendForm(`${import.meta.env.VITE_SERVICE_ID}`, `${import.meta.env.VITE_TEMPLATE_ID}`, e.target, `${import.meta.env.VITE_USER_ID}`)
            .then(
                (result) => {
                    toast.success("Sent Successfully")
                    setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        source: '',
                    });
                },
                (error) => {
                    toast.error(error.message)
                    console.log(error.text);
                }
            );
    };

    return (
        <div id="contact" className='max-w-[1440px] mx-auto relative lg:py-[100px] my-10'>

            <div className='w-full lg:w-[419px] absolute right-0 top-0 bg-gradient-to-b from-[#0f70eb] to-[#743fe5] h-full lg:rounded-r-[50px] lg:opacity-100 opacity-50'></div>
            <div className="lg:flex justify-between gap-[50px] items-center max-w-[1140px] w-[95%] mx-auto relative z-10">
                <div>
                    <h1 className="lg:text-[54px] text-[40px] font-bold">
                        Get in <span className="lg:text-[#0F70EB] text-white">Touch</span>
                    </h1>
                    <p className="text-[14px] font-semibold text-black mt-5 mb-10">
                        Have a question or need support? We're here to help—reach out to our team and we’ll get back to you as soon as possible.
                    </p>

                    <form onSubmit={handleSubmit}>
                
                        <div className="relative mb-5">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder=" "
                                className="peer w-full border border-[#E0E0E0] bg-transparent px-5 py-4 text-sm text-white lg:text-black focus:outline-none"
                            />
                            <label
                                htmlFor="name"
                                className={`absolute left-5 transition-all duration-200 bg-white text-sm text-white lg:text-[#828282] 
      ${formData.name ? 'top-[-8px] text-xs' : 'top-1/2 -translate-y-1/2'} 
      peer-focus:top-[-8px] peer-focus:text-xs peer-focus:-translate-y-0
    `}
                            >
                                Name <span className="text-red-600">*</span>
                            </label>
                        </div>

    
                        <div className="relative mb-5">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder=" "
                                className="peer w-full border border-[#E0E0E0] bg-transparent px-5 py-4 text-sm text-white lg:text-black focus:outline-none"
                            />
                            <label
                                htmlFor="email"
                                className={`absolute left-5 transition-all duration-200 bg-white text-sm text-white lg:text-[#828282] 
      ${formData.email ? 'top-[-8px] text-xs' : 'top-1/2 -translate-y-1/2'} 
      peer-focus:top-[-8px] peer-focus:text-xs peer-focus:-translate-y-0
    `}
                            >
                                Email
                            </label>
                        </div>

                
                        <div className="relative mb-5">
                            <input
                                type="number"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                placeholder=" "
                                className="peer w-full border border-[#E0E0E0] bg-transparent px-5 py-4 text-sm text-white lg:text-black focus:outline-none"
                            />
                            <label
                                htmlFor="phone"
                                className={`absolute left-5 transition-all duration-200 bg-white text-sm text-white lg:text-[#828282] 
      ${formData.phone ? 'top-[-8px] text-xs left-5' : 'top-1/2 -translate-y-1/2 left-5'} 
      peer-focus:top-[-8px] peer-focus:text-xs peer-focus:-translate-y-0
    `}
                            >
                                Phone number <span className="text-red-600">*</span>
                            </label>
                        </div>



                        <div className="border border-[#E0E0E0] flex items-center mb-5 relative">
                            <select id="source" name='source' value={formData.source}
                                onChange={handleChange} className="w-full lg:text-black text-white text-[14px] px-5 py-[13px] border-none outline-none">
                                <option value="" disabled className="text-black">How did you find us?</option>
                                <option value="Option 1" className="text-black">Option 1</option>
                                <option value="Option 2" className="text-black">Option 2</option>
                            </select>
                            <svg className="absolute right-[20px]" width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 6L12 0L0 -5.24537e-07L6 6Z" fill="black" />
                            </svg>

                        </div>
                        <button type="submit" className="bg-[#0F70EB] py-[14px] font-bold w-full text-white">SENT</button>

                    </form>
                    <div className="flex justify-center lg:justify-start xl:gap-[50px] gap-10 items-center lg:mt-[60px] mt-8 flex-wrap">
                        <div className="flex items-center gap-[15px]">
                            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.2047 0.424316V2.35275C18.1121 2.35275 19.899 2.83486 21.5655 3.79908C23.1516 4.74321 24.4165 6.00875 25.3601 7.59569C26.3239 9.26299 26.8057 11.0508 26.8057 12.9592H28.7332C28.7332 10.6892 28.161 8.58 27.0165 6.63147C25.9123 4.74321 24.4165 3.24666 22.5292 2.14183C20.5816 0.996821 18.4735 0.424316 16.2047 0.424316ZM6.23614 3.31697C5.69405 3.31697 5.22222 3.48772 4.82067 3.82921L1.71866 6.99305L1.80901 6.93279C1.30707 7.35464 0.97579 7.87692 0.815169 8.49965C0.674625 9.12237 0.71478 9.72501 0.935635 10.3076C1.49781 11.8744 2.25072 13.4814 3.19437 15.1286C4.5195 17.3986 6.0956 19.4375 7.92267 21.2454C10.854 24.1983 14.4981 26.5285 18.855 28.236H18.8851C19.4673 28.4369 20.0496 28.477 20.6318 28.3565C21.2342 28.236 21.7662 27.9748 22.228 27.5731L25.2698 24.5298C25.6713 24.128 25.8721 23.6359 25.8721 23.0533C25.8721 22.4507 25.6713 21.9485 25.2698 21.5467L21.3245 17.5693C20.923 17.1676 20.421 16.9667 19.8187 16.9667C19.2164 16.9667 18.7144 17.1676 18.3129 17.5693L16.4155 19.4978C14.8896 18.7746 13.5645 17.8807 12.4401 16.816C11.3158 15.7313 10.4223 14.4155 9.75978 12.8688L11.6872 10.9403C12.1089 10.4984 12.3197 9.97611 12.3197 9.37347C12.3197 8.75074 12.0787 8.24855 11.5969 7.86688L11.6872 7.95727L7.65162 3.82921C7.25007 3.48772 6.77824 3.31697 6.23614 3.31697ZM16.2047 4.28119V6.20963C17.4294 6.20963 18.5538 6.51095 19.5778 7.11358C20.6218 7.71622 21.445 8.53982 22.0473 9.58439C22.6496 10.6089 22.9508 11.7338 22.9508 12.9592H24.8783C24.8783 11.3923 24.4868 9.93593 23.7037 8.59004C22.9207 7.28433 21.8767 6.23976 20.5716 5.45633C19.2264 4.6729 17.7708 4.28119 16.2047 4.28119ZM6.23614 5.24541C6.29638 5.24541 6.36665 5.27554 6.44696 5.3358L10.3922 9.37347C10.4123 9.45382 10.3922 9.52413 10.332 9.58439L7.47092 12.4168L7.68174 13.0194L8.07325 13.8631C8.39449 14.5461 8.76593 15.209 9.18756 15.8518C9.76981 16.7558 10.4123 17.5292 11.115 18.172C12.0587 19.096 13.1931 19.9397 14.5182 20.703C15.1807 21.0847 15.7429 21.3659 16.2047 21.5467L16.807 21.8179L19.7283 18.8951C19.7685 18.8549 19.7986 18.8349 19.8187 18.8349C19.8388 18.8349 19.8689 18.8549 19.909 18.8951L23.9748 22.9629C24.0149 23.0031 24.035 23.0332 24.035 23.0533C24.035 23.0533 24.0149 23.0734 23.9748 23.1136L20.9631 26.0966C20.5214 26.4783 20.0395 26.5787 19.5175 26.398C15.4217 24.811 12.0085 22.6415 9.27791 19.8895C7.59139 18.2021 6.11568 16.2837 4.85078 14.1343C3.94729 12.5875 3.24457 11.091 2.74263 9.64466V9.61452C2.66232 9.43373 2.65228 9.22281 2.71251 8.98176C2.77274 8.72061 2.88317 8.51973 3.04379 8.37912L6.02533 5.3358C6.08556 5.27554 6.15583 5.24541 6.23614 5.24541ZM16.2047 8.13806V10.0665C17.0078 10.0665 17.6905 10.3477 18.2526 10.9102C18.8148 11.4727 19.0959 12.1556 19.0959 12.9592H21.0234C21.0234 12.0954 20.8025 11.2919 20.3608 10.5486C19.9392 9.80536 19.3569 9.22281 18.614 8.80096C17.8712 8.35903 17.0681 8.13806 16.2047 8.13806Z" fill="black" />
                            </svg>
                            <p className="text-[13px] lg:text-black text-white text-nowrap">PHONE <br />
                                <span className="text-[#0F70EB]">+880 1558984608</span></p>
                        </div>
                        {/* <div className="flex items-center gap-[15px]">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.0625 1.64062V6.5625H8.09375V4.59375H2.1875V22.3125H4.15625V23.2969C4.15625 24.0967 4.44336 24.7837 5.01758 25.3579C5.6123 25.9526 6.30957 26.25 7.10938 26.25C7.90918 26.25 8.59619 25.9526 9.17041 25.3579C9.76514 24.7837 10.0625 24.0967 10.0625 23.2969V22.3125H25.8125V6.5625H21.875V1.64062H10.0625ZM12.0312 3.60938H19.9062V8.53125H12.0312V3.60938ZM4.15625 6.5625H6.125V20.3438H4.15625V6.5625ZM8.09375 8.53125H10.0625V10.5H21.875V8.53125H23.8438V20.3438H8.09375V8.53125ZM11.0469 12.4688V14.4375H13.0156V12.4688H11.0469ZM14.9844 12.4688V14.4375H16.9531V12.4688H14.9844ZM18.9219 12.4688V14.4375H20.8906V12.4688H18.9219ZM11.0469 16.4062V18.375H13.0156V16.4062H11.0469ZM14.9844 16.4062V18.375H16.9531V16.4062H14.9844ZM18.9219 16.4062V18.375H20.8906V16.4062H18.9219ZM6.125 22.3125H8.09375V23.2969C8.09375 23.5635 7.99121 23.7993 7.78613 24.0044C7.60156 24.189 7.37598 24.2812 7.10938 24.2812C6.84277 24.2812 6.60693 24.189 6.40186 24.0044C6.21729 23.7993 6.125 23.5635 6.125 23.2969V22.3125Z" fill="black" />
                            </svg>

                            <p className="text-[13px] lg:text-black text-white text-nowrap">FAX <br />
                                <span className="text-[#0F70EB]">03 5432 1234</span></p>
                        </div> */}
                        <div className="flex items-center gap-[15px]">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.95455 2.625V4.59624L1.75 8.63565V25.375H26.5682V8.63565L20.3636 4.59624V2.625H7.95455ZM10.0227 4.69318H18.2955V12.6428L14.1591 15.3249L10.0227 12.6428V4.69318ZM11.0568 6.76136V8.82955H17.2614V6.76136H11.0568ZM7.95455 7.0522V11.2855L4.6907 9.18501L7.95455 7.0522ZM20.3636 7.0522L23.6275 9.18501L20.3636 11.2855V7.0522ZM11.0568 9.86364V11.9318H17.2614V9.86364H11.0568ZM3.81818 11.0916L14.1591 17.7809L24.5 11.0916V23.3068H3.81818V11.0916Z" fill="black" />
                            </svg>

                            <p className="text-[13px] lg:text-black text-white text-nowrap">EMAIL<br />
                                <span className="text-[#0F70EB]">eclipseintellitech@gmail.com</span></p>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:max-w-[545px] lg:h-[700px] h-[500px] lg:p-0 pt-10 pb-5">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.638100410237!2d90.43345957605148!3d23.760281488395535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b989c099c321%3A0xe00e47cc2118302!2sEclipse%20Intellitech%20Limited!5e0!3m2!1sen!2sbd!4v1744260020886!5m2!1sen!2sbd"
                        className="w-full h-full border-0 rounded-lg"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>


            </div>
        </div>
    );
};

export default Contact;
import emailjs from 'emailjs-com';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const Demo = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        type: '',
        msg: '',
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
                        type: '',
                        msg: '',
                    });
                },
                (error) => {
                    toast.error(error.message)
                    console.log(error.text);
                }
            );
    };




    return (
        <div className='max-w-[600px] mx-auto my-10'>
            <div className='lg:p-10 p-4 rounded-2xl shadow-lg'>
                <h1 className="lg:text-[54px] text-[40px] font-bold">
                Request a <span className="text-[#0F70EB]">Demo</span>
                </h1>
                <p className="text-[14px] font-semibold text-black mt-5 mb-10">
                Want to see how our platform works? Fill out the form below and our team will reach out with a personalized demo just for you.
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="border border-[#E0E0E0] px-5 py-[13px] flex items-center mb-5">
                        <label htmlFor="name" className="text-sm text-[#828282] flex gap-1 items-center text-nowrap">Company / Your Name <span className="text-red-600">*</span></label>
                        <input required value={formData.name}
                            onChange={handleChange} type="text" id="name" name='name' className="border-none outline-none ml-2 w-full bg-transparent text-white lg:text-black" />
                    </div>
                    <div className="border border-[#E0E0E0] px-5 py-[13px] flex items-center mb-5">
                        <label htmlFor="email" className="text-sm text-[#828282] flex gap-1 items-center">Email</label>
                        <input name='email' value={formData.email}
                            onChange={handleChange} type="email" id="email" className="border-none outline-none ml-2 w-full bg-transparent text-white lg:text-black" />
                    </div><div className="border border-[#E0E0E0] px-5 py-[13px] flex items-center mb-5">
                        <label htmlFor="phone" className="text-sm text-[#828282] flex gap-1 items-center text-nowrap">Phone number <span className="text-red-600">*</span></label>
                        <input name='phone' value={formData.phone}
                            onChange={handleChange} required type="number" id="phone" className="border-none outline-none ml-2 w-full bg-transparent text-white lg:text-black" />
                    </div>
                    <div className="border border-[#E0E0E0] px-5 py-[13px] flex items-center mb-5">
                        <label htmlFor="type" className="text-sm text-[#828282] flex gap-1 items-center text-nowrap">Business Type <span className="text-red-600">*</span></label>
                        <input name='type' value={formData.type}
                            onChange={handleChange} required type="text" id="type" className="border-none outline-none ml-2 w-full bg-transparent text-white lg:text-black" />
                    </div>
                    <div className="border border-[#E0E0E0] px-5 py-[13px] flex justify-start items-start mb-5">
                        <label htmlFor="msg" className="text-sm text-[#828282] flex gap-1 items-center text-nowrap">Message 
                            {/* <span className="text-red-600">*</span> */}
                            </label>
                        <textarea name='msg' value={formData.msg} rows={3}
                            onChange={handleChange} type="text" id="msg" className="border-none outline-none ml-2 w-full bg-transparent text-white lg:text-black"></textarea>
                    </div>
                    <button type="submit" className="bg-[#0F70EB] py-[14px] font-bold w-full text-white">SENT</button>

                </form>
            </div>
        </div>
    );
};

export default Demo;
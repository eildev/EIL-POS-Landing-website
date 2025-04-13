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
      peer-focus:top-[-8px] peer-focus:text-xs peer-focus:-translate-y-0`}
  >
    Company / Your Name <span className="text-red-600">*</span>
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
      peer-focus:top-[-8px] peer-focus:text-xs peer-focus:-translate-y-0`}
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
      ${formData.phone ? 'top-[-8px] text-xs' : 'top-1/2 -translate-y-1/2'}
      peer-focus:top-[-8px] peer-focus:text-xs peer-focus:-translate-y-0`}
  >
    Phone number <span className="text-red-600">*</span>
  </label>
</div>


<div className="relative mb-5">
  <input
    type="text"
    id="type"
    name="type"
    value={formData.type}
    onChange={handleChange}
    required
    placeholder=" "
    className="peer w-full border border-[#E0E0E0] bg-transparent px-5 py-4 text-sm text-white lg:text-black focus:outline-none"
  />
  <label
    htmlFor="type"
    className={`absolute left-5 transition-all duration-200 bg-white text-sm text-white lg:text-[#828282]
      ${formData.type ? 'top-[-8px] text-xs' : 'top-1/2 -translate-y-1/2'}
      peer-focus:top-[-8px] peer-focus:text-xs peer-focus:-translate-y-0`}
  >
    Business Type <span className="text-red-600">*</span>
  </label>
</div>


<div className="relative mb-5">
  <textarea
    id="msg"
    name="msg"
    rows={3}
    value={formData.msg}
    onChange={handleChange}
    placeholder=" "
    className="peer w-full border border-[#E0E0E0] bg-transparent px-5 py-4 text-sm text-white lg:text-black focus:outline-none resize-none"
  />
  <label
    htmlFor="msg"
    className={`absolute left-5 transition-all duration-200 bg-white text-sm text-white lg:text-[#828282]
      ${formData.msg ? 'top-[-8px] text-xs' : 'top-3.5'}
      peer-focus:top-[-8px] peer-focus:text-xs`}
  >
    Message
  </label>
</div>

                    <button type="submit" className="bg-[#0F70EB] py-[14px] font-bold w-full text-white">SENT</button>

                </form>
            </div>
        </div>
    );
};

export default Demo;
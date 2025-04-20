import { useState } from 'react';
import logo from '../../public/logo.png';
import { Link } from 'react-router-dom';
const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (

        <nav className="fixed left-0 top-0 w-full bg-[#126BEB] z-[100] border-b">
            <div className="mx-auto md:flex md:justify-between md:items-center max-w-[1140px] w-[95%]">
                <div className="flex items-center justify-between py-4 md:py-5">
                    <Link to='/' href="#" className='flex items-center gap-3'>
                        <img src={logo} alt="" className='md:w-[185px] w-[150px]' />
                    </Link>

                    {/* Mobile menu button */}
                    <div className="flex md:hidden">
                        <button
                            type="button"
                            className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                            aria-label="toggle menu"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {/* Hamburger icon */}
                            {!isOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 8h16M4 16h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`absolute inset-x-0 z-20 w-full transition-all md:shadow-none shadow-2xl duration-300 ease-in-out bg-white pt-5 md:mt-0 md:p-0 pb-5 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full '
                        }`}
                >
                    <div className="flex flex-col md:flex-row">
                        <Link to={'/'} onClick={() => setIsOpen(!isOpen)}
                            className="md:mr-[34px] md:text-white tracking-[1px] py-[10px] text-center"

                        >
                            Home

                        </Link>
                        <Link to='/feature' onClick={() => setIsOpen(!isOpen)}
                            className="md:mr-[34px] md:text-white tracking-[1px] py-[10px] text-center" href="#"
                        >
                            Features

                        </Link>
                        <Link to='/' onClick={() => {
                            setTimeout(() => {
                                const section = document.getElementById('faq');
                                section?.scrollIntoView({ behavior: 'smooth' });
                            }, 100);
                        }}

                            className="md:mr-[34px] md:text-white tracking-[1px] py-[10px] text-center" href="#"
                        >
                           <Link to='/faq'>FAQ’s</Link>  

                        </Link>
                        <Link to={"/demo"} onClick={() => setIsOpen(!isOpen)}
                            className="md:mr-[34px] md:text-white tracking-[1px] py-[10px] text-center" href="#"
                        >
                            Demo

                        </Link>
                        <Link to='/' onClick={() => {
                            setTimeout(() => {
                                const section = document.getElementById('contact');
                                section?.scrollIntoView({ behavior: 'smooth' });
                            }, 100); // 100 milliseconds delay
                        }}

                            className="md:mr-[34px] md:text-white tracking-[1px] py-[10px] text-center" href="#"
                        >
                            Contact

                        </Link>
                        {/* <button className='tracking-[1px] font-semibold text-sm px-4 py-3 rounded bg-white text-[#0F70EB] md:mt-0 mt-5 md:w-full w-[95%] mx-auto'>Buy Now</button> */}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
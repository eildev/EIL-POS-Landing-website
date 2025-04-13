import bg from "../assets/startups.jpg";
import pos from "../assets/Screenshot.png"
import { Link } from "react-router-dom";

const Beginner = () => {
    return (
        <div className="relative lg:mb-[120px] md:mb-20 mb-10">
            <div className="beg_bg lg:h-[500px] h-[850px] absolute top-0 left-0 w-full"></div>
            <img src={bg} alt="" className="lg:h-[500px] h-[850px] w-full object-cover" />

            <div className="max-w-[1140px] w-[95%] mx-auto min-h-full absolute top-0 left-1/2 -translate-x-1/2 flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-6">
                
                {/* 👈 Left Side Hover Image with Overlay Content */}
                <Link to='/demo'>
                <div className="relative group overflow-hidden rounded shadow-lg h-[390px] cursor-pointer">
                    <img src={pos} alt="Left Side" className="w-full min-h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded" />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center text-center p-6">
                        <div>
                            <h3 className="text-white text-2xl font-semibold mb-3">Click to View POS System</h3>
                            <p className="text-gray-200 text-sm w-[350px] mx-auto"> Get a live preview of how our POS software works in real time.</p>
                        </div>
                    </div>
                </div></Link>

                {/* 👉 Right Side Content Box */}
                <div className="py-[28px] px-[25px] bg-white lg:max-w-[360px] rounded min-h-[390px] flex flex-col justify-center">
                    <div className="">
                    <h2 className="text-[#1E2022] text-[22px] tracking-[0.82px] mb-[10px]">Easy for New Users</h2>
                    <p className="text-[#77838F] text-[17px]">
                        Perfect for beginners to start managing sales, stock, and customers.
                    </p>
                    <p className="mt-[30px] mb-[40px] text-[#77838F] text-[17px]">
                        Our system is built user-friendly—handle invoices, inventory, and reports without hassle.
                    </p>
                    <button className="py-[15px] px-[39px] text-white text-[15px] bg-[#0F70EB] font-semibold relative left-[50%] -translate-x-[50%] rounded hover:bg-blue-700 transition">
                        Get Started
                    </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Beginner;

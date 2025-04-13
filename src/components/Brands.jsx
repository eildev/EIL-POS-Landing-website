import spotify from "../assets/Spotify svg.png";
import stripe from "../assets/Stripe svg.png";
import reddit from "../assets/Reddit svg.png";
import pinterest from "../assets/Pinterest svg.png";
import google from "../assets/Google svg.png";
import Marquee from "react-fast-marquee";


const items = [
    {
        image: spotify,
    },
    {
        image: google,
    },
    {
        image: pinterest,
    },
    {
        image: stripe,
    },
    {
        image: reddit,
    }
]

const Brands = () => {
    return (
        <div className="overflow-hidden mt-10 mb-10">
            <Marquee speed={100} pauseOnHover={true} autoFill={true} className="min-w-full">
               {
                 items.map((item, index) => (
                    <div key={index} className="md:mr-[75px] mr-10">
                    <img src={item.image} alt="Spotify" className="max-w-[175px]"/>
                </div>
                 ))
                }
               
            </Marquee>
        </div>
    );
};

export default Brands;

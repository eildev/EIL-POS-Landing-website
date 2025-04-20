import spotify from "../assets/Glowthentic-Logo.svg";
import stripe from "../assets/New-Logo-Sobrokom.png";
// import reddit from "../assets/Reddit svg.png";
import pinterest from "../assets/944228552.webp";
import google from "../assets/1464025244.png";
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
    // {
    //     image: reddit,
    // }
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

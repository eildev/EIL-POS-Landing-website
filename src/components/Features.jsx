import Header from "../utility/Header";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import feature from "../../public/feature.json"
import { Link } from "react-router-dom";


const items = [
    { title: 'The new Git status', image: img1, description: 'Quisque at arcu at turpis lobortis ultrices. Nullam et accumsan mauris. Nunc pellentesque in tellus.' },
    { title: 'Visualize your progress', image: img2, description: 'Quisque at arcu at turpis lobortis ultrices. Nullam et accumsan mauris. Nunc pellentesque in tellus.' },
    { title: 'Easily collaborate', image: img3, description: 'Quisque at arcu at turpis lobortis ultrices. Nullam et accumsan mauris. Nunc pellentesque in tellus.' },
]

const Features = () => {
    return (
        <div className="lg:mt-[133px]  mt-20 md:mb-[107px] mb-10 max-w-[1140px] w-[95%] mx-auto">
            <Header title={`Powerful Business Features`} heading={`Features`} sub_title={`Smart tools to simplify, manage, and grow your business operations`}></Header>

            <div className="flex lg:justify-between justify-center items-center flex-wrap gap-[30px]">
                {
                    feature.slice(0, 6).map((item, index) => (
                        <div key={index} className="text-center lg:max-w-[360px]">
                            <img src={item.img} alt="" className="w-[200px] h-[144px] object-cover mx-auto" />
                            <h2 className="text-[#1E2022] text-lg tracking-[0.68px] mt-[36px] mb-[10px]">{item.title}</h2>
                            <p className="text-[#77838F] tracking-[0.6px] max-w-[400px] lg:max-w-[310px] text-[17px] mx-auto">{item.description}</p>
                        </div>
                    ))

                }
            </div>
          
          <Link to='/feature'>
          <button className="py-[15px] mt-10 px-[39px] text-white text-[15px] bg-[#0F70EB] font-semibold relative left-[50%] translate-x-[-50%] rounded">View More</button></Link>

        </div>
    );
};

export default Features;
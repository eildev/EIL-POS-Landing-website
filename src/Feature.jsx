import { Link } from 'react-router-dom';
import features from '../public/feature.json';

const Feature = () => {
    return (
        <div className=" bg-[#F9FAFB] ">
      {/* Banner */}
      <div className="bg-[#126BEB] text-white py-36 px-6 md:px-20 text-center">
        <h1 className="sm:text-6xl text-4xl font-bold mb-5">Our Features</h1>
        <p className="text-sm opacity-90"><Link to='/'>Home</Link> / Features</p>
      </div>

      {/* Feature List */}
      <div className="py-10  max-w-[1140px] w-[95%] mx-auto">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <li
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 list-none flex flex-col"
            >
              <img
                src={feature.img}
                alt={feature.title}
                className="w-full h-[220px] object-cover rounded-md rounded-b-none"
              />
              <div className=' p-5'>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    );
};

export default Feature;
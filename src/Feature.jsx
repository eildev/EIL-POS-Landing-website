import { Link } from 'react-router-dom';
// import features from '../public/feature.json';
import image1 from "../src/assets/POS-1.webp"
import image2 from "../src/assets/stock.jpeg"
import image3 from "../src/assets/hrm.webp"
import image4 from "../src/assets/crm.jpg"
import image5 from "../src/assets/accounting.jpg"
import image6 from "../src/assets/branch.png"
import image7 from "../src/assets/POS-1.webp"
import image8 from "../src/assets/repoting.jpg"
import image9 from "../src/assets/store.jpg"

const features = [
  {
    img: image1,
    title: "POS System",
    description: "Complete sales, purchase, return, and commission tracking system."
  },
  {
    img: image2,
    title: "Stock & Warehouse",
    description: "Manage stock levels, transfer, expiry, and barcode generation."
  },
  {
    img: image3,
    title: "HRM Management",
    description: "Handle employee data, payroll, roles, and evaluations."
  },
  {
    img: image4,
    title: "CRM Management",
    description: "Track customer purchases, rewards, and marketing campaigns."
  },
  {
    img: image5,
    title: "Accounting",
    description: "Manage loans, expenses, accounts, and invoice payments."
  },
  {
    img: image6,
    title: "Branch Management",
    description: "Monitor branch sales, stock transfers, and staff assignments."
  },
  {
    img: image7,
    title: "Damage & Wastage",
    description: "Log and analyze damage, wastage, and supplier returns."
  },
  {
    img: image8,
    title: "Reporting",
    description: "Generate sales, stock, ledger, and performance reports."
  },
  {
    img: image9,
    title: "Store Management",
    description: "Control product variations, pricing, and bulk updates."
  }
];

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
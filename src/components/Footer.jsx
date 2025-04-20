import { Link } from 'react-router-dom';
import logo from '../../public/logo.png';

const Footer = () => {

    const items = [
        {
            title: 'Helpful Links',
            links: [
                { name: 'Home', url: '/' },
                { name: 'Features', url: '/features' },
                { name: 'FAQ’s', url: '/faqs' },
                { name: 'Demo', url: '/demo' },
                { name: 'Contact', url: '/contact' }
            ]
        },
        {
            title: 'Services',
            links: [
                { name: 'Software Development', url: 'https://eclipseintellitech.com/services/software-development/' },
                { name: 'Web Design & Development', url: 'https://eclipseintellitech.com/services/web-design-development/' },
                { name: 'Graphics Design', url: 'https://eclipseintellitech.com/services/' },
                { name: 'Digital Marketing', url: 'https://eclipseintellitech.com/services/digital-marketing/' },
                { name: 'Mobile Apps Development', url: 'https://eclipseintellitech.com/services/mobile-apps-development/' }
            ]
        },

        {
            title: 'Contact Us',
            links: [
                { name: 'House 41, Block E, Road-06, Banasree', url: null },
                { name: 'Dhaka, Bangladesh', url: null },
                { name: '+880 1558984608', url: null },
                { name: 'E-Mail: eclipseintellitech@gmail.com', url: null }
            ]
        }

    ]


    return (
        <div className='bg-[#0F70EB]'>
            <footer className="max-w-[1140px] w-[95%] mx-auto">
                <div className="">
                    <div className="flex justify-between py-[60px] sm:gap-14 gap-10 flex-wrap">
                        <div className="">
                            <a href="#" className="flex items-center gap-3 mb-[18px]">
                                <img src={logo} alt="" className="w-[150px]" />
                            </a>

                            <p className="text-white text-sm max-w-[360px] mb-4">
                                Choose the package that best fits your business needs. From basic features for small teams to full access for growing companies — we've got you covered.
                            </p>

                            {/* Social Icons */}
                            <div className="flex gap-4 text-white text-xl mt-8">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>

                        {
                            items.map((item, i) => {
                                return (

                                    <div key={i}>
                                        <h3 className="text-white">{item.title}</h3>
                                        {
                                            item.links.map((link, i) => {
                                                const isContact = link.name == "Contact";
                                                const isFaq = link.name == "FAQ’s";

                                                return (
                                                    <Link
                                                        key={i}
                                                        to={isContact || isFaq ? "" : link.url}
                                                        onClick={(e) => {
                                                            if (isContact || isFaq) {
                                                                e.preventDefault(); // prevent default anchor behavior
                                                                const sectionId = isContact ? "contact" : "faq";
                                                                const section = document.getElementById(sectionId);
                                                                section?.scrollIntoView({ behavior: 'smooth' });
                                                            }
                                                        }}
                                                        target={link.url && !isContact && !isFaq ? "_blank" : "_self"}
                                                        className={`block mt-[10px] text-sm text-white ${link.url && 'hover:underline'}`}
                                                    >
                                                        {link?.name}
                                                    </Link>
                                                );
                                            })
                                        }

                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <hr className="bg-[#EEEEEE]" />

                <div>
                    <p className="text-center text-white text-sm py-[25px]">© Copyright 2025. All Rights Reserved. <a href="https://eclipseintellitech.com" target='_blank' className='hover:underline'>Eclipse Intellitech Limited</a></p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
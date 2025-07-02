import vector from "../assets/Vector.png";
import coins from "../assets/coins-svgrepo-com 1.png";
import bolt from "../assets/bolt-svgrepo-com 1.png";
import globe from "../assets/globe-svgrepo-com 1.png";

// إذا أردت،يمكن لاحقاً أن تضيف أيقونة صغيرة مثل arrow صغيرة في العنوان
import { ArrowRight } from "lucide-react";

const Services = () => {
    const ServicesAll = [
        { image: vector, title: "Buy Game Accounts", text: "Discover verified, high-quality accounts for PUBG, Free Fire, Fortnite, and more." },
        { image: coins, title: "Sell Game Accounts", text: "List your gaming accounts easily and securely, and get paid fast." },
        { image: bolt, title: "Top-Up Credits", text: "Recharge your favorite games instantly — PUBG UC, Free Fire Diamonds, and more." },
        { image: globe, title: "Internet Recharges", text: "Fast, secure mobile internet recharging across all Arab countries." },
    ];

    return (
        <div className='my-16 px-6 sm:px-8'>
            {/* Title Section */}
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
                Our Services
            </h2>

            {/* Services Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                {ServicesAll.map((service, index) => (
                    <div
                        key={index}
                        className='flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-gray-50 duration-200'
                    >
                        <img src={service.image} alt={service.title} className='mb-4 w-20 h-20 object-contain' />
                        <div className='flex items-center mb-2 space-x-2'>
                            <h3 className='text-lg font-semibold'>{service.title}</h3>
                            <ArrowRight size={18} color="#2563EB" />
                        </div>
                        <p className='text-gray-500 text-center text-sm'>{service.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services;

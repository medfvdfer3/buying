import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Works = () => {
  const WorksAll = [
    {
      number: 1,
      title: "Add Funds",
      text: "Top up your wallet using card, Mada, or local payment methods.",
    },
    {
      number: 2,
      title: "Pick a Service",
      text: "Choose from game accounts, top-ups, or data recharges.",
    },
    {
      number: 3,
      title: "Pay & Enjoy",
      text: "Complete your payment and get your order instantly.",
    },
  ];

  return (
    <div className="my-16 px-8 w-full">
      <div className="flex justify-between items-center mb-6">
        {/* Title Section */}
        <h2 className="text-2xl sm:text-3xl font-semibold">How it works</h2>
        <Link to="/all-works" className="text-blue-500 font-semibold">
          See All
        </Link>
      </div>
      {/* Works Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {WorksAll.map((service, index) => (
          <div
            key={index}
            className="group flex flex-col p-4 bg-gray-100 rounded-lg shadow-md transition-transform transform hover:bg-[#2563EB] hover:scale-105 duration-200"
          >
            <div className="my-4 text-[32px] font-medium flex justify-center items-center text-white rounded-full w-[60px] h-[60px] bg-[#2563EB] group-hover:bg-white  group-hover:text-[#2563EB]">
              {service.number}
            </div>
            <div>
              <h3 className="text-[18px] font-medium text-[#2563EB] group-hover:text-white transition-colors duration-200">
                {service.title}
              </h3>
            </div>
            <p className="text-[#00000099] text-sm my-4 group-hover:text-white transition-colors duration-200">
              {service.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;

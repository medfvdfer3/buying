import { Link } from "react-router-dom";
import pubgbcgacc11 from "../assets/pubgbcgacc11.png";
import pubgbcgacc12 from "../assets/pubgbcgacc12.png";
import pubgbcgacc13 from "../assets/pubgbcgacc13.png";
import h1 from "../assets/h1.png";
import h2 from "../assets/h2.png";
import h3 from "../assets/h3.png";
import image1 from "../assets/icons/image1.svg";
import image2 from "../assets/icons/image2.svg";
import globe from "../assets/icons/globe.svg";
import diamond from "../assets/icons/diamond_svgrepo.com.svg";
import shirt from "../assets/icons/shirt_svgrepo.com.svg";
import lock_open from "../assets/icons/lock-open_svgrepo.com.svg";
import gamepad from "../assets/icons/gamepad_svgrepo.com.svg";

const Accounts = [
  {
    img: pubgbcgacc11,
    title: "PUBG Mobile",
    image: h1,
    level: "54",
    icon1: image1,
    titleIcon1: "Verified Seller",
    icon2: image2,
    titleIcon2: "Secure Transfer",
    icon3: globe,
    titleIcon3: "Algérie",
    icon4: diamond,
    titleIcon4: "1200 UC Balance",
    icon5: shirt,
    titleIcon5: "15 Rare Skins",
    icon6: lock_open,
    titleIcon6: "Unlinked Account",
    icon7: gamepad,
    titleIcon7: "Season 8-15 Royal Pass",
    price: "$ 23.00",
    btn: "Buy Now",
    country: "USD",
  },
  {
    img: pubgbcgacc12,
    title: "PUBG Mobile",
    image: h2,
    level: "54",
    icon1: image1,
    titleIcon1: "Verified Seller",
    icon2: image2,
    titleIcon2: "Secure Transfer",
    icon3: globe,
    titleIcon3: "Algérie",
    icon4: diamond,
    titleIcon4: "1200 UC Balance",
    icon5: shirt,
    titleIcon5: "15 Rare Skins",
    icon6: lock_open,
    titleIcon6: "Unlinked Account",
    icon7: gamepad,
    titleIcon7: "Season 8-15 Royal Pass",
    price: "$ 23.00",
    btn: "Buy Now",
    country: "USD",
  },
  {
    img: pubgbcgacc13,
    title: "Call of Duty Mobile",
    image: h3,
    level: "54",
    icon1: image1,
    titleIcon1: "Verified Seller",
    icon2: image2,
    titleIcon2: "Secure Transfer",
    icon3: globe,
    titleIcon3: "Algérie",
    icon4: diamond,
    titleIcon4: "1200 UC Balance",
    icon5: shirt,
    titleIcon5: "15 Rare Skins",
    icon6: lock_open,
    titleIcon6: "Unlinked Account",
    icon7: gamepad,
    titleIcon7: "Season 8-15 Royal Pass",
    price: "$ 23.00",
    btn: "Buy Now",
    country: "USD",
  },
];

const HotAccounts = () => {
  return (
    <div className="my-16 px-6 sm:px-12">
      {/* Title */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold">
          Hot Accounts for Gamers
        </h2>
        <Link to="/" className="text-blue-600 font-semibold hover:underline">
          See All
        </Link>
      </div>

      {/* Accounts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Accounts.map((account, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-5 hover:shadow-xl transition duration-300"
          >
            <img
              src={account.img}
              alt={account.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />

            {/* Title and Level */}
            <div className="flex items-center justify-between mb-3">
              <div className="text-lg font-semibold">{account.title}</div>
              <img src={account.image} alt="level" className="h-6" />
            </div>
            <p className="my-2 font-bold text-xs text-[#00000080]">
              Level {account.level}
            </p>
            {/* Icons */}
            <div className="grid grid-cols-1 gap-2 text-sm text-gray-600 mb-4">
              {/* Icons */}
              <div className="text-sm text-gray-600 mb-4">
                {/* Verified & Secure Transfer بخلفية خضراء */}
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-2 bg-[#16A24A33] px-2 py-1 rounded-md">
                    <img src={account.icon1} alt="" className="w-5 h-5" />
                    <span>{account.titleIcon1}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#16A24A33] px-2 py-1 rounded-md">
                    <img src={account.icon2} alt="" className="w-5 h-5" />
                    <span>{account.titleIcon2}</span>
                  </div>
                </div>

                {/* باقي الأيقونات بدون خلفية أو بشكل عادي */}
                <div className="flex flex-col gap-2">
                  {[3, 4, 5, 6, 7].map((num) => (
                    <div key={num} className="flex items-center gap-2">
                      <img
                        src={account[`icon${num}`]}
                        alt=""
                        className="w-5 h-5"
                      />
                      <span>{account[`titleIcon${num}`]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Price & Button */}
            <div className="flex items-center justify-between mt-4">
              <div className="text-lg font-bold text-[#000000">
                {account.price}
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                {account.btn}
              </button>
            </div>

            <p className="text-left text-xs text-gray-400 mt-1">
              {account.country}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotAccounts;

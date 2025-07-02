import React, { useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { MdArrowDropDown, MdClose, MdMenu } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const countries = [
  { code: "dz", name: "Algeria", flag: "https://flagcdn.com/w40/dz.png" },
  { code: "eg", name: "Egypt", flag: "https://flagcdn.com/w40/eg.png" },
  { code: "sa", name: "Saudi Arabia", flag: "https://flagcdn.com/w40/sa.png" },
];

const Navbar = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openDashboard, setOpenDashboard] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const cartItemsCount = useSelector((state) =>
    state.appReducer.products.reduce((acc, product) => acc + product.quantity, 0)
  );

  const handleSelect = (country) => {
    setSelectedCountry(country);
    setOpenDropdown(false);
  };

  return (
    <div className="w-full fixed top-0 left-0 z-50 bg-white shadow">
      {/* 🔵 Top Banner */}
      <div className="bg-blue-600 text-white text-sm py-2 text-center px-4">
        <span className="font-semibold">Ready to your amazing shopping?</span>{" "}
        Get 20% off your first purchase
      </div>

      {/* 🔵 Main Navbar */}
      <div className="flex flex-wrap items-center justify-between py-4 px-4 shadow-sm bg-white">
        {/* ✅ Logo */}
        <div className="text-2xl font-bold text-blue-900">
          <Link to="/">
            DH<span className="text-blue-600">H</span>
          </Link>
        </div>

        {/* ✅ Search */}
        <div className="hidden md:block flex-1 max-w-md mx-4 w-full relative">
          <input
            type="text"
            placeholder="Search Product"
            className="w-full border rounded-full px-4 py-2 text-sm focus:outline-none"
          />
        </div>

        {/* ✅ Right Side */}
        <div className="flex items-center gap-4">
          {/* 🌍 Country Dropdown */}
          <div
            className="hidden md:flex items-center gap-1 text-sm cursor-pointer relative"
            onClick={() => setOpenDropdown(!openDropdown)}
          >
            <img
              src={selectedCountry.flag}
              alt={selectedCountry.code}
              className="w-5 h-5 rounded"
            />
            <span>{selectedCountry.name}</span>
            <MdArrowDropDown size={20} />

            {openDropdown && (
              <div className="absolute top-full mt-2 left-0 bg-white border rounded shadow-lg z-10 w-48">
                {countries.map((country) => (
                  <div
                    key={country.code}
                    onClick={() => handleSelect(country)}
                    className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                  >
                    <img
                      src={country.flag}
                      alt={country.code}
                      className="w-5 h-5 rounded"
                    />
                    <span>{country.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

{/* 🧭 Dashboard Dropdown */}
<div className="relative">
  <button
    className="text-sm text-blue-700 hover:underline"
    onClick={() => setOpenDashboard(!openDashboard)}
  >
    Dashboard
  </button>
  {openDashboard && (
    <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md z-20">
      <div className="flex justify-between items-center px-3 py-2 border-b">
        <span className="font-semibold">Dashboard</span>
        <MdClose
          className="cursor-pointer text-red-500"
          onClick={() => setOpenDashboard(false)}
        />
      </div>
      {["My Profile", "My Orders", "Notifications", "Messages", "My Wallet"].map((item, i) => (
        <Link
          to={`/dashboard?tab=${encodeURIComponent(item)}`}
          key={i}
          className="block px-4 py-2 hover:bg-blue-100 text-sm"
          onClick={() => setOpenDashboard(false)}
        >
          {item}
        </Link>
      ))}
    </div>
  )}
</div>

       {/* 🌍 Country in mobile */}
<div
  className="md:hidden flex items-center gap-1 text-sm cursor-pointer relative"
  onClick={() => setOpenDropdown(!openDropdown)}
>
  <img
    src={selectedCountry.flag}
    alt={selectedCountry.code}
    className="w-5 h-5 rounded"
  />
  <MdArrowDropDown size={20} />

  {openDropdown && (
    <div className="absolute top-full mt-2 left-0 bg-white border rounded shadow-lg z-10 w-48">
      {countries.map((country) => (
        <div
          key={country.code}
          onClick={() => handleSelect(country)}
          className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
        >
          <img
            src={country.flag}
            alt={country.code}
            className="w-5 h-5 rounded"
          />
          <span>{country.name}</span>
        </div>
      ))}
    </div>
  )}
</div>


          {/* 🛒 Cart */}
          <Link
            to="/cart"
            className="text-2xl text-[#4f46e5] hover:text-[#4338ca] relative"
          >
            <FaShoppingCart />
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                <span>{cartItemsCount}</span>
              </span>
            )}
          </Link>

          {/* 👤 Avatar */}
          <Link to="/login" className="text-blue-600 hover:underline hidden md:inline">
            Login
          </Link>

          {/* 🍔 Hamburger Icon */}
          <button className="md:hidden" onClick={() => setShowMobileMenu(true)}>
            <MdMenu size={28} />
          </button>
        </div>
      </div>

      {/* 🔵 Mobile Menu */}
      {showMobileMenu && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-white z-40 p-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-bold">Menu</span>
            <MdClose
              className="text-2xl cursor-pointer"
              onClick={() => setShowMobileMenu(false)}
            />
          </div>
          {[ // Links inside mobile menu only
            { id: 1, page: "Home", path: "/" },
            { id: 2, page: "Buy Accounts", path: "/buy-accounts" },
            { id: 3, page: "Sell Accounts", path: "/sell-accounts" },
            { id: 4, page: "Top-Up", path: "/top-up" },
            { id: 5, page: "Internet Recharge", path: "/top-up" },
            { id: 6, page: "Marketplace", path: "/marketplace" },
            { id: 7, page: "Offers & Deals", path: "/offers&deals" },
            { id: 9, page: "Support", path: "/contact" },
          ].map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className="block py-2 text-blue-600 hover:underline"
              onClick={() => setShowMobileMenu(false)}
            >
              {item.page}
            </Link>
          ))}
        </div>
      )}

      {/* 🔵 Navigation Links (Desktop only) */}
      <div className="hidden md:flex w-full flex-wrap justify-between gap-6 text-sm py-3 px-8 border-t bg-white">
        {[ // Navigation links for desktop only
          { id: 1, page: "Home", path: "/" },
          { id: 2, page: "Buy Accounts", path: "/buy-accounts" },
          { id: 3, page: "Sell Accounts", path: "/sell-accounts" },
          { id: 4, page: "Top-Up", path: "/top-up" },
          { id: 5, page: "Internet Recharge", path: "/top-up" },
          { id: 6, page: "Marketplace", path: "/marketplace" },
          { id: 7, page: "Offers & Deals", path: "/offers&deals" },
          { id: 9, page: "Support", path: "/contact" },
        ].map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className={`hover:text-blue-600 ${
              item.page === "Home"
                ? "text-blue-600 font-semibold underline"
                : "text-gray-800"
            }`}
          >
            <div className="text-[16px] font-bold">{item.page}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
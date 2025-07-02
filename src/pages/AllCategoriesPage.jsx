import React, { useState } from "react";

// البيانات الأساسية
const categoriesData = [
  { name: "PUBG Mobile", items: 234 },
  { name: "Fortnite", items: 189 },
  { name: "Call of Duty", items: 156 },
  { name: "League of Legends", items: 145 },
  { name: "Minecraft", items: 123 },
  { name: "Roblox", items: 187 },
  { name: "Genshin Impact", items: 134 },
  { name: "Free Fire", items: 178 },
  { name: "PlayStation Network", items: 345 },
  { name: "Xbox Live", items: 289 },
  { name: "Steam", items: 567 },
  { name: "Nintendo eShop", items: 234 },
  { name: "Epic Games", items: 189 },
  { name: "Google Play", items: 278 },
  { name: "App Store", items: 245 },
  { name: "Battle.net", items: 197 },
  { name: "Gift Cards", items: 789 },
  { name: "Game Currency", items: 567 },
  { name: "Character Skins", items: 456 },
  { name: "Battle Passes", items: 234 },
  { name: "DLC Packs", items: 345 },
  { name: "Season Passes", items: 234 },
  { name: "Loot Boxes", items: 198 },
  { name: "Premium Memberships", items: 167 },
];

// مكون كارت التصنيف
const CategoryCard = ({ name, items }) => (
  <div className="bg-white rounded-xl p-5 flex flex-col items-center text-center border hover:shadow-sm transition">
    <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center text-2xl font-bold mb-3">
      🎮
    </div>
    <h3 className="text-sm font-medium text-gray-800">{name}</h3>
    <p className="text-xs text-gray-500 my-3">{items} Items</p>
  </div>
);
const AllCategoriesPage = () => {
  const [sortOption, setSortOption] = useState("popular");
  const [searchQuery, setSearchQuery] = useState("");

  // فلترة + ترتيب
  const filteredAndSorted = [...categoriesData]
    .filter((cat) => cat.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortOption === "popular") return b.items - a.items;
      if (sortOption === "least") return a.items - b.items;
      if (sortOption === "az") return a.name.localeCompare(b.name);
      if (sortOption === "za") return b.name.localeCompare(a.name);
      return 0;
    });

  return (
    <section className="bg-white min-h-screen pb-10 px-4 pt-52">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-8">
          <h1 className="text-gray-600 text-sm">
            {filteredAndSorted.length} Categories
          </h1>

          {/* Controls */}
          <div className="flex items-center gap-4 flex-wrap">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border px-3 py-1.5 rounded-md text-sm outline-none focus:ring-1 focus:ring-blue-500"
            />
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="border px-3 py-1.5 rounded-md text-sm outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="popular">Sort by: Popular</option>
              <option value="least">Sort by: Least Items</option>
              <option value="az">Sort: A → Z</option>
              <option value="za">Sort: Z → A</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredAndSorted.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllCategoriesPage;

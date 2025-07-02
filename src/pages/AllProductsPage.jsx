import { useSelector } from "react-redux";
import { useState, useMemo } from "react";
import FilterSidebar from "../components/FilterSidebar";
import ProductCard from "../components/ProductCard";

const AllProductsPage = () => {
  const allProducts = useSelector((state) => state.appReducer.allProducts);

  // فلاتر الحالة
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [selectedCardType, setSelectedCardType] = useState("");
  const [selectedCardValue, setSelectedCardValue] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const [applyFilters, setApplyFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  // تغيير المنصة (Checkbox)
  const handlePlatformChange = (platform) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platform)
        ? prev.filter((p) => p !== platform)
        : [...prev, platform]
    );
  };

  // Reset الكل
  const resetFilters = () => {
    setSelectedPlatforms([]);
    setSelectedCardType("");
    setSelectedCardValue("");
    setSelectedCountry("");
    setSelectedRating("");
    setApplyFilters(false);
    setSearchTerm("");
    setSortOrder("");
  };

  // الفلترة والبحث والترتيب
  const filteredProducts = useMemo(() => {
    let filtered = [...allProducts];

    if (applyFilters) {
      if (selectedPlatforms.length > 0) {
        filtered = filtered.filter((p) =>
          selectedPlatforms.includes(p.platform)
        );
      }
      if (selectedCardType) {
        filtered = filtered.filter((p) => p.cardType === selectedCardType);
      }
      if (selectedCardValue) {
        filtered = filtered.filter(
          (p) => String(p.value) === selectedCardValue
        );
      }
      if (selectedCountry) {
        filtered = filtered.filter((p) => p.country === selectedCountry);
      }
      if (selectedRating) {
        filtered = filtered.filter(
          (p) => Math.floor(p.rating) >= Number(selectedRating)
        );
      }
    }

    if (searchTerm.trim()) {
      filtered = filtered.filter((p) =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortOrder === "asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [
    allProducts,
    applyFilters,
    selectedPlatforms,
    selectedCardType,
    selectedCardValue,
    selectedCountry,
    selectedRating,
    searchTerm,
    sortOrder,
  ]);

  // Pagination
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <main className="bg-gray-50 min-h-screen py-10 px-4 md:px-10 pt-52">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Explore All Game Cards
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <FilterSidebar
          selectedPlatforms={selectedPlatforms}
          selectedCardType={selectedCardType}
          selectedCardValue={selectedCardValue}
          selectedCountry={selectedCountry}
          selectedRating={selectedRating}
          onPlatformChange={handlePlatformChange}
          onCardTypeChange={setSelectedCardType}
          onCardValueChange={setSelectedCardValue}
          onCountryChange={setSelectedCountry}
          onRatingChange={setSelectedRating}
          onApplyFilters={() => {
            setApplyFilters(true);
            setCurrentPage(1);
          }}
          onResetFilters={resetFilters}
        />

        {/* Products + controls */}
        <section className="md:col-span-3">
          {/* بحث وترتيب */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full md:w-1/2 border px-4 py-2 rounded-lg shadow-sm text-sm"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />

            <select
              value={sortOrder}
              onChange={(e) => {
                setSortOrder(e.target.value);
                setCurrentPage(1);
              }}
              className="border px-4 py-2 rounded-lg text-sm"
            >
              <option value="">Sort by price</option>
              <option value="asc">Price: Low to High</option>
              <option value="desc">Price: High to Low</option>
            </select>
          </div>

          {/* المنتجات */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedProducts.length > 0 ? (
              paginatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">
                No products found.
              </p>
            )}
          </div>

          {/* Pagination */}
          <div className="mt-10 flex justify-center gap-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 border rounded-md text-sm ${
                  currentPage === i + 1
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default AllProductsPage;

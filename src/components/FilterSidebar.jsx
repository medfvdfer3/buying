import { Star } from "lucide-react";

const FilterSidebar = ({
  selectedPlatforms,
  selectedCardType,
  selectedCardValue,
  selectedCountry,
  selectedRating,
  onPlatformChange,
  onCardTypeChange,
  onCardValueChange,
  onCountryChange,
  onRatingChange,
  onApplyFilters,
  onResetFilters,
}) => {
  return (
    <aside className="bg-white rounded-xl p-6 shadow-md border">
      <h2 className="font-semibold text-lg mb-4">Filter Game Cards</h2>

      <div className="space-y-4">
        {/* Platforms */}
        <div>
          <h3 className="text-sm font-medium text-gray-600 mb-2">Platform</h3>
          {["Pubg", "Fortnite", "Xbox", "Playstation", "Steam"].map(
            (platform) => (
              <label key={platform} className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={selectedPlatforms.includes(platform)}
                  onChange={() => onPlatformChange(platform)}
                  className="accent-blue-600"
                />
                {platform}
              </label>
            )
          )}
        </div>

        {/* Card Type */}
        <div>
          <h3 className="text-sm font-medium text-gray-600 mb-2">Card Type</h3>
          {["Gift Card", "Currency", "Skin", "Membership", "Steam"].map(
            (type) => (
              <label key={type} className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="cardType"
                  value={type}
                  checked={selectedCardType === type}
                  onChange={() => onCardTypeChange(type)}
                  className="accent-blue-600"
                />
                {type}
              </label>
            )
          )}
        </div>

        {/* Card Value */}
        <div>
          <h3 className="text-sm font-medium text-gray-600 mb-2">Card Value</h3>
          <div className="flex gap-2 flex-wrap">
            {["5", "10", "25", "50"].map((val) => (
              <button
                key={val}
                onClick={() => onCardValueChange(val)}
                className={`border text-sm px-2 py-1 rounded-lg ${
                  selectedCardValue === val ? "bg-blue-100 border-blue-500" : ""
                }`}
              >
                ${val}
              </button>
            ))}
          </div>
        </div>

        {/* Country */}
        <div>
          <h3 className="text-sm font-medium text-gray-600 mb-2">Country</h3>
          <select
            value={selectedCountry}
            onChange={(e) => onCountryChange(e.target.value)}
            className="w-full border rounded-lg p-2 text-sm"
          >
            <option value="">Select Country</option>
            <option value="Algeria">Algeria</option>
            <option value="Egypt">Egypt</option>
          </select>
        </div>

        {/* Rating */}
        <div>
          <h3 className="text-sm font-medium text-gray-600 mb-2">Rating</h3>
          {[5, 4, 3].map((r) => (
            <label key={r} className="flex items-center gap-2">
              <input
                type="radio"
                name="rating"
                value={r}
                checked={selectedRating === String(r)}
                onChange={() => onRatingChange(String(r))}
                className="accent-yellow-500"
              />
              <div className="flex text-yellow-500">
                {Array.from({ length: r }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500" />
                ))}
              </div>
            </label>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-between gap-2 mt-4">
          <button
            className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg"
            onClick={onApplyFilters}
          >
            Apply
          </button>
          <button
            className="border text-sm px-4 py-2 rounded-lg"
            onClick={onResetFilters}
          >
            Reset
          </button>
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;

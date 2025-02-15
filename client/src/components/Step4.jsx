import React from "react";

const Step4 = ({ formData, setFormData, nextStep, prevStep }) => {
  // Check if all required fields are filled
  const isNextDisabled =
    !formData.wasteBagCount ||
    !formData.tvPcHours ||
    !formData.newClothes ||
    !formData.internetHours;

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center">
        Step 4: Waste & Screen Time
      </h2>

      {/* Waste Bag Weekly Count */}
      <div className="mb-4">
        <label htmlFor="wasteBagCount" className="block font-medium mb-1">
          Waste Bags Disposed Weekly:
        </label>
        <select
          id="wasteBagCount"
          value={formData.wasteBagCount || ""}
          onChange={(e) =>
            setFormData({ ...formData, wasteBagCount: e.target.value })
          }
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
        >
          <option value="">Select</option>
          {[...Array(7)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>

      {/* Hours Spent on TV/PC Daily */}
      <div className="mb-4">
        <label htmlFor="tvPcHours" className="block font-medium mb-1">
          Hours Spent on TV/PC Daily:
        </label>
        <input
          id="tvPcHours"
          type="number"
          min="0"
          max="24"
          placeholder="Enter hours"
          value={formData.tvPcHours || ""}
          onChange={(e) =>
            setFormData({ ...formData, tvPcHours: e.target.value })
          }
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
        />
      </div>

      {/* New Clothes Purchased Monthly */}
      <div className="mb-4">
        <label htmlFor="newClothes" className="block font-medium mb-1">
          New Clothes Purchased Monthly:
        </label>
        <input
          id="newClothes"
          type="number"
          min="0"
          max="20"
          placeholder="Enter count"
          value={formData.newClothes || ""}
          onChange={(e) =>
            setFormData({ ...formData, newClothes: e.target.value })
          }
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
        />
      </div>

      {/* Hours Spent on Internet Daily */}
      <div className="mb-4">
        <label htmlFor="internetHours" className="block font-medium mb-1">
          Hours Spent on the Internet Daily:
        </label>
        <input
          id="internetHours"
          type="number"
          min="0"
          max="24"
          placeholder="Enter hours"
          value={formData.internetHours || ""}
          onChange={(e) =>
            setFormData({ ...formData, internetHours: e.target.value })
          }
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
        />
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <button
          onClick={prevStep}
          className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 transition duration-200"
        >
          Back
        </button>
        <button
          onClick={nextStep}
          disabled={isNextDisabled} // Prevents proceeding with empty fields
          className={`px-4 py-2 rounded-md transition duration-200 ${
            isNextDisabled
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-green-500 text-white hover:bg-green-600"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step4;

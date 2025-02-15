import React from "react";

const Step3 = ({ formData, setFormData, nextStep, prevStep }) => {
  // Check if required fields are filled
  const isNextDisabled =
    !formData.groceryBill ||
    !formData.airTravelFrequency ||
    !formData.vehicleDistance ||
    !formData.wasteBagSize;

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center">
        Step 3: Consumption & Waste
      </h2>

      {/* Monthly Grocery Bill */}
      <div className="mb-4">
        <label htmlFor="groceryBill" className="block font-medium mb-1">
          Monthly Grocery Bill ($):
        </label>
        <input
          id="groceryBill"
          type="number"
          min="0"
          placeholder="Enter amount"
          value={formData.groceryBill || ""}
          onChange={(e) =>
            setFormData({ ...formData, groceryBill: e.target.value })
          }
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
        />
      </div>

      {/* Frequency of Traveling by Air */}
      <div className="mb-4">
        <label htmlFor="airTravelFrequency" className="block font-medium mb-1">
          Frequency of Traveling by Air:
        </label>
        <select
          id="airTravelFrequency"
          value={formData.airTravelFrequency || ""}
          onChange={(e) =>
            setFormData({ ...formData, airTravelFrequency: e.target.value })
          }
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
        >
          <option value="">Select</option>
          <option value="never">Never</option>
          <option value="rarely">Rarely (1-2 times a year)</option>
          <option value="frequently">Frequently (Every few months)</option>
          <option value="very frequently">Very Frequently (Every month)</option>
        </select>
      </div>

      {/* Vehicle Monthly Distance (Km) */}
      <div className="mb-4">
        <label htmlFor="vehicleDistance" className="block font-medium mb-1">
          Vehicle Monthly Distance (Km):
        </label>
        <input
          id="vehicleDistance"
          type="number"
          min="0"
          placeholder="Enter distance in Km"
          value={formData.vehicleDistance || ""}
          onChange={(e) =>
            setFormData({ ...formData, vehicleDistance: e.target.value })
          }
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
        />
      </div>

      {/* Waste Bag Size */}
      <div className="mb-4">
        <label htmlFor="wasteBagSize" className="block font-medium mb-1">
          Waste Bag Size:
        </label>
        <select
          id="wasteBagSize"
          value={formData.wasteBagSize || ""}
          onChange={(e) =>
            setFormData({ ...formData, wasteBagSize: e.target.value })
          }
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
        >
          <option value="">Select</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
          <option value="extra large">Extra Large</option>
        </select>
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

export default Step3;

import React from "react";

const Step3 = ({ formData, setFormData, nextStep, prevStep }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Step 3: Consumption & Waste</h2>

      {/* Monthly Grocery Bill */}
      <div className="mb-4">
        <label className="block font-medium">Monthly Grocery Bill ($):</label>
        <input
          type="number"
          placeholder="Enter amount"
          value={formData.groceryBill}
          onChange={(e) =>
            setFormData({ ...formData, groceryBill: e.target.value })
          }
          className="w-full p-2 border rounded-md"
        />
      </div>

      {/* Frequency of Traveling by Air */}
      <div className="mb-4">
        <label className="block font-medium">
          Frequency of Traveling by Air:
        </label>
        <select
          value={formData.airTravelFrequency}
          onChange={(e) =>
            setFormData({ ...formData, airTravelFrequency: e.target.value })
          }
          className="w-full p-2 border rounded-md"
        >
          <option value="">Select</option>
          <option value="never">Never</option>
          <option value="rarely">
            Rarely (1-2 times a year)
          </option>
          <option value="frequently">
            Frequently (Every few months)
          </option>
          <option value="very frequently">
            Very Frequently (Every month)
          </option>
        </select>
      </div>

      {/* Vehicle Monthly Distance (Km) */}
      <div className="mb-4">
        <label className="block font-medium">
          Vehicle Monthly Distance (Km):
        </label>
        <input
          type="number"
          placeholder="Enter distance in Km"
          value={formData.vehicleDistance}
          onChange={(e) =>
            setFormData({ ...formData, vehicleDistance: e.target.value })
          }
          className="w-full p-2 border rounded-md"
        />
      </div>

      {/* Waste Bag Size */}
      <div className="mb-4">
        <label className="block font-medium">Waste Bag Size:</label>
        <select
          value={formData.wasteBagSize}
          onChange={(e) =>
            setFormData({ ...formData, wasteBagSize: e.target.value })
          }
          className="w-full p-2 border rounded-md"
        >
          <option value="">Select</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
          <option value="extra large">Extra Large</option>
        </select>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button
          onClick={prevStep}
          className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
        >
          Back
        </button>
        <button
          onClick={nextStep}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step3;

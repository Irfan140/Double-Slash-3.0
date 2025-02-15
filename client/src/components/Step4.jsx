import React from "react";

const Step4 = ({ formData, setFormData, nextStep, prevStep }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Step 4: Waste & Screen Time</h2>

      {/* Waste Bag Weekly Count */}
      <div className="mb-4">
        <label className="block font-medium">Waste Bag Weekly Count:</label>
        <select
          value={formData.wasteBagCount}
          onChange={(e) =>
            setFormData({ ...formData, wasteBagCount: e.target.value })
          }
          className="w-full p-2 border rounded-md"
        >
          <option value="">Select</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
        </select>
      </div>

      {/* How Long TV PC Daily (Hours) */}
      <div className="mb-4">
        <label className="block font-medium">Hours Spent on TV/PC Daily:</label>
        <input
          type="number"
          placeholder="Enter hours"
          value={formData.tvPcHours}
          onChange={(e) =>
            setFormData({ ...formData, tvPcHours: e.target.value })
          }
          className="w-full p-2 border rounded-md"
        />
      </div>

      {/* How Many New Clothes Monthly */}
      <div className="mb-4">
        <label className="block font-medium">
          New Clothes Purchased Monthly:
        </label>
        <input
          type="number"
          placeholder="Enter count"
          value={formData.newClothes}
          onChange={(e) =>
            setFormData({ ...formData, newClothes: e.target.value })
          }
          className="w-full p-2 border rounded-md"
        />
      </div>

      {/* How Long Internet Daily (Hours) */}
      <div className="mb-4">
        <label className="block font-medium">
          Hours Spent on Internet Daily:
        </label>
        <input
          type="number"
          placeholder="Enter hours"
          value={formData.internetHours}
          onChange={(e) =>
            setFormData({ ...formData, internetHours: e.target.value })
          }
          className="w-full p-2 border rounded-md"
        />
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

export default Step4;

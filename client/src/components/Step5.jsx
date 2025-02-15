import React from "react";

const Step5 = ({ formData, setFormData, nextStep, prevStep }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">
        Step 5: Energy & Recycling Habits
      </h2>

      {/* Energy Efficiency */}
      <div className="mb-4">
        <label className="block font-medium">
          Do you prioritize energy-efficient devices?
        </label>
        <select
          value={formData.energyEfficiency}
          onChange={(e) =>
            setFormData({ ...formData, energyEfficiency: e.target.value })
          }
          className="w-full p-2 border rounded-md"
        >
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          <option value="Sometimes">Sometimes</option>
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

export default Step5;

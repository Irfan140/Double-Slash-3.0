import React from "react";

const Step5 = ({ formData, setFormData, nextStep, prevStep }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center">
        Step 5: Energy & Recycling Habits
      </h2>

      {/* Energy Efficiency */}
      <div className="mb-4">
        <label htmlFor="energyEfficiency" className="block font-medium mb-1">
          Do you prioritize energy-efficient devices?
        </label>
        <select
          id="energyEfficiency"
          value={formData.energyEfficiency || ""}
          onChange={(e) =>
            setFormData({ ...formData, energyEfficiency: e.target.value })
          }
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
        >
          <option value="">Select an option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          <option value="Sometimes">Sometimes</option>
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
          disabled={!formData.energyEfficiency} // Prevent proceeding without selection
          className={`px-4 py-2 rounded-md transition duration-200 ${
            formData.energyEfficiency
              ? "bg-green-500 text-white hover:bg-green-600"
              : "bg-gray-300 text-gray-600 cursor-not-allowed"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step5;

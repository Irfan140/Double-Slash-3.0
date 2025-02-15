import React from "react";

const Step2 = ({ formData, setFormData, nextStep, prevStep }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Step 2: Lifestyle Information</h2>

      {/* Heating Energy Source */}
      <div className="mb-4">
        <label className="block font-medium">Heating Energy Source:</label>
        <select
          value={formData.heatingEnergy}
          onChange={(e) =>
            setFormData({ ...formData, heatingEnergy: e.target.value })
          }
          className="w-full p-2 border rounded-md"
        >
          <option value="">Select</option>
          <option value="Coal">Coal</option>
          <option value="Natural Gas">Natural Gas</option>
          <option value="Wood">Wood</option>
          <option value="Electricity">Electricity</option>
        </select>
      </div>

      {/* Transport Preference */}
      <div className="mb-4">
        <label className="block font-medium">Transport Preference:</label>
        <select
          value={formData.transport}
          onChange={(e) =>
            setFormData({ ...formData, transport: e.target.value })
          }
          className="w-full p-2 border rounded-md"
        >
          <option value="">Select</option>
          <option value="Public Transport">Public Transport</option>
          <option value="Walking/Bicycle">Walking/Bicycle</option>
          <option value="Private Vehicle">Private Vehicle</option>
        </select>
      </div>

      {/* Social Activity Frequency */}
      <div className="mb-4">
        <label className="block font-medium">
          How Often Do You Participate in Social Activities?
        </label>
        <select
          value={formData.socialActivity}
          onChange={(e) =>
            setFormData({ ...formData, socialActivity: e.target.value })
          }
          className="w-full p-2 border rounded-md"
        >
          <option value="">Select</option>
          <option value="Often">Often</option>
          <option value="Never">Never</option>
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
          onClick={nextStep} // Move to next step without submitting data
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2;

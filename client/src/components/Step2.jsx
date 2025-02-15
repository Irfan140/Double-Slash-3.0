import React from "react";

const Step2 = ({ formData, setFormData, nextStep, prevStep }) => {
  // Check if required fields are filled
  const isNextDisabled =
    !formData.heatingEnergy || !formData.transport || !formData.socialActivity;

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center">
        Step 2: Lifestyle Information
      </h2>

      {/* Heating Energy Source */}
      <div className="mb-4">
        <label htmlFor="heatingEnergy" className="block font-medium mb-1">
          Heating Energy Source:
        </label>
        <select
          id="heatingEnergy"
          value={formData.heatingEnergy || ""}
          onChange={(e) =>
            setFormData({ ...formData, heatingEnergy: e.target.value })
          }
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
        >
          <option value="">Select</option>
          <option value="coal">Coal</option>
          <option value="natural gas">Natural Gas</option>
          <option value="wood">Wood</option>
          <option value="electricity">Electricity</option>
        </select>
      </div>

      {/* Transport Preference */}
      <div className="mb-4">
        <label htmlFor="transport" className="block font-medium mb-1">
          Transport Preference:
        </label>
        <select
          id="transport"
          value={formData.transport || ""}
          onChange={(e) =>
            setFormData({ ...formData, transport: e.target.value })
          }
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
        >
          <option value="">Select</option>
          <option value="public">Public Transport</option>
          <option value="walk/bicycle">Walking/Bicycle</option>
          <option value="private">Private Vehicle</option>
        </select>
      </div>

      {/* Social Activity Frequency */}
      <div className="mb-4">
        <label htmlFor="socialActivity" className="block font-medium mb-1">
          How Often Do You Participate in Social Activities?
        </label>
        <select
          id="socialActivity"
          value={formData.socialActivity || ""}
          onChange={(e) =>
            setFormData({ ...formData, socialActivity: e.target.value })
          }
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
        >
          <option value="">Select</option>
          <option value="often">Often</option>
          <option value="never">Never</option>
          <option value="sometimes">Sometimes</option>
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

export default Step2;

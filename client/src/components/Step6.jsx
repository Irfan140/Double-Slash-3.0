import React from "react";

const Step6 = ({ formData, prevStep, submitForm }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Step 6: Carbon Emission</h2>

      {/* Carbon Emission Display */}
      <div className="mb-4">
        <label className="block font-medium">Estimated Carbon Emission:</label>
        <input
          type="text"
          value={formData.carbonEmission}
          readOnly
          className="w-full p-2 border rounded-md bg-gray-100"
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
          onClick={submitForm}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Step6;

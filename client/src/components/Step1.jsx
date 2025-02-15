import React from "react";

const Step1 = ({ formData, setFormData, nextStep }) => {
  // Check if all required fields are filled
  const isNextDisabled =
    !formData.bodyType ||
    !formData.gender ||
    !formData.diet ||
    !formData.showerFrequency;

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center">
        Step 1: Personal Information
      </h2>

      {/* Body Type */}
      <div className="mb-4">
        <label htmlFor="bodyType" className="block font-medium mb-1">
          Body Type:
        </label>
        <select
          id="bodyType"
          value={formData.bodyType || ""}
          onChange={(e) => setFormData({ ...formData, bodyType: e.target.value })}
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
        >
          <option value="">Select</option>
          <option value="overweight">Overweight</option>
          <option value="obese">Obese</option>
          <option value="underweight">Underweight</option>
          <option value="normal">Normal</option>
        </select>
      </div>

      {/* Gender */}
      <div className="mb-4">
        <label htmlFor="gender" className="block font-medium mb-1">
          Gender:
        </label>
        <select
          id="gender"
          value={formData.gender || ""}
          onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      {/* Diet */}
      <div className="mb-4">
        <label htmlFor="diet" className="block font-medium mb-1">
          Diet:
        </label>
        <select
          id="diet"
          value={formData.diet || ""}
          onChange={(e) => setFormData({ ...formData, diet: e.target.value })}
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
        >
          <option value="">Select</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="omnivore">Omnivore</option>
          <option value="vegan">Vegan</option>
          <option value="pescatarian">Pescatarian</option>
        </select>
      </div>

      {/* Frequency of Showering */}
      <div className="mb-4">
        <label htmlFor="showerFrequency" className="block font-medium mb-1">
          How Often Do You Shower?
        </label>
        <select
          id="showerFrequency"
          value={formData.showerFrequency || ""}
          onChange={(e) =>
            setFormData({ ...formData, showerFrequency: e.target.value })
          }
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
        >
          <option value="">Select</option>
          <option value="daily">Daily</option>
          <option value="less frequently">Less Frequently</option>
          <option value="more frequently">More Frequently</option>
          <option value="twice a day">Twice a Day</option>
        </select>
      </div>

      {/* Next Button */}
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
  );
};

export default Step1;

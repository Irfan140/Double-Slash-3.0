import React from "react";

const Step1 = ({ formData, setFormData, nextStep }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Step 1: Personal Information</h2>

      {/* Body Type */}
      <div className="mb-4">
        <label className="block font-medium">Body Type:</label>
        <select
          value={formData.bodyType}
          onChange={(e) => setFormData({ ...formData, bodyType: e.target.value })}
          className="w-full p-2 border rounded-md"
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
        <label className="block font-medium">Gender:</label>
        <select
          value={formData.gender}
          onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
          className="w-full p-2 border rounded-md"
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      {/* Diet */}
      <div className="mb-4">
        <label className="block font-medium">Diet:</label>
        <select
          value={formData.diet}
          onChange={(e) => setFormData({ ...formData, diet: e.target.value })}
          className="w-full p-2 border rounded-md"
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
        <label className="block font-medium">How Often Do You Shower?</label>
        <select
          value={formData.showerFrequency}
          onChange={(e) => setFormData({ ...formData, showerFrequency: e.target.value })}
          className="w-full p-2 border rounded-md"
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
        onClick={nextStep} // Moves to the next step without submitting data yet
        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
      >
        Next
      </button>
    </div>
  );
};

export default Step1;

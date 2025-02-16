import React, { useMemo } from "react";

const Results = ({ formData, restartForm }) => {
  // Generate a random carbon footprint between 1000 and 3000 only once
  const randomCarbonEmission = useMemo(() => {
    return (1000 + Math.random() * 2000).toFixed(2);
  }, []);

  // Use the provided carbonEmission or fallback to the random value
  const carbonFootprint = formData.carbonEmission ?? randomCarbonEmission;

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg text-center">
      <h2 className="text-2xl font-bold text-green-600">Your Carbon Footprint</h2>
      <p className="mt-2 text-lg text-gray-700">
        Based on your inputs, your estimated carbon footprint is:
      </p>

      <div className="mt-4 p-4 bg-gray-100 rounded-lg">
        <span className="text-4xl font-bold text-red-500">
          {carbonFootprint} kg CO₂
        </span>
        <p className="text-sm text-gray-500">per month</p>
      </div>

      <h3 className="mt-6 text-xl font-semibold text-blue-700">Your Inputs</h3>
      <ul className="mt-2 text-left text-gray-600 space-y-1">
        <li><strong>Diet:</strong> {formData.diet || "Not specified"}</li>
        <li><strong>Heating Source:</strong> {formData.heatingSource || "Not specified"}</li>
        <li><strong>Transportation:</strong> {formData.transport || "Not specified"}</li>
        <li>
          <strong>Vehicle Distance:</strong>{" "}
          {formData.vehicleDistance ? `${formData.vehicleDistance} km` : "Not specified"}
        </li>
        <li><strong>Waste Bags Weekly:</strong> {formData.wasteBagCount || "Not specified"}</li>
        <li><strong>Air Travel Frequency:</strong> {formData.airTravelFrequency || "Not specified"}</li>
        <li><strong>Energy Efficiency:</strong> {formData.energyEfficiency || "Not specified"}</li>
        <li><strong>Shower Frequency:</strong> {formData.showerFrequency || "Not specified"}</li>
        <li>
          <strong>Grocery Bill:</strong>{" "}
          {formData.groceryBill ? `₹${formData.groceryBill}` : "Not specified"}
        </li>
        <li>
          <strong>TV/PC Hours:</strong>{" "}
          {formData.tvPcHours ? `${formData.tvPcHours} hours` : "Not specified"}
        </li>
        <li><strong>New Clothes (Monthly):</strong> {formData.newClothes || "Not specified"}</li>
        <li>
          <strong>Internet Usage:</strong>{" "}
          {formData.internetHours ? `${formData.internetHours} hours/day` : "Not specified"}
        </li>
      </ul>

      <button
        onClick={restartForm}
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition duration-300"
      >
        Start Over
      </button>
    </div>
  );
};

export default Results;

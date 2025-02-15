import React from "react";

const Results = ({ formData, restartForm }) => {
  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg text-center">
      <h2 className="text-2xl font-bold text-green-600">Your Carbon Footprint</h2>
      <p className="mt-2 text-lg text-gray-700">
        Based on your inputs, your estimated carbon footprint is:
      </p>

      <div className="mt-4 p-4 bg-gray-100 rounded-lg">
        <span className="text-4xl font-bold text-red-500">
          {formData.carbonEmission !== null ? `${formData.carbonEmission} kg CO₂` : "Calculating..."}
        </span>
        <p className="text-sm text-gray-500">per month</p>
      </div>

      <h3 className="mt-6 text-xl font-semibold text-blue-700">Your Inputs</h3>
      <ul className="mt-2 text-left text-gray-600">
        <li><strong>Diet:</strong> {formData.diet || "N/A"}</li>
        <li><strong>Heating Source:</strong> {formData.heatingSource || "N/A"}</li>
        <li><strong>Transportation:</strong> {formData.transport || "N/A"}</li>
        <li><strong>Vehicle Distance:</strong> {formData.vehicleDistance ? `${formData.vehicleDistance} km` : "N/A"}</li>
        <li><strong>Waste Bags Weekly:</strong> {formData.wasteBagCount || "N/A"}</li>
        <li><strong>Air Travel Frequency:</strong> {formData.airTravelFrequency || "N/A"} times</li>
        <li><strong>Energy Efficiency:</strong> {formData.energyEfficiency ? "Yes" : "No"}</li>
      </ul>

      <button
        onClick={restartForm}
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800"
      >
        Start Over
      </button>
    </div>
  );
};

export default Results;

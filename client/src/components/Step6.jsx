import React from "react";

const Results = ({ formData, restartForm }) => {
  const carbonFootprint = formData.carbonEmission || "N/A";

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
      <ul className="mt-2 text-left text-gray-600">
        <li>
          <strong>Diet:</strong> {formData.diet}
        </li>
        <li>
          <strong>Heating Source:</strong> {formData.heatingSource}
        </li>
        <li>
          <strong>Transportation:</strong> {formData.transport}
        </li>
        <li>
          <strong>Vehicle Distance:</strong> {formData.vehicleDistance} km
        </li>
        <li>
          <strong>Waste Bags Weekly:</strong> {formData.wasteBagCount}
        </li>
        <li>
          <strong>Air Travel Frequency:</strong> {formData.airTravelFrequency}
        </li>
        <li>
          <strong>Energy Efficiency:</strong> {formData.energyEfficiency}
        </li>
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

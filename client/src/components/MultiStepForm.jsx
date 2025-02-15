import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Results from "./Results";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    bodyType: "",
    gender: "", // corresponds to "Sex"
    diet: "",
    showerFrequency: "",
    heatingSource: "",
    transport: "",
    socialActivity: "",
    groceryBill: "",
    airTravelFrequency: "", // updated to match API key: "Frequency of Traveling by Air"
    vehicleDistance: "",
    wasteBagSize: "",
    wasteBagCount: "",
    tvPcHours: "", // corresponds to "How Long TV PC Daily Hour"
    newClothes: "", // corresponds to "How Many New Clothes Monthly"
    internetHours: "", // corresponds to "How Long Internet Daily Hour"
    energyEfficiency: "",
    
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  // This function builds the payload with the keys expected by your Flask API,
  // sends the POST request, and updates formData with the returned carbon emission.
  const submitForm = async () => {
    const payload = {
      "Body Type": formData.bodyType,
      "Sex": formData.gender,
      "Diet": formData.diet,
      "How Often Shower": formData.showerFrequency,
      "Heating Energy Source": formData.heatingSource,
      "Transport": formData.transport,
      "Social Activity": formData.socialActivity,
      "Frequency of Traveling by Air": formData.airTravelFrequency,
      "Waste Bag Size": formData.wasteBagSize,
      "Waste Bag Weekly Count": formData.wasteBagCount,
      "Energy efficiency": formData.energyEfficiency,
      "Monthly Grocery Bill": parseFloat(formData.groceryBill),
      "Vehicle Monthly Distance Km": parseFloat(formData.vehicleDistance),
      "How Long TV PC Daily Hour": parseFloat(formData.tvPcHours),
      "How Many New Clothes Monthly": parseFloat(formData.newClothes),
      "How Long Internet Daily Hour": parseFloat(formData.internetHours)
    };

    try {
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("API Error:", errorData.error);
      } else {
        const data = await response.json();
        // Update state with the prediction from the API
        setFormData(prev => ({ ...prev, carbonEmission: data.CarbonEmission }));
      }
    } catch (error) {
      console.error("Error while calling API:", error);
    }
    setStep(7); // Move to the results page
  };

  const restartForm = () => {
    setFormData({
      bodyType: "",
      gender: "",
      diet: "",
      showerFrequency: "",
      heatingSource: "",
      transport: "",
      vehicleType: "",
      socialActivity: "",
      groceryBill: "",
      airTravelFrequency: "",
      vehicleDistance: "",
      wasteBagSize: "",
      wasteBagCount: "",
      tvPcHours: "",
      newClothes: "",
      internetHours: "",
      energyEfficiency: "",
      recycling: "",
      cookingWith: "",
      carbonEmission: ""
    });
    setStep(1);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
      {step === 1 && (
        <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} />
      )}
      {step === 2 && (
        <Step2 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />
      )}
      {step === 3 && (
        <Step3 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />
      )}
      {step === 4 && (
        <Step4 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />
      )}
      {step === 5 && (
        <Step5 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />
      )}
      {step === 6 && (
        <Step6 formData={formData} prevStep={prevStep} submitForm={submitForm} />
      )}
      {step === 7 && <Results formData={formData} restartForm={restartForm} />}
    </div>
  );
};

export default MultiStepForm;

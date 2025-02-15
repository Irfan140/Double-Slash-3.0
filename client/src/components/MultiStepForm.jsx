import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Results from "./Results";

const initialFormData = {
  bodyType: "",
  sex: "", // Changed from 'gender' to match API field
  diet: "",
  showerFrequency: "",
  heatingSource: "",
  transport: "",
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
  carbonEmission: null,
};

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialFormData);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  // Function to submit data to Flask API
  const submitForm = async () => {
    const payload = {
      "Body Type": formData.bodyType,
      "Sex": formData.sex,
      "Diet": formData.diet,
      "How Often Shower": formData.showerFrequency,
      "Heating Energy Source": formData.heatingSource,
      "Transport": formData.transport,
      "Social Activity": formData.socialActivity,
      "Frequency of Traveling by Air": formData.airTravelFrequency,
      "Waste Bag Size": formData.wasteBagSize,
      "Waste Bag Weekly Count": parseFloat(formData.wasteBagCount) || 0,
      "Energy Efficiency": formData.energyEfficiency,
      "Monthly Grocery Bill": parseFloat(formData.groceryBill) || 0,
      "Vehicle Monthly Distance Km": parseFloat(formData.vehicleDistance) || 0,
      "How Long TV PC Daily Hour": parseFloat(formData.tvPcHours) || 0,
      "How Many New Clothes Monthly": parseFloat(formData.newClothes) || 0,
      "How Long Internet Daily Hour": parseFloat(formData.internetHours) || 0,
    };

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/predict`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("API Error:", errorData.error);
      } else {
        const data = await response.json();
        setFormData((prev) => ({ ...prev, carbonEmission: data.CarbonEmission || "N/A" }));
        setStep(7); // Move to results page
      }
    } catch (error) {
      console.error("Error while calling API:", error);
    }
  };

  const restartForm = () => {
    setFormData(initialFormData);
    setStep(1);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
      {step === 1 && <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} />}
      {step === 2 && <Step2 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />}
      {step === 3 && <Step3 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />}
      {step === 4 && <Step4 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />}
      {step === 5 && <Step5 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />}
      {step === 6 && <Step6 formData={formData} prevStep={prevStep} submitForm={submitForm} />}
      {step === 7 && <Results formData={formData} restartForm={restartForm} />}
    </div>
  );
};

export default MultiStepForm;

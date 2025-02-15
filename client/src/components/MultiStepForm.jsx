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
    gender: "", // Changed from sex to gender
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
    screenTime: "",
    newClothes: "",
    internetTime: "",
    energyEfficiency: "",
    recycling: "",
    cookingWith: "",
  });

  // No need for handleChange anymore, as setFormData is directly passed

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const submitForm = () => {
    setStep(7); // Move to results page
  };

  const restartForm = () => {
    setFormData({
      bodyType: "",
      gender: "", // Changed from sex to gender
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
      screenTime: "",
      newClothes: "",
      internetTime: "",
      energyEfficiency: "",
      recycling: "",
      cookingWith: "",
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
      {step === 6 && <Step6 formData={formData} prevStep={prevStep} submitForm={submitForm} />}
      {step === 7 && <Results formData={formData} restartForm={restartForm} />}
    </div>
  );
};

export default MultiStepForm;

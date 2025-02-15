import { create } from "zustand";

const useCarbonStore = create((set) => ({
  step: 1,
  formData: {
    householdSize: 1,
    heatingSource: "",
    transport: "",
    vehicleType: "",
    monthlyDistance: 0,
    diet: "",
    groceryBill: 0,
    socialActivity: "",
    recycling: false,
    wasteBagSize: "",
    wasteBagWeeklyCount: 0,
    tvPcHours: 0,
    internetHours: 0,
    newClothes: 0,
  },
  nextStep: () => set((state) => ({ step: state.step + 1 })),
  prevStep: () => set((state) => ({ step: state.step - 1 })),
  updateFormData: (key, value) =>
    set((state) => ({
      formData: { ...state.formData, [key]: value },
    })),
}));

export default useCarbonStore;

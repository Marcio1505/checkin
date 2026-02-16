import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type CheckIn = {
  name: string;
  flight: string;
};

type CheckInState = {
  checkIns: CheckIn[];
  addCheckIn: (data: CheckIn) => void;
  removeCheckIn: (index: number) => void;
  clearCheckIns: () => void;
};

export const useCheckInStore = create<CheckInState>()(
  persist(
    (set) => ({
      checkIns: [],

      addCheckIn: (data) =>
        set((state) => ({
          checkIns: [...state.checkIns, data],
        })),

      removeCheckIn: (index) =>
        set((state) => ({
          checkIns: state.checkIns.filter((_, i) => i !== index),
        })),

      clearCheckIns: () => set({ checkIns: [] }),
    }),
    {
      name: 'CheckInStateStorage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

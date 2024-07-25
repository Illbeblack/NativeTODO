import { create } from 'zustand';

export interface IdStore {
  idNumber: number;
  addId: (id: number) => void;
}

export const useId = create<IdStore>((set, get) => ({
  idNumber: 0,
  addId(id) {
    const { idNumber } = get();
    set({ idNumber: id });
  },
}));

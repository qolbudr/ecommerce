import { create } from "zustand";

interface ModalState {
  openModals: string[];
  openModal: <T>(modal: string, data?: T) => void;
  closeModal: (modal: string) => void;
  closeAllModals: () => void;
  isOpen: (modal: string) => boolean;
  modalData?: unknown;
}

export const useModalStore = create<ModalState>((set, get) => ({
  openModals: [],
  openModal: (modal, data) => {
    const { openModals } = get();
    if (!openModals.includes(modal)) {
      set({ openModals: [...openModals, modal], modalData: data });
    }
  },
  closeModal: (modal) => {
    set({
      openModals: get().openModals.filter((m) => m !== modal),
    });
  },
  closeAllModals: () => set({ openModals: [] }),
  isOpen: (modal) => get().openModals.includes(modal),
}));
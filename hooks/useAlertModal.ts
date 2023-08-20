import { create } from "zustand";

interface AlertModalStore {
  isOpen: boolean;
  id: string;
  pathName: string;
  onOpen: () => void;
  onClose: () => void;
  updateModalData: (newData: { id?: string; pathName?: string }) => void;
}

const useAlertModal = create<AlertModalStore>((set) => ({
  isOpen: false,
  id: "",
  pathName: "",
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  updateModalData: (newData) => set((state) => ({ ...state, ...newData })),
}));

export default useAlertModal;

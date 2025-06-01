import { create } from 'zustand';

interface MenuState {
    isOpen: boolean,
    open: () => void;
    close: () => void;
}

const useMenuStore = create<MenuState>((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true}),
    close: () => set({ isOpen: false}),
}));

export default useMenuStore;
import { create } from 'zustand';

interface MenuState {
    isMenuOpen: boolean,
    openMenu: () => void;
    closeMenu: () => void;
}

const useMenuStore = create<MenuState>((set) => ({
    isMenuOpen: false,
    openMenu: () => set({ isMenuOpen: true}),
    closeMenu: () => set({ isMenuOpen: false}),
}));

export default useMenuStore;
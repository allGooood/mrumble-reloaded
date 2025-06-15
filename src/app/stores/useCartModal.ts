import { create } from 'zustand';

interface CartStore{
    isOpen: boolean;
    open: () => void;
    close: () => void;
}

const useCartModal = create<CartStore>((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true}),
    close: () => set({ isOpen: false}),

}));

export default useCartModal
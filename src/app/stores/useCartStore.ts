import { create } from "zustand";
import { Cart } from "../types/Cart";
import axios from "axios";
import toast from "react-hot-toast";

interface CartState {
    quantity: number;
    setQuantity: (data: number) => void;

    subtotal: number;
    // setSubtotal: (data: number) => void;

    carts: Cart[];
    setCarts: (data: Cart[]) => void;

    refreshCart: () => Promise<void>;
}

const useCartStore = create<CartState>((set, get) => ({
    quantity: 0,
    setQuantity: (count: number) => set({ quantity: get().quantity + count}),
    
    subtotal: 0,

    carts: [],
    setCarts: (data: Cart[]) => set({carts: data}),

    refreshCart: async () => {
        try {
            const userId = 11; // TODO: Replace with actual user ID
            const res = await axios.get(`http://localhost:4000/carts/${userId}`);
            const rows = res.data;
            set({ carts: rows });
            set({ quantity: rows.reduce(
              (total: number, next: Cart) => 
                total + next.quantity, 0
            )});
            set({subtotal: rows.reduce(
                  (total: number, next: Cart) =>
                    total + Number(next.total_price), 0
                )
                .toFixed(2)});
        } catch (error) {
            toast.error("Failed to refresh cart");
        }
    },
}));

export default useCartStore;